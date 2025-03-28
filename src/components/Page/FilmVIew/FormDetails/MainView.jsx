import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScriptView from "./ScriptView";
import FilmView from "./FilmView";
import CPMFeatureView from "./CPMFeatureView";
import CPMWebSeriesView from "./CPMWebSeriesView";
import FilmNotCompletedView from "./FilmNotCompletedView";
import logo from "../../assets/img/filmbazaar.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilmCompleted from "../CategoryForm/FilmCompleted";
import projectdefault from "../../assets/img/project-default.png";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import BuyerInterestView from "./BuyerInterestView";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
const dataurl = import.meta.env.VITE_API_BASE_URL;
import {
  fetchCountries,
  fetchLanguage,
  fetchPrintFormat,
  fetchRatioFormat,
  fetchSoundFormat,
  fetchType,
} from "../../store/actions/filmActions";
import ContactDetails from "./ContactDetails";
const MainView = () => {
  const lookingForOptions = {
    1: "Gap Financing/Finishing Funds/P&A Funds",
    2: "Sales and Distribution",
    3: "Film Festival",
    4: "Sales Agent",
    5: "Distributors",
  };
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
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
  const renderTemplate = () => {
    // return (
    //     <>
    //         {/* <FilmView /> */}
    //         {/* <CPMFeatureView /> */}
    //         {/* <CPMWebSeriesView/> */}
    //         <FilmNotCompletedView/>
    //     </>
    // );
    if (film?.stage_type == 1) {
      return (
        <>
          <ScriptView />
        </>
      );
    } else if (film?.format_type == 4) {
      // Webs
      if (film?.stage_type == 4) {
        return (
          <>
            <CPMFeatureView />
          </>
        );
      } else {
        return (
          <>
            <CPMWebSeriesView />
          </>
        );
      }
    } else {
      if (film?.stage_type == 4) {
        return (
          <>
            <FilmView />
          </>
        );
      } else {
        return (
          <>
            <FilmNotCompletedView />
          </>
        );
      }
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchLanguage());
    dispatch(fetchPrintFormat());
    dispatch(fetchType());
    dispatch(fetchSoundFormat());

    dispatch(fetchRatioFormat());
  }, [dispatch]);
  const countries = useSelector((state) => state.films.countries.data);
  const languages = useSelector((state) => state.languages.data);
  const types = useSelector((state) => state.types.data);
  const getLanguageNames = (languageIds) => {
    if (!languageIds) return "";

    // Check if languageIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(languageIds) ? languageIds : [languageIds];

    return idsArray
      .map((id) => languages.find((language) => language.id === id)?.name || "")
      .join(", ");
  };
  const getCountryNames = (countryIds) => {
    if (!countryIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(countryIds) ? countryIds : [countryIds];

    return idsArray
      .map((id) => countries?.find((country) => country.id === id)?.name || "")
      .join(", ");
  };
  const getCountryName = (countryIds) => {
    if (!countryIds) return "";
    return countries?.find((country) => country.id === countryIds)?.name;
  };
  const [formDataDetails, setFormDataDetails] = useState([]);
  const [formatTypes, setFormatTypes] = useState([]);
  const [stageTypes, setStageTypes] = useState([]);
  const getVideography = (videoIds) => {
    if (!videoIds) return "";
    console.log({ formDataDetails });
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

  return (
    <>
      {loading && <Loader />}
      {film ? (
        <div className="container">
          <Header />
          <div className="innerpage mt-3">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <Sidebar />
              </div>
              <div className="col-md-9 col-sm-9">
                <div className="page-title">
                  <h6>Project Details</h6>
                  {film?.owner ? (
                    <Link to={`/project/${id}`}>
                      <button className="btn btn-primary btn-yellow">
                        Edit
                      </button>
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="col-lg-12 mb-3">
                  <div className="filter">
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
                                  Languages: {getLanguageNames(film.language)}
                                </div>
                                <div className="col-md-6">
                                  <div className="border-left">
                                    Origin of Country:{" "}
                                    {getCountryName(film.country_id)}
                                  </div>
                                </div>
                                <div className="col-md-6 mt-2">
                                  Target Audience:{" "}
                                  {film.target_audience == "Other"
                                    ? film.target_audience_other
                                    : film.target_audience}
                                </div>
                                <div className="col-md-6  mt-2">
                                  <div className="border-left">
                                    Film Certification:{" "}
                                    {film.film_certification == "Other"
                                      ? film.film_certification_other
                                      : film.film_certification}
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
                </div>
                {(film.videography_type ||
                  film.format_type ||
                  film.stage_type) && (
                  <>
                    <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <h6>Basic Information</h6>
                        <div className="table-responsive mt-3">
                          <table className="table mb-0">
                            <tbody>
                              {film.videography_type && (
                                <tr>
                                  <th scope="row">Videography :</th>
                                  <td>
                                    {getVideography(film.videography_type)}
                                  </td>
                                </tr>
                              )}
                              {film.format_type && (
                                <tr>
                                  <th scope="row">Format Type :</th>
                                  <td>{getformattype(film.format_type)}</td>
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
                      </div>
                    </div>
                  </>
                )}

                {renderTemplate()}

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
                {film.looking_for && (
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
                              <h6>At Waves You are Looking For</h6>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    {film.looking_for
                                      ? film.looking_for
                                          .map(
                                            (id) => lookingForOptions[id] || " "
                                          )
                                          .join(", ")
                                      : "No options selected"}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </>
                )}

                {/* Contacts */}
                <ContactDetails formData={film} />

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
                <BuyerInterestView />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <Footer />
    </>
  );
};

export default MainView;
