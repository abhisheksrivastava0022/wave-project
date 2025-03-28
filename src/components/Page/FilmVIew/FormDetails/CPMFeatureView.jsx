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
import BuyerInterestView from "../FormDetails/BuyerInterestView";
import Loader from "../../components/Loader";
import Sidebar from "../../components/Sidebar";
import ContactDetails from "./ContactDetails";

const CPMFeatureView = ({ loadFormatTypes }) => {
  const dispatch = useDispatch();
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const handleDropdownData = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  // console.log("video", formDataDetails.data);
  const dataurl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchVideographyTypes = async () => {
      try {
        const response = await fetch(`${dataurl}/site/videography-type`, {
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
        const response = await fetch(`${dataurl}/site/format-type`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const result = await response.json();
        if (result.status) {
          // console.log("testing format api");
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
        const response = await fetch(`${dataurl}/site/stage-type`, {
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

  // const getCountryNames = (countryIds) => {
  //     if (!countryIds) return "";
  //     return countryIds.map(id => countries?.find(country => country.id === id)?.name || '  ').join(', ');
  // };

  // const getLanguageNames = (languageIds) => {
  //     if (!languageIds) return "";
  //     return languageIds.map(id => languages.find(language => language.id === id)?.name || '  ').join(', ');
  // };

  const getFilmNames = (filmIds) => {
    if (!filmIds) return "";
    return filmIds
      .map(
        (id) => types.find((filmDetails) => filmDetails.id === id)?.name || ""
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
  };

  const [genreOptions, setGenreOptions] = useState([]); // Store genres from API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${BASE_URL}/site/genre`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON

        if (result.status && Array.isArray(result.data)) {
          setGenreOptions(result.data); // Use genres from response data
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);
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

  const isPartOfOptions = [
    { id: 1, name: "Film Market" },
    { id: 2, name: "Film Festival" },
    { id: 3, name: "Distribution" },
    // Add more options as needed
  ];

  const getCountryNames = (countryIds) => {
    if (!countryIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(countryIds) ? countryIds : [countryIds];

    return idsArray
      .map((id) => countries?.find((country) => country.id === id)?.name || "")
      .join(", ");
  };

  const getLanguageNames = (languageIds) => {
    if (!languageIds) return "";

    // Check if languageIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(languageIds) ? languageIds : [languageIds];

    return idsArray
      .map((id) => languages.find((language) => language.id === id)?.name || "")
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

  // const typeMapping = {
  //   4: "Production Plan",
  //   5: "Story Outline (max 12 Pages)",
  //   6: "Tentative Timeline",
  //   8: "Project Image",
  //   // Add more mappings as needed
  // };

  const PartOfProjectDetails = (id) => {
    const partOfProject = isPartOfOptions.find((option) => option.id === id);
    return partOfProject ? partOfProject.name : "Unknown";
  };
  return (
    <>
      {film ? (
        <>
          {(film.english_title ||
            film.country ||
            film.language ||
            film.anticipated_duration_per_episode ||
            film.screenplay ||
            film.series_logline ||
            film.target_audience ||
            film.duration_and_market_strategy ||
            film.synopsis ||
            film.director_comment ||
            film.producer_note ||
            film.is_part_of ||
            film.is_part_of_details) && (
              <div className="shadow-sm white-bg mb-3">
                <div className="information-get">
                  <h6>Project Information</h6>
                  <div className="table-responsive mt-3">
                    <table className="table mb-0">
                      <tbody>
                        {film.english_title && (
                          <tr>
                            <th scope="row">English Title :</th>
                            <td>{film.english_title}</td>
                          </tr>
                        )}
                        {film.country && (
                          <tr>
                            <th scope="row">Countries :</th>
                            <td>{getCountryNames(film.country)}</td>
                          </tr>
                        )}
                        {film.language && (
                          <tr>
                            <th scope="row">Original Language :</th>
                            <td>{getLanguageNames(film.language)}</td>
                          </tr>
                        )}
                        {film.anticipated_duration_per_episode && (
                          <tr>
                            <th scope="row">Anticipated Duration :</th>
                            <td>{film.anticipated_duration_per_episode} Mins</td>
                          </tr>
                        )}

                        {(String(film.screenplay) === "1" ||
                          String(film.screenplay) === "2") && (
                            <tr>
                              <th scope="row">Screenplay :</th>
                              <td>
                                {String(film.screenplay) === "1"
                                  ? "Original"
                                  : "Adapted"}
                              </td>
                            </tr>
                          )}

                        {film.series_logline && (
                          <tr>
                            <th scope="row">Logline :</th>
                            <td>{film.series_logline}</td>
                          </tr>
                        )}
                        {film.target_audience && (
                          <tr>
                            <th scope="row">Target Audience:</th>
                            <td>{film.target_audience}</td>
                          </tr>
                        )}
                        {film.duration_and_market_strategy && (
                          <tr>
                            <th scope="row">
                              Distribution & Marketing Strategies:
                            </th>
                            <td>{film.duration_and_market_strategy}</td>
                          </tr>
                        )}
                        {film.synopsis && (
                          <tr>
                            <th scope="row">Synopsis :</th>
                            <td>{film.synopsis}</td>
                          </tr>
                        )}
                        {film.director_comment && (
                          <tr>
                            <th scope="row">Director`s Statement:</th>
                            <td>{film.director_comment}</td>
                          </tr>
                        )}
                        {film.producer_note && (
                          <tr>
                            <th scope="row">Producer`s Statement :</th>
                            <td>{film.producer_note}</td>
                          </tr>
                        )}
                        {film.is_part_of && (
                          <tr>
                            <th scope="row">
                              Please mention if your project has been a part of:
                            </th>
                            <td>
                              {film.is_part_of
                                ? PartOfProjectDetails(film.is_part_of)
                                : "No options selected"}
                            </td>
                          </tr>
                        )}
                        {film.is_part_of_details && (
                          <tr>
                            <th scope="row">Please Specify Details:</th>
                            <td>{film.is_part_of_details}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

          {film?.owner ? (
            <>
              {/* Select Genre */}
              {/* <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <h6>Genre</h6>

                        <div className="table-responsive mt-3">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th scope="row">Select Genres :</th>
                                <td>
                                  {film.genre && film.genre.length > 0
                                    ? film.genre
                                      .map((id) => {
                                        const genre = genreOptions.find(
                                          (option) => option.id === id
                                        );
                                        return genre ? genre.name : "";
                                      })
                                      .join(", ")
                                    : "No options selected"}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> */}

              {film.genre && film.genre.length > 0 && (
                <div className="shadow-sm white-bg mb-3">
                  <div className="information-get">
                    <h6>Genre</h6>
                    <div className="table-responsive mt-3">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <th scope="row">Select Genres :</th>
                            <td>
                              {film.genre
                                .map((id) => {
                                  const genre = genreOptions.find(
                                    (option) => option.id === id
                                  );
                                  return genre ? genre.name : "";
                                })
                                .join(", ")}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Financial Information */}
              {/* <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <h6>Financial Information</h6>
                        <div className="table-responsive mt-3">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th scope="row">Total Budget :</th>
                                <td>{film.total_budget}</td>
                              </tr>
                              <tr>
                                <th scope="row">Financial Already Secured :</th>
                                <td>{film.finacial_already_secured}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> */}

              {(film.total_budget || film.finacial_already_secured) && (
                <div className="shadow-sm white-bg mb-3">
                  <div className="information-get">
                    <h6>Financial Information</h6>
                    <div className="table-responsive mt-3">
                      <table className="table mb-0">
                        <tbody>
                          {film.total_budget && (
                            <tr>
                              <th scope="row">Total Budget :</th>
                              <td>{film.total_budget}</td>
                            </tr>
                          )}
                          {film.finacial_already_secured && (
                            <tr>
                              <th scope="row">Financial Already Secured :</th>
                              <td>{film.finacial_already_secured}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Contacts */}
              {/* <ContactDetails formData={film} /> */}

              {/* Attachments */}
              <div className="shadow-sm white-bg mb-3">
                <div className="information-get">
                  <h6>Attachments</h6>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
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
                          {[
                            { srNo: 1, name: "Production Plan", type: 4 },
                            {
                              srNo: 2,
                              name: "Story Outline (max 12 Pages)",
                              type: 5,
                            },
                            {
                              srNo: 3,
                              name: "Tentative Timeline",
                              type: 6,
                            },
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
                  </Grid>
                </div>
              </div>

              {/* At Waves Portal You are Looking For */}
              {/* <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <h6>
                          At Waves Portal You are Looking For
                        </h6>
                        <div className="table-responsive mt-3">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <td>
                                  {film.looking_for
                                    ? film.looking_for
                                      .map(
                                        (id) => lookingForOptions[id] || ""
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

              {film.looking_for && film.looking_for.length > 0 && (
                <div className="shadow-sm white-bg mb-3">
                  <div className="information-get">
                    <h6>At Waves Portal You are Looking For</h6>
                    <div className="table-responsive mt-3">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>
                              {film.looking_for
                                .map((id) => lookingForOptions[id] || "")
                                .join(", ")}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Buyer Interest Information */}
              <BuyerInterestView />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CPMFeatureView;
