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
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import BuyerInterestView from "../FormDetails/BuyerInterestView";
import Loader from "../../components/Loader";
import Sidebar from "../../components/Sidebar";
const ScriptView = ({ loadFormatTypes }) => {
  const dispatch = useDispatch();
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const countries = useSelector((state) => state.films.countries.data);
  const languages = useSelector((state) => state.languages.data);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [preData, setPreData] = useState([]);

  const loadData = async () => {
    // console.log("Film ID:", id); // Check if `id` is `null` or has the correct value

    if (!id) {
      console.error("Error: Film ID is null or undefined.");
      return; // Exit early if `id` is not valid
    }

    try {
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
      const preData = data.data?.film_contact ?? [];
      // console.log({ preData });
      setPreData(preData);
    } catch (error) {
      console.error("Error loading film data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);
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

  const handleDropdownData = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  // console.log("video", formDataDetails.data);
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

  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/login";
  };

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
    1: "Gap Financing/Finishing Funds/P&A Funds",
    2: "Sales and Distribution",
    3: "Film Festival",
    4: "Sales Agent",
    5: "Distributors",
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

  const typeMapping = {
    8: "Project Image",
    9: "Synopsis ( 6 - 10 pages)",
    // 10: "Script ( Min 60 pages or above)",

    // Add more mappings as needed
  };
  return (
    <>

      {
        (film) ?
          <>


            {film.english_title || film.language || film.series_logline || film.synopsis || film.writer_statement || film.is_direct_your_script ? (
              <>

                <div className="shadow-sm white-bg mb-3">
                  <div className="information-get">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                      <div>
                        <div>
                          <h6>Project Information</h6>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            {film.english_title && (
                              <tr>
                                <th scope="row">English Title :</th>
                                <td>{film.english_title}</td>
                              </tr>
                            )}
                            {film.language && (
                              <tr>
                                <th scope="row">Original Language :</th>
                                <td>{getLanguageNames(film.language)}</td>
                              </tr>
                            )}
                            {film.series_logline && (
                              <tr>
                                <th scope="row">Series Logline :</th>
                                <td>{film.series_logline}</td>
                              </tr>
                            )}
                            {film.synopsis && (
                              <tr>
                                <th scope="row">Synopsis :</th>
                                <td>{film.synopsis}</td>
                              </tr>
                            )}
                            {film.writer_statement && (
                              <tr>
                                <th scope="row">Writer's Statement :</th>
                                <td>{film.writer_statement}</td>
                              </tr>
                            )}
                            {film.is_direct_your_script !== undefined && (
                              <tr>
                                <th scope="row">Do you want to direct your script?</th>
                                <td>{film.is_direct_your_script ? "Yes" : "No"}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </Grid>
                  </div>
                </div>
              </>
            ) : null}


            {film?.owner ? (
              <>
                <div className="shadow-sm white-bg mb-3">
                  <div className="information-get">
                    <h6>Contacts</h6>

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
                              <TableCell align="center">
                                Designation
                              </TableCell>
                              <TableCell align="center">Name</TableCell>
                              <TableCell align="center">E-mail</TableCell>
                              <TableCell align="center">Phone</TableCell>
                              <TableCell align="center">Company</TableCell>
                              <TableCell align="center">City</TableCell>
                              <TableCell align="center">State</TableCell>
                              <TableCell align="center">Country</TableCell>
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
                                  <TableCell align="center">
                                    {" "}
                                    {designationOptions.find(
                                      (option) => option.id === contact.type
                                    )?.name || "Not Defined"}
                                  </TableCell>
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

                <div className="shadow-sm white-bg mb-3">
                  <div className="information-get">
                    <h6>Attachments</h6>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div className="table-responsive">
                        <table className="table table-bordered">
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
              <p>{typeMapping[doc.type] || ""}</p> 
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

                            {/* Predefined list of required documents */}
                            {[
                              {
                                srNo: 1,
                                name: "Synopsis (6 - 10 pages)",
                                type: 9,
                              },
                              // { srNo: 2, name: "Script (Min 60 pages or above)", type: 10 },
                              { srNo: 3, name: "Project Image", type: 8 },
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
                    </Grid>
                  </div>
                </div>


                {/* <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <h6>At Waves Bazaar You are Looking For</h6>

                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                               
                                <td>
                                  {film.looking_for
                                    ? film.looking_for
                                      .map(
                                        (id) => lookingForOptions[id] || "  "
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
                <BuyerInterestView />
              </>
            ) : (
              <></>
            )}
          </> : <></>
      }
    </>
  );
};

export default ScriptView;
