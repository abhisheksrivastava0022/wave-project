import React, { useEffect, useState } from "react";

import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";

import WAVESLoader from "../../assets/img/spinner.gif";
import ApiClient from "../API/ApiClient";
import { Link, useParams } from "react-router-dom";

import AlertMessage from "../AlertMessage";
import FilmView from "../Page/FilmVIew/FormDetails/FilmView";
import GameEsports from "../Page/FilmVIew/FormDetails/GameEsports";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;
//const dataurl = "https://wavesbazaar.com/api/waves-buyer";
function getCookie() {
  const allCookies = document.cookie;
  const cookiesObj = allCookies.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return cookiesObj;
}
const Home = () => {
  const { email = null } = useParams();
  const decode_email = email ? atob(email) : null;

  const [loggedinData, setLoggedinData] = useState({});
  React.useEffect(() => {
    const myCookieValue = getCookie();
    setLoggedinData(myCookieValue);
    console.log({ myCookieValue });
    //console.log('Cookie Value:', myCookieValue);
  }, []);

  const { getRequestApi } = ApiClient();
  const [pagination, setPagination] = useState({
    totalPosts: 0,
    totalPages: 0,
    currentPage: 1,
    limit: 12,
  });

  const [searchForm, setSearchForm] = useState({ title: "", category: "" });

  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([]);
  const [filmtype, setFilmtype] = useState([]);
  const [language, setlanguage] = useState([]);
  const [country, setCountry] = useState([]);
  const [film_status, setFilm_status] = useState({});
  const [loading, setLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true); // Track if more data is available

  const [formData, setFormData] = useState({
    title: "",
    videography_type: "",
    format_type: "",
    stage_type: "",
    segment: "",
  });

  const [formDataDetails, setFormDataDetails] = useState([]);
  const [formatTypes, setFormatTypes] = useState([]);
  const [stageTypes, setStageTypes] = useState([]);
  const [segmentTypes, setSegmentTypes] = useState([]);
  const [datatobesend, setDatatobesend] = useState({});

  console.log("datatobesend", datatobesend);
  console.log("Data", data);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!loading && hasMore) {
        setPage((prevPage) => {
          const nextPage = prevPage + 1;
          loadPreLoadData(nextPage);
          return nextPage;
        });
      }
    }
  };

  useEffect(() => {
    preloading();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const preloading = async () => {
    const endpoints = [
      "film-type",
      "language",
      "country",
      "genre",
      "segment",
      "stage-type",
      "format-type",
      "videography-type",
    ];
    const results = await Promise.all(
      endpoints.map((endpoint) => getRequestApi(`site/${endpoint}`))
    );

    if (results.every((result) => result.status)) {
      setFilmtype(results[0].data);
      setlanguage(results[1].data);
      setCountry(results[2].data);
      setGenre(results[3].data);
      setSegmentTypes(results[4].data);
      setStageTypes(results[5].data);
      setFormatTypes(results[6].data);
      setFormDataDetails(results[7].data);
    } else {
      console.error("Error fetching preloading data");
    }

    loadPreLoadData(page);
  };

  const [page, setPage] = useState(1); // Keep track of the current page

  const loadPreLoadData = async (pageNumber) => {
    try {
      setLoading(true);

      const queryParams = new URLSearchParams({
        limit: 12, // Number of items per page
        page: pageNumber ?? 1,
        decode_email,
        ...formData,
      });
      const response = await getRequestApi("film", queryParams);
      if (response?.status) {
        setData((prevData) => [...prevData, ...response.data]); // Append new data
        if (!response.data.length) setHasMore(false); // Stop loading if no more data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSegment = (videoIds) => {
    if (!videoIds) return "";

    const Videography = segmentTypes?.find((c) => c.id === videoIds);
    return Videography ? Videography.name : "";
  };
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

  function getCountryNamesByIds(ids) {
    if (typeof ids === "string") {
      try {
        ids = JSON.parse(ids); // Convert stringified array to an actual array
      } catch (error) {
        console.error("Invalid IDs format:", ids);
        return "";
      }
    }

    // Filter and map the country names based on IDs
    const countryNames = country
      .filter((item) => ids.includes(item.id)) // Ensure the item ID is in the provided IDs array
      .map((item) => item.name); // Extract the names of matched countries
    // Join the country names with a comma and return
    return countryNames.length > 3
      ? countryNames.slice(0, 3).join(", ") + "..."
      : countryNames.join(", ");
  }

  function getLanguageNamesByIds(ids) {
    if (typeof ids === "string") {
      try {
        ids = JSON.parse(ids); // Convert stringified array to an actual array
      } catch (error) {
        console.error("Invalid IDs format:", ids, error);
        return "";
      }
    }
    const countryNames = language
      .filter((country) => ids.includes(country.id)) // Filter countries with matching IDs
      .map((country) => country.name); // Extract their names
    return countryNames.length > 3
      ? countryNames.slice(0, 3).join(", ") + "..."
      : countryNames.join(", ");
  }
  function getGenre(ids) {
    if (typeof ids === "string") {
      try {
        ids = JSON.parse(ids); // Convert stringified array to an actual array
      } catch (error) {
        console.error("Invalid IDs format:", ids, error);
        return "";
      }
    }
    const countryNames = genre
      .filter((country) => ids.includes(country.id)) // Filter countries with matching IDs
      .map((country) => country.name); // Extract their names
    return countryNames.join(", "); // Join the names with a comma
  }
  const [alertData, setAlertData] = useState({
    heading: "",
    content: "",
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    loadpopup();
  }, [datatobesend]);

  const loadpopup = () => {
    setAlertData({
      heading: datatobesend.title,
      content: (
        <>
          <div>
            {datatobeloadfunction()}
            <p className="text-center p-4 ">
              To view the Waves Bazaar project details, Please sign up as a
              Buyer or Seller.{" "}
            </p>

            <div className="top-btn text-center ">
              <a
                href="https://wavesbazaar.com/wave-seller/login"
                className="btn btn-primary border-radius mb-3"
              >
                Seller Login
              </a>
              &nbsp;
              <a
                href="https://wavesbazaar.com/waves-buyer/login"
                className="btn btn-primary border-radius  mb-3"
              >
                Buyer Login
              </a>
            </div>
          </div>
        </>
      ),
    });
  };

  const handleClickOpen = (data) => {
    setDatatobesend(data);
    loadpopup();
    setOpen(true);
  };

  const datatobeloadfunction = () => {
    const segmentName = getSegment(datatobesend.category);
    const videographyName = getVideography(datatobesend.videography_type);
    const formatTypeName = getformattype(datatobesend.format_type);
    const formatStageTypeName = getformatstagetype(datatobesend.stage_type);
    const countryName = getCountryNamesByIds(datatobesend.country);
    const languageName = getLanguageNamesByIds(datatobesend.language);
    if (datatobesend.category === 1 || datatobesend.category === 2) {
      return (
        <>
          <FilmView
            film={datatobesend}
            segment={segmentName}
            videography={videographyName}
            formatType={formatTypeName}
            formatStageType={formatStageTypeName}
            languageName={languageName}
          />
        </>
      );
    } else if (datatobesend.category === 3) {
      return (
        <>
          <GameEsports
            film={datatobesend}
            countryName={countryName}
            segment={segmentName}
            videography={videographyName}
            formatStageType={formatStageTypeName}
            languageName={languageName}
          />
        </>
      );
    } else {

      return (
        <>
          <FilmView
            film={datatobesend}
            segment={segmentName}
            videography={videographyName}
            formatType={formatTypeName}
            formatStageType={formatStageTypeName}
            languageName={languageName}
          />
        </>
      );
    }
  };

  const handleSubmit = async (e) => {
    setData([]);
    e.preventDefault();
    loadPreLoadData();
  };

  const handleDropdownDataSegment = async (event) => {
    const { name, value } = event.target;

    const selectedValue = value === "" ? null : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedValue,
    }));

    // setErrors({
    //   ...errors,
    //   [name]: "",
    // });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
    <>
      <div className="col-lg-12 top-menu-custom">
        <div className="container">
          <div className="logo-landing-header">
            <div className="top-logo">
              <a href="https://wavesbazaar.com/">
                <img src="/image/waves-logo.png" alt="Waves Logo" />
              </a>
              <a
                href="https://www.mib.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/image/mib.png" alt="MIB Logo" />
              </a>
              <a
                href="https://nfdcindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/image/nfdc-logo.png" alt="NFDC Logo" />
              </a>
              <button
                className="btn btn-menu"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <img
                  src="https://www.iffigoa.org/public/images/menu.svg"
                  alt="image"
                  className="menu-link"
                />
                Menu
              </button>
            </div>
            <div
              className="offcanvas offcanvas-end text-bg-dark sidemenu"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navigation-menu">
                  <li>
                    <a href="https://wavesbazaar.com/">Home</a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://wavesbazaar.com/wave-seller/login">
                      Seller Login
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://wavesbazaar.com/waves-buyer/login">
                      Buyer Login
                    </a>
                  </li>
                  <li>
                    <a href="https://wavesbazaar.com/wave-seller/login/market.wavesbazaar.com">
                      Viewing Room
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://wavesbazaar.com/project">
                      Explore Projects
                    </a>
                  </li>
                  <li>
                    <Link to="/download">Downloads</Link>
                  </li>
                  <li>
                    <Link to="/featured-companies">Featured Companies</Link>
                  </li>
                  <li>
                    <a href="https://wavesindia.org/" target="_blank">
                      WAVES India
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="innerpage mt-0">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-center flex-grow-1 mb-0 animated fadeInRight">
                Explore Projects
              </h2>
              <button
                className="btn btn-pre text-dark fw-bold px-4 py-2 rounded-pill shadow-sm"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#filterSearch"
                aria-controls="filterSearch"
              >
                🔍 Search
              </button>
            </div>

            {data && data.length > 0 ? (
              <></>
            ) : (
              <div className="shadow-sm white-bg mb-3">
                <div className="user-list">
                  <p>Data not present</p>
                </div>
              </div>
            )}
            {data.map((row) => {
              const type2Document = row.FilmDocuments.find(
                (doc) => doc.type === 8
              );

              return (
                <>
                  <div className="col-md-3 col-sm-3 animated fadeInUp">
                    <div className="image-container">
                      {type2Document ? (
                        <img
                          src={`${dataurl}/file/read/${type2Document.url}`}
                          alt={type2Document.name}
                        />
                      ) : (
                        <div className="defaultimagecontainer text-center">
                          <img
                            src={`/img/category_${row.category}.jpg`}
                            alt="user"
                            className="defualtImage"
                          />
                        </div>
                      )}
                      <div className="project-title-name">
                        <h5 className="card-title"> {row.title}</h5>
                      </div>
                      <div className="hover-content">
                        <h5 className="card-title">{row.title}</h5>
                        <ul className="ProjectType-list">
                          {row.category != null &&
                            row.category !== undefined ? (
                            <li title="Category">{getSegment(row.category)}</li>
                          ) : null}
                          {row.videography_type ? (
                            <li title="Videography">
                              {getVideography(row.videography_type)}
                            </li>
                          ) : null}
                          {row.format_type ? (
                            <li title="Format Type">
                              {getformattype(row.format_type)}
                            </li>
                          ) : null}
                          {row.stage_type ? (
                            <li title="Stage Type">
                              {getformatstagetype(row.stage_type)}
                            </li>
                          ) : null}
                          {row.country ? (
                            <li title="Countries">
                              {getCountryNamesByIds(row.country)}
                            </li>
                          ) : null}
                          {row.language ? (
                            <li title="Languages">
                              {getLanguageNamesByIds(row.language)}
                            </li>
                          ) : null}
                          {row.genre ? (
                            <li title="Genre">{getGenre(row.genre)}</li>
                          ) : null}
                          {row.duration ? (
                            <li title="Duration">{row.duration} min</li>
                          ) : null}
                        </ul>
                        {loggedinData.buyerloggedin ? (
                          <a
                            href={"/waves-buyer/seller-projects/view/" + row.id}
                            className="btn btn-primary"
                          >
                            View Details
                          </a>
                        ) : (
                          <button
                            onClick={() => handleClickOpen(row)}
                            className="btn btn-primary"
                          >
                            View Details
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {loading && (
              <div className="text-center loader">
                <img src={WAVESLoader} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end p-4"
        tabIndex="-1"
        id="filterSearch"
        aria-labelledby="filterSearchLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="filterSearchLabel">
            {" "}
            <i className="bi bi-search"></i> Search
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="mb-3">
            {/* <label for="ProjectTitle" className="form-label">Project Title</label> */}
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              label="Project Title"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <FormControl fullWidth>
              <InputLabel id="category-label">Select Segment </InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={formData.category || ""}
                onChange={handleDropdownDataSegment}
                renderValue={(selected) => {
                  if (!selected || selected == 0 || selected == "null")
                    return "please select";

                  const selectedCategory = segmentTypes.find(
                    (item) => item.id === selected
                  );
                  return selectedCategory
                    ? selectedCategory.name
                    : "Select category";
                }}
              >
                <MenuItem value={0}>Please select</MenuItem>

                {segmentTypes.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mb-3 text-end">
            {/* <button
                      className="btn btn-primary border-radius"
                      onClick={handleSubmit}
                    >
                      Search
                    </button> */}
            <button
              className="btn btn-primary border-radius"
              data-bs-dismiss="offcanvas"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <AlertMessage
        handleClickOpen={handleClickOpen}
        setOpen={setOpen}
        open={open}
        handleClose={handleClose}
        data={alertData}
      />
    </>
  );
};

export default Home;
