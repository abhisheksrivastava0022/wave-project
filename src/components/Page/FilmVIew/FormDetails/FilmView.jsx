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
const FilmView = ({ loadFormatTypes }) => {
  const dispatch = useDispatch();
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentAction, setCurrentAction] = useState({}); // To track the current action

  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false); // State for managing loader
  const [error, setError] = useState(null);
  const countries = useSelector((state) => state.films.countries.data);
  const languages = useSelector((state) => state.languages.data);
  const types = useSelector((state) => state.types.data);
  const prints = useSelector((state) => state.types.prints);
  const ratios = useSelector((state) => state.types.ratios);
  const sounds = useSelector((state) => state.types.sounds);

  // console.log("test print", languages);
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

  const getPrint = (printIds) => {
    if (!printIds) return "";

    if (!prints || !prints.length) {
      console.error("Prints data is missing or empty.");
      return "Data not available";
    }

    const Videography = prints.find((c) => c.id === printIds);
    return Videography ? Videography.name : "Not Found";
  };

  const getRatio = (ratioIds) => {
    if (!ratioIds) return "";

    const Videography = ratios?.find((c) => c.id === ratioIds);
    return Videography ? Videography.name : "";
  };

  const getSound = (soundIds) => {
    if (!soundIds) return "";

    const Videography = sounds?.find((c) => c.id === soundIds);
    return Videography ? Videography.name : "";
  };

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

  const typeMapping = {
    1: "Film Stills",
    2: "Poster of the Film",
    3: "Director Photo",
    8: "Project Image",
    // Add more mappings as needed
  };

  // const handleApprove = async () => {
  //     try {
  //         const response = await axios.post(
  //             `${BASE_URL}/film/interest/${id}/approve`,
  //             {
  //                 method: 'POST',  // Method should be POST, not GET, since you are making a POST request
  //                 headers: {
  //                     'Content-Type': 'application/json',
  //                 },

  //                 credentials: 'include'  // This is the correct way to send cookies with axios requests
  //             }
  //         );

  //         if (response.status === 200) {
  //             alert('Buyer approved successfully!');
  //             // Optionally, update the UI or refresh the data
  //             // Example: fetchBuyerInterest(); (You should have a function to re-fetch the data)
  //         } else {
  //             alert('Failed to approve the buyer.');
  //         }
  //     } catch (error) {
  //         console.error('Error approving the buyer:', error);
  //         alert('An error occurred while approving the buyer.');
  //     }
  // };

  const handleApprove = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/film/interest/${id}/approve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentAction((prev) => ({ ...prev, [id]: "approved" })); // Update the action state

        // console.log("Response Data:", data);
      } else {
        console.error("Failed to  interest.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleDecline = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/film/interest/${id}/decline`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentAction((prev) => ({ ...prev, [id]: "declined" })); // Update the action state

        // console.log("Response Data:", data);
      } else {
        console.error("Failed to  interest.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
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
      {film ? (
        <>
          {(film.english_title ||
            film.country ||
            film.language ||
            film.type ||
            film.duration ||
            monthName ||
            film.year_of_completion) && (
            <>
              <div className="shadow-sm white-bg mb-3">
                <div className="information-get">
                  <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                    <div>
                      <div>
                        <h4>Film information</h4>
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
                          {film.duration && (
                            <tr>
                              <th scope="row">Final Duration :</th>
                              <td>{film.duration} Mins</td>
                            </tr>
                          )}
                          {monthName && (
                            <tr>
                              <th scope="row">Month of Completion :</th>
                              <td>{monthName}</td>
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
                            <h4>Other Project Details</h4>
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

                              {(String(film.screenplay) === "1" ||
                                String(film.screenplay) === "2") && (
                                <>
                                  <tr>
                                    <th scope="row">Screenplay Based on :</th>
                                    <td>
                                      {String(film.screenplay) === "1"
                                        ? "Original"
                                        : "Adapted"}
                                    </td>
                                  </tr>
                                  {String(film.screenplay) === "2" &&
                                    film.screenplay_description && (
                                      <tr>
                                        <th scope="row">
                                          Screenplay Description :
                                        </th>
                                        <td>{film.screenplay_description}</td>
                                      </tr>
                                    )}
                                </>
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
                            <h4>Genre</h4>
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              {film.genre && (
                                <tr>
                                  <th scope="row">Select Genres :</th>
                                  <td>
                                    {film.genre.length > 0
                                      ? film.genre
                                          .map((id) => {
                                            const genre = genreOptions.find(
                                              (option) => option.id === id
                                            );
                                            return genre ? genre.name : " ";
                                          })
                                          .join(", ")
                                      : "No options selected"}
                                  </td>
                                </tr>
                              )}
                              {film.print_format && (
                                <tr>
                                  <th scope="row">Print Format :</th>
                                  <td>{getPrint(film.print_format)}</td>
                                </tr>
                              )}
                              {film.aspect_ratio && (
                                <tr>
                                  <th scope="row">Aspect ratio :</th>
                                  <td>{getRatio(film.aspect_ratio)}</td>
                                </tr>
                              )}
                              {film.sound_format && (
                                <tr>
                                  <th scope="row">Sound Format :</th>
                                  <td>{getSound(film.sound_format)}</td>
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

              {/* <div className="shadow-sm white-bg mb-3">
                <div className="information-get">
                  <h4>Contacts</h4>

                  {!film?.film_contact || film.film_contact.length === 0 ? (
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
                            <TableCell align="center">Designation</TableCell>
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
                                        contact.image_temp.name || "Uploaded"
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
                              </TableRow>
                            </React.Fragment>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </div>
              </div> */}

              {/* <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <h4>Crew Information </h4>

                        <div className="table-responsive mt-3">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th scope="row">Lead Cast :</th>
                                <td>{film.lead_cast}</td>
                              </tr>
                              <tr>
                                <th scope="row">Writer :</th>
                                <td>{film.writer}</td>
                              </tr>
                              <tr>
                                <th scope="row">Director of Photography :</th>
                                <td>{film.director_of_photography}</td>
                              </tr>
                              <tr>
                                <th scope="row">Editor :</th>
                                <td>{film.editor}</td>
                              </tr>
                              <tr>
                                <th scope="row">Editor’s Filmography :</th>
                                <td>{film.editor_filmography}</td>
                              </tr>
                              <tr>
                                <th scope="row">Sound :</th>
                                <td>{film.sound}</td>
                              </tr>
                              <tr>
                                <th scope="row">Music :</th>
                                <td>{film.music}</td>
                              </tr>
                              <tr>
                                <th scope="row">Production Designer:</th>
                                <td>{film.production_design}</td>
                              </tr>
                              <tr>
                                <th scope="row">Costume :</th>
                                <td>{film.costume}</td>
                              </tr>
                              <tr>
                                <th scope="row">Additional Crew :</th>
                                <td>{film.additional_crew}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> */}

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
                            <h4>Crew Information</h4>
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
                                  <th scope="row">Production Designer :</th>
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

              {/* <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <h4>Preview Link</h4>

                        <div className="table-responsive mt-3">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th scope="row">Downloadable Preview Link :</th>
                                <td>{film.download_preview_link}</td>
                              </tr>
                              <tr>
                                <th scope="row">Preview Link Password :</th>
                                <td>{film.preview_link_password}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> */}

              {film.download_preview_link || film.preview_link_password ? (
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
                            <h6>Trailer Link</h6>
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              {film.download_preview_link && (
                                <tr>
                                  <th scope="row">
                                    Downloadable Preview Link :
                                  </th>
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
                </>
              ) : null}

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
                            <h6>Notes</h6>
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <th scope="row">Notes (if any) :</th>
                                <td>{film.note}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Grid>
                    </div>
                  </div>
                </>
              )}
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

export default FilmView;
