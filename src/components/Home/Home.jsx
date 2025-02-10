import React, { useEffect, useState } from 'react'

import WavesLogo from "../../assets/img/Waves.png";

import category_1 from "../../assets/img/category_1.jpg"
import NFDCLogo from "../../assets/img/NFDC.png"
import WAVESLoader from "../../assets/img/spinner.gif"
import ApiClient from '../API/ApiClient';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AlertMessage from '../AlertMessage';
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;
//const dataurl = "https://wavesbazaar.com/api/waves-buyer";
function getCookie() {
    const allCookies = document.cookie;
    const cookiesObj = allCookies.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = value;
        return acc;
    }, {});
    return cookiesObj

}
const Home = () => {
    const [loggedinData, setLoggedinData] = useState({})
    React.useEffect(() => {
        const myCookieValue = getCookie();
        setLoggedinData(myCookieValue)
        console.log({ myCookieValue })
        //console.log('Cookie Value:', myCookieValue);
    }, []);

    const { getRequestApi } = ApiClient();
    const [pagination, setPagination] = useState({
        totalPosts: 0,
        totalPages: 0,
        currentPage: 1,
        limit: 12,
    });



    const [searchForm, setSearchForm] = useState({ title: '', category: '' });

    const [data, setData] = useState([])
    const [genre, setGenre] = useState([])
    const [filmtype, setFilmtype] = useState([]);
    const [language, setlanguage] = useState([]);
    const [country, setCountry] = useState([]);
    const [film_status, setFilm_status] = useState({});
    const [loading, setLoading] = useState(false);

    const [hasMore, setHasMore] = useState(true); // Track if more data is available

    const [formData, setFormData] = useState({
        title: '',
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
        const endpoints = ['film-type', 'language', 'country', 'genre', 'segment', 'stage-type', 'format-type', 'videography-type'];
        const results = await Promise.all(endpoints.map(endpoint => getRequestApi(`site/${endpoint}`)));

        if (results.every(result => result.status)) {
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

        if (typeof ids === 'string') {
            try {

                ids = JSON.parse(ids); // Convert stringified array to an actual array
            } catch (error) {
                console.error("Invalid IDs format:", ids);
                return '';
            }
        } else {

        }

        // Filter and map the country names based on IDs
        const countryNames = country
            .filter(item => ids.includes(item.id)) // Ensure the item ID is in the provided IDs array
            .map(item => item.name); // Extract the names of matched countries
        // Join the country names with a comma and return
        return countryNames.join(', ');
    }

    function getLanguageNamesByIds(ids) {
        if (typeof ids === 'string') {
            try {
                ids = JSON.parse(ids); // Convert stringified array to an actual array
            } catch (error) {
                console.error("Invalid IDs format:", ids);
                return '';
            }
        }
        const countryNames = language
            .filter(country => ids.includes(country.id)) // Filter countries with matching IDs
            .map(country => country.name); // Extract their names
        return countryNames.join(', '); // Join the names with a comma
    }
    function getGenre(ids) {
        if (typeof ids === 'string') {
            try {
                ids = JSON.parse(ids); // Convert stringified array to an actual array
            } catch (error) {
                console.error("Invalid IDs format:", ids);
                return '';
            }
        }
        const countryNames = genre
            .filter(country => ids.includes(country.id)) // Filter countries with matching IDs
            .map(country => country.name); // Extract their names
        return countryNames.join(', '); // Join the names with a comma
    }
    const [alertData, setAlertData] = useState({
        heading: "",
        content: ""
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
            content:
                (
                    <>

                        <p className='text-center p-4'>To view the Waves Bazaar project details, Please sign up as a Buyer or Seller.  </p>
                        <div class="top-btn text-center ">
                            <a href="https://wavesbazaar.com/wave-seller/login" class="btn btn-primary border-radius mb-3">Seller Login</a>&nbsp;
                            <a href="https://wavesbazaar.com/waves-buyer/login" class="btn btn-primary border-radius  mb-3">Buyer Login</a>
                        </div>
                    </>
                )
        });

    }, []);
    return (
        <>
            <div class="col-lg-12 top-menu-custom">
                <div class="container">
                    <div class="logo-landing-header">
                        <div class="top-logo">
                            <a href="https://wavesbazaar.com/">
                                <img src="image/waves-logo.png" alt="Waves Logo" /></a>
                            <a href="https://www.mib.gov.in/" target="_blank" rel="noopener noreferrer">
                                <img src="image/mib.png" alt="MIB Logo" />
                            </a>
                            <a href="https://nfdcindia.com/" target="_blank" rel="noopener noreferrer">
                                <img src="image/nfdc-logo.png" alt="NFDC Logo" />
                            </a>
                            <button class="btn btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <img src="https://www.iffigoa.org/public/images/menu.svg" alt="image" class="menu-link" />
                                Menu
                            </button>
                        </div>
                        <div class="offcanvas offcanvas-end text-bg-dark sidemenu" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navigation-menu">
                                    <li><a href="https://wavesbazaar.com/" >Home</a></li>
                                    <li>  <a href="https://wavesbazaar.com/wave-seller/login">Seller Login</a> </li>
                                    <li>  <a href="https://wavesbazaar.com/waves-buyer/login">Buyer Login</a></li>
                                    <li>  <a href="https://wavesbazaar.com/project">Explore Projects</a></li>
                                    <li><a href="https://wavesindia.org/" target="_blank">WAVES India</a></li>
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
                            <h2 className='animated fadeInRight'>Explore Projects</h2>

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
                        {

                            data.map((row) => {
                                const type2Document = row.FilmDocuments.find(doc => doc.type === 8);

                                return <div className="col-md-3 col-sm-3 animated fadeInUp">
                                    <div className="image-container">
                                        {type2Document ?
                                            <img src={`${dataurl}/file/read/${type2Document.url}`} alt={type2Document.name}
                                            />
                                            :
                                            <div className='defaultimagecontainer text-center'>
                                                <img src={`/img/category_${row.category}.jpg`} alt="user" className='defualtImage' />
                                            </div>

                                        }
                                        <div className="project-title-name"><h5 className="card-title"> {row.title}</h5></div>
                                        <div className="hover-content">
                                            <h5 className="card-title">{row.title}</h5>
                                            <ul className="ProjectType-list">
                                                {row.category != null && row.category !== undefined ? (
                                                    <li title="Category">{getSegment(row.category)}</li>
                                                ) : null}
                                                {row.videography_type ? (
                                                    <li title="Videography">{getVideography(row.videography_type)}</li>
                                                ) : null}
                                                {row.format_type ? (
                                                    <li title="Format Type">{getformattype(row.format_type)}</li>
                                                ) : null}
                                                {row.stage_type ? (
                                                    <li title="Stage Type">{getformatstagetype(row.stage_type)}</li>
                                                ) : null}
                                                {row.country ? (
                                                    <li title="Countries">{getCountryNamesByIds(row.country)}</li>
                                                ) : null}
                                                {row.language ? (
                                                    <li title="Languages">{getLanguageNamesByIds(row.language)}</li>
                                                ) : null}
                                                {row.genre ? (
                                                    <li title="Genre">{getGenre(row.genre)}</li>
                                                ) : null}
                                                {row.duration ? (
                                                    <li title="Duration">{row.duration} min</li>
                                                ) : null}
                                            </ul>
                                            {
                                                (loggedinData.buyerloggedin) ?
                                                    <a href={"/waves-buyer/seller-projects/view/" + row.id} className="btn btn-primary"> View Details</a>
                                                    :
                                                    <Link onClick={handleClickOpen} className="btn btn-primary">
                                                        View Details
                                                    </Link>
                                            }


                                        </div>
                                    </div>
                                </div>

                            })
                        }
                        {loading && <div className="text-center loader">
                            <img src={WAVESLoader} />

                        </div>}
                    </div>
                </div>
            </div>

            <AlertMessage handleClickOpen={handleClickOpen} setOpen={setOpen} open={open} handleClose={handleClose}

                data={alertData}
            />
        </>
    )
}

export default Home