import React, { useEffect, useState } from "react";

import WavesLogo from "../../assets/img/Waves.png";

import category_1 from "../../assets/img/category_1.jpg";
import NFDCLogo from "../../assets/img/NFDC.png";
import WAVESLoader from "../../assets/img/spinner.gif";
import ApiClient from "../API/ApiClient";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AlertMessage from "../AlertMessage";
// import W1 from "../../assets/img/"
import W1 from "../../assets/img/w1.PNG";
import W2 from "../../assets/img/w2.PNG";
import W3 from "../../assets/img/w3.PNG";
import W4 from "../../assets/img/w4.PNG";
import W5 from "../../assets/img/w5.PNG";
import W6 from "../../assets/img/w6.PNG";
import W7 from "../../assets/img/w7.PNG";
import W8 from "../../assets/img/w8.PNG";
import W9 from "../../assets/img/w9.PNG";
import W10 from "../../assets/img/w10.PNG";
import p1 from "../../assets/img/What is WAVES Bazaar.pdf";
// import W1 from "../../assets/img/image.png"
import Project from "../../assets/img/Project.png";
import Footer from "../Footer/Footer";
// import w1 from "../../assets/img/w1.PNG";
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
const DownloadPDF = () => {
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

  const handleScroll = () => {
    // if (
    //   window.innerHeight + document.documentElement.scrollTop + 1 >=
    //   document.documentElement.scrollHeight
    // ) {
    //   if (!loading && hasMore) {
    //     setPage((prevPage) => {
    //       const nextPage = prevPage + 1;
    //       loadPreLoadData(nextPage);
    //       return nextPage;
    //     });
    //   }
    // }
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
        page: pageNumber,
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
    } else {
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
        console.error("Invalid IDs format:", ids);
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
        console.error("Invalid IDs format:", ids);
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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setAlertData({
      heading: "Signup Required",
      content: (
        <>
          <p className="text-center p-4">
            To view the Waves Bazaar project details, Please sign up as a Buyer
            or Seller.{" "}
          </p>
          <div class="top-btn text-center ">
            <a
              href="https://wavesbazaar.com/wave-seller/login"
              class="btn btn-primary border-radius mb-3"
            >
              Seller Login
            </a>
            &nbsp;
            <a
              href="https://wavesbazaar.com/waves-buyer/login"
              class="btn btn-primary border-radius  mb-3"
            >
              Buyer Login
            </a>
          </div>
        </>
      ),
    });
  }, []);
  return (
    <>
      <div class="col-lg-12 top-menu-custom">
        <div class="container">
          <div class="logo-landing-header">
            <div class="top-logo">
              <a href="https://wavesbazaar.com/">
                <img src="image/waves-logo.png" alt="Waves Logo" />
              </a>
              <a
                href="https://www.mib.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="image/mib.png" alt="MIB Logo" />
              </a>
              <a
                href="https://nfdcindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="image/nfdc-logo.png" alt="NFDC Logo" />
              </a>
              <button
                class="btn btn-menu"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <img
                  src="https://www.iffigoa.org/public/images/menu.svg"
                  alt="image"
                  class="menu-link"
                />
                Menu
              </button>
            </div>
            <div
              class="offcanvas offcanvas-end text-bg-dark sidemenu"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navigation-menu">
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
                    {" "}
                    <a href="https://wavesbazaar.com/project">
                      Explore Projects
                    </a>
                  </li>
                  <li>
                    <Link to="/download">Download</Link>
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
            <div className="page-title list-name text-center mb-4 ">
              <h2 className="animated fadeInRight">Download Brochure</h2>
            </div>

            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W1} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">What is WAVES Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">What is WAVES Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                  {/* <Link onClick={handleClickOpen} className="btn btn-primary">
                    Download
                  </Link> */}
                  <a href="/pdf/What is WAVES Bazaar.pdf"  className="btn btn-primary">
                    Download
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W2} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">Web Series_Waves Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">Web Series_Waves Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                 
                  <a href="/pdf/Web Series_Waves Bazaar.pdf"  target="_blank" className="btn btn-primary">
                    View & Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W3} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">VFX_Waves Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">VFX_Waves Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                
                  <a href="/pdf/VFX_Waves Bazaar.pdf" target="_blank"  className="btn btn-primary">
                  View & Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W4} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">Podcast</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">Podcast</h5>
                  <ul className="ProjectType-list"></ul>

                 
                  
                  <a href="/pdf/Podcast.pdf" target="_blank"  className="btn btn-primary">
                  View & Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W5} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">Music and Sound_Waves Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">Music and Sound_Waves Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                
                  <a href="/pdf/Music and Sound_Waves Bazaar.pdf" target="_blank"  className="btn btn-primary">
                  View & Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W6} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">GameMakers_Waves Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">GameMakers_Waves Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                  <a href="/pdf/GameMakers_Waves Bazaar.pdf" target="_blank" className="btn btn-primary">
                  View & Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W7} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">Films_Waves Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">Films_Waves Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                
                  
                  <a href="/pdf/Films_Waves Bazaar.pdf" target="_blank" className="btn btn-primary">
                  View & Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W8} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">Events_Waves Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">Events_Waves Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                  <a href="/pdf/Events_Waves Bazaar.pdf" target="_blank" className="btn btn-primary">
                  View & Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W9} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">Comic and eBook_Waves Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">Comic and eBook_Waves Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                  <a href="/pdf/Comic and eBook_Waves Bazaar.pdf" target="_blank"  className="btn btn-primary">
                  View & Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 animated fadeInUp">
              <div className="image-container">
                <div className="defaultimagecontainer text-center">
                  <img src={W10} alt="user" className="defualtImage" />
                </div>

                <div className="project-title-name">
                  <h5 className="card-title">AR_VR_XR_Waves Bazaar</h5>
                </div>
                <div className="hover-content">
                  <h5 className="card-title">AR_VR_XR_Waves Bazaar</h5>
                  <ul className="ProjectType-list"></ul>

                  <a href="/pdf/AR_VR_XR_Waves Bazaar.pdf" target="_blank" className="btn btn-primary">
                  View & Download
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
            <Footer />

    </>
  );
};

export default DownloadPDF;
