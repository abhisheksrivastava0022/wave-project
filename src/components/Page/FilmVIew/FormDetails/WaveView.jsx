import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import defaultimg from "../../assets/img/default.jpg";
import projectdefault from "../../assets/img/project-default.png";
import {
  fetchCountries,
  fetchLanguage,
  fetchPrintFormat,
  fetchSoundFormat,
  fetchRatioFormat,
  fetchType,
} from "../../store/actions/filmActions";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputLabel,
  Select,
} from "@mui/material";
import axios from "axios";
import BuyerInterestView from "../FormDetails/BuyerInterestView";
import Loader from "../../components/Loader";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import ApiClient from "../../components/API/ApiClient";
import Footer from "../../components/Footer";

const WaveView = ({ loadFormatTypes }) => {
  const { getRequestApi } = ApiClient();
  const getSegmentType = (stageIds) => {
    if (!stageIds) return "";

    const stagetype = segments?.find((c) => c.id === stageIds);
    return stagetype ? stagetype.name : "";
  };
  const dispatch = useDispatch();
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentAction, setCurrentAction] = useState({}); // To track the current action
  const [segments, setSegments] = useState([]);
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false); // State for managing loader
  const [error, setError] = useState(null);
  const countries = useSelector((state) => state.films.countries.data);
  const languages = useSelector((state) => state.languages.data);
  const types = useSelector((state) => state.types.data);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchLanguage());
    dispatch(fetchPrintFormat());
    dispatch(fetchType());
    dispatch(fetchSoundFormat());
    dispatch(fetchRatioFormat());
  }, [dispatch]);
  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const data1 = await getRequestApi(`site/segment`, {});
        if (data1.status) {
          setSegments(data1.data);
        }
        setLoading(true);
        const response = await fetch(`${BASE_URL}/film/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch film data");
        }
        const data = await response.json();
        // console.log("Fetched film data:", data); // Log entire response data for inspection

        // Check if the `data` object has `data` property and log its structure
        if (data && data.data) {
          // console.log("Film data exists:", data.data);
          // console.log("type2Document in film:", data.data.film_document); // Log `type2Document` object if it exists

          // Check if `type2Document` has the `url` property
          if (data.data.film_document && data.data.film_document.url) {
            // console.log(
            //   "type2Document URL exists:",
            //   data.data.film_document.url
            // );
          } else {
            console.warn(
              "type2Document or its URL is missing in the film data"
            );
          }
        } else {
          console.warn("Film data is missing in the response");
        }
        setFilm(data.data);
      } catch (error) {
        console.error("Error fetching film data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilm();
  }, [id]);

  const [formDataDetails, setFormDataDetails] = useState([]);
  const [formatTypes, setFormatTypes] = useState([]);
  const [stageTypes, setStageTypes] = useState([]);

  useEffect(() => {
    const fetchVideographyTypes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/site/videography-type`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const result = await response.json();
        if (result.status) {
          setFormDataDetails(result.data);
        } else {
          console.error("Error: ", result.message);
        }
      } catch (error) {
        console.error("Error fetching videography types:", error);
      }
    };
    fetchVideographyTypes();
  }, []);

  useEffect(() => {
    const loadFormatTypes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/site/format-type`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const result = await response.json();
        if (result.status) {
          setFormatTypes(result.data);
        } else {
          console.error("Error: ", result.message);
        }
      } catch (error) {
        console.error("Error fetching format types:", error);
      }
    };
    loadFormatTypes();
  }, []);

  useEffect(() => {
    const loadStageTypes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/site/stage-type`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const result = await response.json();
        if (result.status) {
          setStageTypes(result.data);
        } else {
          console.error("Error: ", result.message);
        }
      } catch (error) {
        console.error("Error fetching stage types:", error);
      }
    };
    loadStageTypes();
  }, []);

  // const getCountryNames = (countryIds) => {
  //     if (!countryIds) return "";
  //     return countryIds.map(id => countries?.find(country => country.id === id)?.name || '  ').join(', ');
  // };

  // const getLanguageNames = (languageIds) => {
  //     if (!languageIds) return "";
  //     return languageIds.map(id => languages.find(language => language.id === id)?.name || '  ').join(', ');
  // };

  // const getFilmNames = (filmIds) => {
  //     if (!filmIds) return "";
  //     return filmIds.map(id => types.find(filmDetails => filmDetails.id === id)?.name || '  ').join(', ');
  // };

  const getFilmNames = (filmIds) => {
    if (!filmIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(filmIds) ? filmIds : [filmIds];

    return idsArray
      .map((id) => types?.find((films) => films.id === id)?.name || "")
      .join(", ");
  };

  // const getVideography = (videoIds) => {
  //     return videoIds.map(id => formDataDetails?.data.find(video => video.id === id)?.name || '  ').join(', ');
  // };
  const getVideography = (videoIds) => {
    if (!videoIds) return "";

    const Videography = formDataDetails?.find((c) => c.id === videoIds);
    return Videography ? Videography.name : "";
  };
  const getformattype = (formatIds) => {
    if (!formatIds) return "";

    const getformattypedetails = formatTypes?.find((c) => c.id === formatIds);
    return getformattypedetails ? getformattypedetails.name : "";
  };
  const getformatstagetype = (stageIds) => {
    if (!stageIds) return "";

    const stagetype = stageTypes?.find((c) => c.id === stageIds);
    return stagetype ? stagetype.name : "";
  };
  const documentUrl = film?.type2Document?.url;
  // console.log("film", documentUrl);

  const lookingForOptions = {
    1: "Project Financing",
    2: "Sales and Distribution",
    // Add other mappings as needed
  };

  const designationOptions = [
    { id: 1, name: "Primary Contact Person" },
    { id: 2, name: "Screen Writer" },
    { id: 3, name: "Co-Screen Writer" },
    { id: 4, name: "Director" },
    { id: 5, name: "Co-Director" },
    { id: 6, name: "Producer" },
    { id: 7, name: "Co-Producer" },
    { id: 8, name: "Attendee" },
  ];

  const getCountryNames = (countryIds) => {
    if (!countryIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(countryIds) ? countryIds : [countryIds];

    return idsArray
      .map(
        (id) => countries?.find((country) => country.id === id)?.name || "  "
      )
      .join(", ");
  };

  const getLanguageNames = (languageIds) => {
    if (!languageIds) return "";

    // Check if languageIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(languageIds) ? languageIds : [languageIds];

    return idsArray
      .map(
        (id) => languages.find((language) => language.id === id)?.name || "  "
      )
      .join(", ");
  };

  const toRoman = (num) => {
    const romanNumerals = [
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];

    let roman = "";
    for (let [letter, value] of romanNumerals) {
      while (num >= value) {
        roman += letter;
        num -= value;
      }
    }
    return roman;
  };
  const formatDate = (dateString) => {
    if (!dateString) return ""; // Handle empty or undefined dates
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB").format(date); // Formats as d/m/Y
  };
  const getMonthName = (monthId) => {
    if (!monthId) return ""; // Return an empty string if no month is selected

    const monthNames = [
      "", // Placeholder for 0 or undefined
      "January", // 1
      "February", // 2
      "March", // 3
      "April", // 4
      "May", // 5
      "June", // 6
      "July", // 7
      "August", // 8
      "September", // 9
      "October", // 10
      "November", // 11
      "December", // 12
    ];

    return monthNames[monthId] || ""; // Return the corresponding month name or empty string
  };
  return (
    <>
      <div className="container">
        <Header />
        <div className="col-lg-12 mb-3 mt-3"></div>
        <div className="innerpage mt-3">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <Sidebar />
            </div>

            <div className="col-md-9 col-sm-9">
              {loading ? (
                <Loader />
              ) : error ? (
                <p>Error: {error}</p>
              ) : film ? (
                <>
                  {/* Title of the form */}
                  <div className="page-title">
                    <h2>Film Information</h2>
                    {film?.owner ? (
                      <Link to={`/wave-project/${id}`}>
                        <button className="btn btn-primary btn-yellow">
                          Edit
                        </button>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="filter mb-3">
                    {film ? (
                      (() => {
                        const type2Document = film.film_document?.find(
                          (doc) => doc.type === 8
                        );
                        return (
                          <div className="user-details" key={film.id}>
                            <div>
                              <span className="project-img-upload">
                                {type2Document && type2Document.url ? (
                                  <img
                                    src={`${BASE_URL}/file/read/${type2Document.url}`}
                                    alt={type2Document.name}
                                    className="project-img"
                                  />
                                ) : (
                                  <img
                                    src={projectdefault}
                                    alt="user"
                                    className="project-img"
                                  />
                                )}
                              </span>
                            </div>
                            <div className="user-information">
                              <h4>{film.title}</h4>
                              <div className="row">
                                <div className="col-md-6">
                                  <li>
                                    Languages: {getLanguageNames(film.language)}
                                  </li>
                                </div>
                                <div className="col-md-6">
                                  <div className="border-left">
                                    <li>
                                      Countries of Production:{" "}
                                      {getCountryNames(film.country)}
                                    </li>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })()
                    ) : (
                      <p></p>
                    )}
                  </div>

                  {/* Basic information */}
                  {/* <div className="shadow-sm white-bg mb-3">
                    <div className="information-get">
                      <h4>Basic information</h4>
                      <div className="table-responsive mt-3">
                        <table className="table mb-0">
                          <tbody>
                            <tr>
                              <th scope="row">Segment Type :</th>
                              <td>{getSegmentType(film.category)}</td>
                            </tr>
                            <tr>
                              <th scope="row"> Stage Type :</th>
                              <td>{getformatstagetype(film.stage_type)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div> */}

                  {(film.category || film.stage_type) ?
                    (
                      <>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                          <div className="list-group-item active header-title-bg mb-4">
                            <div className="d-flex align-items-center justify-content-start w-100">
                              <h6>Basic information</h6>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <div className="table-responsive">
                            <table className="table mb-0">
                              <tbody>
                                {film.category && (
                                  <tr>
                                    <th scope="row">Segment Type :</th>
                                    <td>{getSegmentType(film.category)}</td>
                                  </tr>
                                )}
                                {film.stage_type && (
                                  <tr>
                                    <th scope="row">Stage Type :</th>
                                    <td>{getformatstagetype(film.stage_type)}</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </Grid>
                      </>
                    ) : <></>
                  }





                  {(film.type_of_content || film.country?.length > 0 || film.language || film.post_production_work || film.rough_cut_duration || film.duration || film.month_of_completion || film.expected_rough_cut_date || film.year_of_completion) ? (
                    <>
                      <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                        <div className="list-group-item active header-title-bg mb-4">
                          <div className="d-flex align-items-center justify-content-start w-100">
                            <h6>Content Information</h6>
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              {film.type_of_content && (
                                <tr>
                                  <th scope="row">Type Of Content :</th>
                                  <td> {film.type_of_content}</td>
                                </tr>
                              )}
                              {/* {film.country && (
                                <tr>
                                  <th scope="row">Countries of production :</th>
                                  <td>{getCountryNames(film.country)}</td>
                                </tr>
                              )} */}

                              {film.country?.length > 0 && (
                                <tr>
                                  <th scope="row">Countries of production:</th>
                                  <td>{getCountryNames(film.country)}</td>
                                </tr>
                              )}
                              {film.language?.length > 0 && (
                                <tr>
                                  <th scope="row">Original Language :</th>
                                  <td>{getLanguageNames(film.language)}</td>
                                </tr>
                              )}
                              {film.post_production_work && (
                                <tr>
                                  <th scope="row">Post-production work remaining:</th>
                                  <td>{film.post_production_work}</td>
                                </tr>
                              )}
                              {film.rough_cut_duration > 0 && (
                                <tr>
                                  <th scope="row">Duration of Content Ready:</th>
                                  <td>{film.rough_cut_duration} (min)</td>
                                </tr>
                              )}
                              {film.duration && (
                                <tr>
                                  <th scope="row">Final Duration :</th>
                                  <td>{film.duration} (min)</td>
                                </tr>
                              )}
                              {film.month_of_completion && (
                                <tr>
                                  <th scope="row">Month of Completion :</th>
                                  <td>{getMonthName(film.month_of_completion)}</td>
                                </tr>
                              )}
                              {film.expected_rough_cut_date && (
                                <tr>
                                  <th scope="row">Expected date of completion :</th>
                                  <td>{formatDate(film.expected_rough_cut_date)}</td>
                                </tr>
                              )}
                              {film.year_of_completion && (
                                <tr>
                                  <th scope="row">Year of Completion :</th>
                                  <td>{film.year_of_completion}</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </Grid>
                    </>
                  ) : <></>
                  }


                  {/* only owner can see the details */}
                  {film?.owner ? (
                    <>
                      {/* Other Project Details */}
                      {/* <div className="shadow-sm white-bg mb-3">
                        <div className="information-get">
                          <h4>Other Project Details</h4>

                          <div className="table-responsive mt-3">
                            <table className="table mb-0">
                              <tbody>
                                <tr>
                                  <th scope="row">Synopsis of Content :</th>
                                  <td>{film.synopsis}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Creator's Note :</th>
                                  <td>{film.director_comment}</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div> */}


                      {(film.synopsis || film.director_comment) ?
                        (
                          <>
                            <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                              <div className="list-group-item active header-title-bg mb-4">
                                <div className="d-flex align-items-center justify-content-start w-100">
                                  <h6>Other Project Details</h6>
                                </div>
                              </div>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <div className="table-responsive">
                                <table className="table mb-0">
                                  <tbody>
                                    {film.synopsis && (
                                      <tr>
                                        <th scope="row">Synopsis of Content :</th>
                                        <td>{film.synopsis}</td>
                                      </tr>
                                    )}
                                    {film.director_comment && (
                                      <tr>
                                        <th scope="row">Creator's Note :</th>
                                        <td>{film.director_comment}</td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </Grid>
                          </>
                        ) : <></>
                      }


                      {/* Contacts */}
                      <div className="shadow-sm white-bg mb-3">
                        <div className="information-get">
                          <h4>Contacts</h4>
                          {!film?.film_contact ||
                            film.film_contact.length === 0 ? (
                            <p>No contact information available.</p>
                          ) : (
                            <div className="table-responsive">
                              <Table
                                sx={{ minWidth: 650 }}
                                aria-label="caption table"
                                className="table table-bordered"
                              >
                                <TableHead className="form-space">
                                  <TableRow>
                                    <TableCell align="center">Sr No.</TableCell>
                                    {/* <TableCell align="center">
                                  Designation
                                </TableCell> */}
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">E-mail</TableCell>
                                    <TableCell align="center">Phone</TableCell>
                                    <TableCell align="center">
                                      Company
                                    </TableCell>
                                    <TableCell align="center">City</TableCell>
                                    <TableCell align="center">State</TableCell>
                                    <TableCell align="center">
                                      Country
                                    </TableCell>
                                    <TableCell align="center">Photo</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {film.film_contact.map((contact, index) => (
                                    <React.Fragment key={contact.id || index}>
                                      <TableRow key={contact.name}>
                                        <TableCell align="center">
                                          ({toRoman(index + 1)})
                                        </TableCell>
                                        {/* <TableCell align="center">
                                      {" "}
                                      {designationOptions.find(
                                        (option) => option.id === contact.type
                                      )?.name || "Not Defined"}
                                    </TableCell> */}
                                        <TableCell align="center">{`${contact.first_name} ${contact.last_name}`}</TableCell>
                                        <TableCell align="center">
                                          {contact.email}
                                        </TableCell>
                                        <TableCell align="center">
                                          {contact.phone}
                                        </TableCell>
                                        <TableCell align="center">
                                          {contact.company}
                                        </TableCell>
                                        <TableCell align="center">
                                          {contact.city}
                                        </TableCell>
                                        <TableCell align="center">
                                          {contact.state}
                                        </TableCell>
                                        <TableCell align="center">
                                          {getCountryNames(contact.country)}
                                        </TableCell>
                                        <TableCell align="center">
                                          {contact.image_temp &&
                                            contact.image_temp.url ? (
                                            <img
                                              src={`${BASE_URL}/file/read/${contact.image_temp.url}`}
                                              alt={
                                                contact.image_temp.name ||
                                                "Uploaded"
                                              }
                                              style={{
                                                width: "50px",
                                                height: "50px",
                                                objectFit: "cover",
                                              }}
                                            />
                                          ) : (
                                            <img
                                              src={defaultimg}
                                              alt="Default"
                                              style={{
                                                width: "50px",
                                                height: "50px",
                                                objectFit: "cover",
                                              }}
                                            />
                                          )}
                                        </TableCell>
                                        {/* <TableCell align="center">{contact.address}</TableCell>
                                <TableCell align="center">{contact.website}</TableCell>
                                <TableCell align="center">{(contact.indian_nationality) ? 'Indian' : 'Non Indian'}</TableCell> */}
                                      </TableRow>
                                    </React.Fragment>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Attachments */}
                      <div className="shadow-sm white-bg mb-3">
                        <div className="information-get">
                          <h4>Attachments</h4>

                          <div className="table-responsive mt-3">
                            <table className="table mb-0">
                              <thead>
                                <tr>
                                  <th scope="col">S.No</th>
                                  <th scope="col">Required Documents</th>
                                  {/* <th scope="col">Document Specifications</th> */}
                                  <th scope="col">View</th>
                                </tr>
                              </thead>
                              <tbody>
                                {/* {film?.film_document?.map((doc, index) => (
          <tr key={doc.id}>
            <td>{index + 1}</td>
            <td>
              <p>{typeMapping[doc.type] || "   Document"}</p> 
            </td>
     
            <td>
              <span className="inputoffield">
                <div className="Attach_Photo_ID">
                  <p>
                    <a
                      href={`${BASE_URL}/file/read/${doc.url}`}
                      download={doc.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <FileDownloadIcon /> {doc.name}
                      </span>
                    </a>
                  </p>
                </div>
              </span>
            </td>
          </tr>
        ))} */}

                                {[
                                  { srNo: 1, name: "Photo", type: 1 },
                                  { srNo: 2, name: "Creator Photo", type: 2 },
                                  { srNo: 3, name: "Other Document", type: 3 },
                                  { srNo: 4, name: "Project Image", type: 8 },
                                ].map((requiredDoc) => {
                                  // Find the matching document from uploaded data
                                  const uploadedDoc = film?.film_document?.find(
                                    (doc) => doc.type === requiredDoc.type
                                  );

                                  return (
                                    <tr key={requiredDoc.srNo}>
                                      {/* Static Sr No */}
                                      <td>{requiredDoc.srNo}</td>

                                      {/* Static Required Document Name */}
                                      <td>
                                        <p>{requiredDoc.name}</p>
                                      </td>

                                      {/* Dynamic Uploaded Document or Blank */}
                                      <td>
                                        {uploadedDoc ? (
                                          <span className="inputoffield">
                                            <div className="Attach_Photo_ID">
                                              <p>
                                                <a
                                                  href={`${BASE_URL}/file/read/${uploadedDoc.url}`}
                                                  download={uploadedDoc.name}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                >
                                                  <span>
                                                    <FileDownloadIcon />{" "}
                                                    {uploadedDoc.name}
                                                  </span>
                                                </a>
                                              </p>
                                            </div>
                                          </span>
                                        ) : (
                                          // Blank cell if no document is uploaded
                                          <p>No document uploaded</p>
                                        )}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Preview Link */}
                      {/* <div className="shadow-sm white-bg mb-3">
                        <div className="information-get">
                          <h4>Preview Link</h4>

                          <div className="table-responsive mt-3">
                            <table className="table mb-0">
                              <tbody>
                                <tr>
                                  <th scope="row">
                                    Downloadable Preview Link :
                                  </th>
                                  <td>{film.download_preview_link}</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div> */}

                      {(film.download_preview_link) && (
                        <div className="shadow-sm white-bg mb-3">
                          <div className="information-get">
                            <h4>Preview Link</h4>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <div className="table-responsive mt-3">
                                <table className="table mb-0">
                                  <tbody>
                                    {film.download_preview_link && (
                                      <tr>
                                        <th scope="row">Downloadable Preview Link :</th>
                                        <td>{film.download_preview_link}</td>
                                      </tr>
                                    )}
                                    {film.preview_link_password && (
                                      <tr>
                                        <th scope="row">Preview Link Password :</th>
                                        <td>{film.preview_link_password}</td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </Grid>
                          </div>
                        </div>
                      )}


                      {/* Notes */}
                      {/* <div className="shadow-sm white-bg mb-3">
                        <div className="information-get">
                          <h4>Notes</h4>

                          <div className="table-responsive mt-3">
                            <table className="table mb-0">
                              <tbody>
                                <tr>
                                  <th scope="row">Notes (if any) :</th>
                                  <td>{film.note}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div> */}

                      {film.note && (
                        <>
                          <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                            <div className="list-group-item active header-title-bg mb-4">
                              <div className="d-flex align-items-center justify-content-start w-100">
                                <h6>Notes</h6>
                              </div>
                            </div>
                          </Grid>

                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="table-responsive">
                              <table className="table mb-0">
                                <tbody>
                                  <tr>
                                    <th scope="row">Notes (if any) :</th>
                                    <td>{film.note}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Grid>
                        </>
                      )}


                      {/* At Waves Portal You are Looking For */}
                      {/* <div className="shadow-sm white-bg mb-3">
                        <div className="information-get">
                          <h4>
                            At Waves Portal You are Looking For
                           
                          </h4>
                         

                          <div className="table-responsive mt-3">
                            <table className="table mb-0">
                              <tbody>
                                <tr>
                                  <td>
                                    {film.looking_for
                                      ? film.looking_for
                                        .map(
                                          (id) =>
                                            lookingForOptions[id] || "  "
                                        )
                                        .join(", ")
                                      : "No options selected"}
                                  </td>{" "}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div> */}
                      {film.looking_for && (
                        <>
                          <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                            <div className="list-group-item active header-title-bg mb-4">
                              <div className="d-flex align-items-center justify-content-start w-100">
                                <h6>At Waves Portal You are Looking For</h6>
                              </div>
                            </div>
                          </Grid>

                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <tbody>
                                  <tr>
                                    <td>
                                      {film.looking_for
                                        ? film.looking_for
                                          .map(
                                            (id) => lookingForOptions[id] || "No options selected"
                                          )
                                          .join(", ")
                                        : "No options selected"}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Grid>
                        </>
                      )}

                      <BuyerInterestView />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <p>Loding......................</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* including the footer */}
      {/* <Footer /> */}
    </>
  );
};

export default WaveView;
