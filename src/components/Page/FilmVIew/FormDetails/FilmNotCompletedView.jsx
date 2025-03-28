import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import defaultimg from "../../assets/img/default.jpg";
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
import projectdefault from "../../assets/img/project-default.png";
import { formatDate } from "../../utils/helpers"; // Import the formatDate function
import ContactDetails from "./ContactDetails";

const FilmNotCompletedView = ({ loadFormatTypes }) => {
  const dispatch = useDispatch();
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false); // State for managing loader
  const [error, setError] = useState(null);
  const countries = useSelector((state) => state.films.countries.data);
  const languages = useSelector((state) => state.languages.data);
  const types = useSelector((state) => state.types.data);
  const prints = useSelector((state) => state.types.prints);
  const ratios = useSelector((state) => state.types.ratios);
  const sounds = useSelector((state) => state.types.sounds);

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

  // const getCountryNames = (countryIds) => {
  //     if (!countryIds) return "";
  //     return countryIds.map(id => countries?.find(country => country.id === id)?.name || ' ').join(', ');
  // };

  // const getLanguageNames = (languageIds) => {
  //     if (!languageIds) return "";
  //     return languageIds.map(id => languages.find(language => language.id === id)?.name || ' ').join(', ');
  // };

  // const getFilmNames = (filmIds) => {
  //     if (!filmIds) return "";
  //     return filmIds.map(id => types.find(filmDetails => filmDetails.id === id)?.name || ' ').join(', ');
  // };

  const getFilmNames = (filmIds) => {
    if (!filmIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(filmIds) ? filmIds : [filmIds];

    return idsArray
      .map((id) => types?.find((films) => films.id === id)?.name || " ")
      .join(", ");
  };

  // const getPrintFormat = (printFormatIds) => {
  //     if (!printFormatIds) return "";
  //     return printFormatIds.map(id => prints.find(filmDetails => filmDetails.id === id)?.name || ' ').join(', ');
  // };

  const getPrintFormat = (printFormatIds) => {
    if (!printFormatIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(printFormatIds)
      ? printFormatIds
      : [printFormatIds];

    return idsArray
      .map(
        (id) =>
          prints?.find((printFormat) => printFormat.id === id)?.name || " "
      )
      .join(", ");
  };

  // const getAspectRatio = (AspectRatioIds) => {
  //     if (!AspectRatioIds) return "";
  //     return AspectRatioIds.map(id => ratios.find(filmDetails => filmDetails.id === id)?.name || ' ').join(', ');
  // };

  const getAspectRatio = (AspectRatioIds) => {
    if (!AspectRatioIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(AspectRatioIds)
      ? AspectRatioIds
      : [AspectRatioIds];

    return idsArray
      .map(
        (id) =>
          ratios?.find((printFormat) => printFormat.id === id)?.name || " "
      )
      .join(", ");
  };

  // const getSoundFormat = (soundFormatIds) => {
  //     if (!soundFormatIds) return "";
  //     return soundFormatIds.map(id => sounds.find(filmDetails => filmDetails.id === id)?.name || ' ').join(', ');
  // };

  const getSoundFormat = (soundFormatIds) => {
    if (!soundFormatIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(soundFormatIds)
      ? soundFormatIds
      : [soundFormatIds];

    return idsArray
      .map(
        (id) =>
          sounds?.find((printFormat) => printFormat.id === id)?.name || " "
      )
      .join(", ");
  };

  // const getVideography = (videoIds) => {
  //     return videoIds.map(id => formDataDetails?.data.find(video => video.id === id)?.name || ' ').join(', ');
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

  const getCountryNames = (countryIds) => {
    if (!countryIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(countryIds) ? countryIds : [countryIds];

    return idsArray
      .map((id) => countries?.find((country) => country.id === id)?.name || " ")
      .join(", ");
  };

  const getLanguageNames = (languageIds) => {
    if (!languageIds) return "";

    // Check if languageIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(languageIds) ? languageIds : [languageIds];

    return idsArray
      .map(
        (id) => languages.find((language) => language.id === id)?.name || " "
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

  const typeMapping = {
    1: "Film Stills",
    2: "Poster of the Film",
    3: "Director Photo",
    8: "Project Image",
    // Add more mappings as needed
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

  const monthName = getMonthName(film?.month_of_completion);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error}</p>
      ) : film ? (
        <>
          {(film.english_title ||
            film.country ||
            film.language ||
            film.type ||
            film.has_rough_cut ||
            film.post_production_work ||
            film.will_be_complete_by ||
            film.rough_cut_duration ||
            film.duration ||
            film.year_of_completion) && (
              <>
                <div className="shadow-sm white-bg mb-3">
                  <div className="information-get">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                      <div>
                        <div>
                          <h6>Film Information</h6>
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
                            {film.country && (
                              <tr>
                                <th scope="row">Countries of production :</th>
                                <td>{getCountryNames(film.country)}</td>
                              </tr>
                            )}
                            {film.language && (
                              <tr>
                                <th scope="row">Original Language :</th>
                                <td>{getLanguageNames(film.language)}</td>
                              </tr>
                            )}
                            {film.type && (
                              <tr>
                                <th scope="row">Film Type:</th>
                                <td>{getFilmNames(film.type)}</td>
                              </tr>
                            )}
                            <tr>
                              <th scope="row">
                                Do you have a rough cut of your film?:
                              </th>
                              <td>{film.has_rough_cut ? "Yes" : "No"}</td>
                            </tr>
                            {film.post_production_work && (
                              <tr>
                                <th scope="row">
                                  Post-production work remaining on the film:
                                </th>
                                <td>{film.post_production_work}</td>
                              </tr>
                            )}
                            <tr>
                              <th scope="row">
                                Will your film be complete by November 20, 2025? :
                              </th>
                              <td>{film.will_be_complete_by ? "Yes" : "No"}</td>
                            </tr>
                            {film.rough_cut_duration && (
                              <tr>
                                <th scope="row">
                                  Duration of the Rough Cut (Mins) :
                                </th>
                                <td>{film.rough_cut_duration} Mins</td>
                              </tr>
                            )}
                            {film.duration && (
                              <tr>
                                <th scope="row">Final Duration (Mins) :</th>
                                <td>{film.duration} Mins</td>
                              </tr>
                            )}
                            <tr>
                              <th scope="row">Month of Completion :</th>
                              <td>{monthName}</td>
                            </tr>
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
                  </div>
                </div>
              </>
            )}

          {film?.owner ? (
            <>
              {(film.synopsis || film.director_comment || film.screenplay) && (
                <>
                  <div className="shadow-sm white-bg mb-3">
                    <div className="information-get">
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="mt-4"
                      >
                        <div>
                          <div>
                            <h6>Other Project Details</h6>
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              {film.synopsis && (
                                <tr>
                                  <th scope="row">Synopsis of Film :</th>
                                  <td>{film.synopsis}</td>
                                </tr>
                              )}
                              {film.director_comment && (
                                <tr>
                                  <th scope="row">Director's Note :</th>
                                  <td>{film.director_comment}</td>
                                </tr>
                              )}
                              {film.series_logline && (
                                <tr>
                                  <th scope="row">Logline :</th>
                                  <td>{film.series_logline}</td>
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
                            </tbody>
                          </table>
                        </div>
                      </Grid>
                    </div>
                  </div>
                </>
              )}

              {(film.genre ||
                film.print_format ||
                film.aspect_ratio ||
                film.sound_format) && (
                  <>
                    <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          className="mt-4"
                        >
                          <div>
                            <div>
                              <h6>Genre</h6>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                {film.genre && film.genre.length > 0 && (
                                  <tr>
                                    <th scope="row">Select Genres :</th>
                                    <td>
                                      {film.genre
                                        .map((id) => {
                                          const genre = genreOptions.find(
                                            (option) => option.id === id
                                          );
                                          return genre ? genre.name : " ";
                                        })
                                        .join(", ")}
                                    </td>
                                  </tr>
                                )}
                                {film.print_format && (
                                  <tr>
                                    <th scope="row">Print Format :</th>
                                    <td>{getPrintFormat(film.print_format)}</td>
                                  </tr>
                                )}
                                {film.aspect_ratio && (
                                  <tr>
                                    <th scope="row">Aspect ratio :</th>
                                    <td>{getAspectRatio(film.aspect_ratio)}</td>
                                  </tr>
                                )}
                                {film.sound_format && (
                                  <tr>
                                    <th scope="row">Sound Format :</th>
                                    <td>{getSoundFormat(film.sound_format)}</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </>
                )}

              {/* Contacts */}
              {/* <ContactDetails formData={film} /> */}

              {(film.lead_cast ||
                film.writer ||
                film.director_of_photography ||
                film.editor ||
                film.editor_filmography ||
                film.sound ||
                film.music ||
                film.production_design ||
                film.costume ||
                film.additional_crew) && (
                  <>
                    <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          className="mt-4"
                        >
                          <div>
                            <div>
                              <h6>Crew Information</h6>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                {film.lead_cast && (
                                  <tr>
                                    <th scope="row">Lead Cast :</th>
                                    <td>{film.lead_cast}</td>
                                  </tr>
                                )}
                                {film.writer && (
                                  <tr>
                                    <th scope="row">Writer :</th>
                                    <td>{film.writer}</td>
                                  </tr>
                                )}
                                {film.director_of_photography && (
                                  <tr>
                                    <th scope="row">Director of Photography :</th>
                                    <td>{film.director_of_photography}</td>
                                  </tr>
                                )}
                                {film.editor && (
                                  <tr>
                                    <th scope="row">Editor :</th>
                                    <td>{film.editor}</td>
                                  </tr>
                                )}
                                {film.editor_filmography && (
                                  <tr>
                                    <th scope="row">Editor’s Filmography :</th>
                                    <td>{film.editor_filmography}</td>
                                  </tr>
                                )}
                                {film.sound && (
                                  <tr>
                                    <th scope="row">Sound :</th>
                                    <td>{film.sound}</td>
                                  </tr>
                                )}
                                {film.music && (
                                  <tr>
                                    <th scope="row">Music :</th>
                                    <td>{film.music}</td>
                                  </tr>
                                )}
                                {film.production_design && (
                                  <tr>
                                    <th scope="row">Production Designer:</th>
                                    <td>{film.production_design}</td>
                                  </tr>
                                )}
                                {film.costume && (
                                  <tr>
                                    <th scope="row">Costume :</th>
                                    <td>{film.costume}</td>
                                  </tr>
                                )}
                                {film.additional_crew && (
                                  <tr>
                                    <th scope="row">Additional Crew :</th>
                                    <td>{film.additional_crew}</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </>
                )}

              <div className="shadow-sm white-bg mb-3">
                <div className="information-get">
                  <h6>Attachments</h6>

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
                          { srNo: 1, name: "Film Stills", type: 1 },
                          {
                            srNo: 2,
                            name: "Poster of the Film",
                            type: 2,
                          },
                          { srNo: 3, name: "Director Photo", type: 3 },
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
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <p>No film data available.</p>
      )}
    </>
  );
};

export default FilmNotCompletedView;
