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

import "../../../src/assets/css/home.css"; // Import CSS file
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
const HomePage = () => {
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
        handleScroll()
        // window.addEventListener("scroll", handleScroll);
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
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
                limit: 8, // Number of items per page
                page: pageNumber,
            });
            const response = await getRequestApi("film", queryParams);
            if (response?.status) {
                setData(response.data); // Append new data
                // if (!response.data.length) setHasMore(false); // Stop loading if no more data
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

                        <p className='text-center p-4 '>To view the Waves Bazaar project details, Please sign up as a Buyer or Seller.  </p>
                        <div class="top-btn text-center ">
                            <a href="https://wavesbazaar.com/wave-seller/login" class="btn btn-primary border-radius mb-3">Seller Login</a>&nbsp;
                            <a href="https://wavesbazaar.com/waves-buyer/login" class="btn btn-primary border-radius  mb-3">Buyer Login</a>
                        </div>
                    </>
                )
        });

    }, []);
    return (
        <div>

            <div className="col-lg-12 home-video">
                <div className="video-section">
                    <div className="container">
                        <div className="col-md-12" style={{ position: 'relative' }}>
                            <div className="logo-landing mb-5">
                                <div className="top-logo">
                                    <a href="https://wavesbazaar.com/">
                                        <img src="image/waves-logo.png" alt="Waves Logo" /></a>
                                    <a href="https://www.mib.gov.in/" target="_blank" rel="noopener noreferrer">
                                        <img src="image/mib.png" alt="MIB Logo" />
                                    </a>
                                    <a href="https://nfdcindia.com/" target="_blank" rel="noopener noreferrer">
                                        <img src="image/nfdc-logo.png" alt="NFDC Logo" />
                                    </a>
                                    <button className="btn btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                        <img src="https://www.iffigoa.org/public/images/menu.svg" alt="Menu" className="menu-link" />
                                        Menu
                                    </button>

                                    {/* Offcanvas Menu */}
                                    <div className="offcanvas offcanvas-end text-bg-dark" style={{ background: '#5F259E!important' }} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                        <div className="offcanvas-header">
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <ul className="navigation-menu">
                                                <li><a href="https://wavesbazaar.com/">Home</a></li>
                                                <li><a href="https://wavesbazaar.com/wave-seller/login">Seller Login</a></li>
                                                <li><a href="https://wavesbazaar.com/waves-buyer/login">Buyer Login</a></li>
                                                <li><a href="https://wavesbazaar.com/project">Explore Projects</a></li>
                                                <li><a href="https://wavesindia.org/" target="_blank" rel="noopener noreferrer">WAVES India</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-home">
                        <div className="container">
                            <div className="hero-banner-text">
                                <h1 className="animated fadeInRight">Welcome to Waves Bazaar</h1>
                                <h1 className="animated fadeInLeft">The Global e-Marketplace</h1>
                                <h6 className="mt-3 animated fadeInDown">Empowering Global Media & Entertainment Industry Connections</h6>
                                <div className="btn-landing">
                                    <a href="https://wavesbazaar.com/wave-seller/signup" className="btn common-btn-div1 animated fadeInLeft">Seller’s Signup</a>
                                    <a href="https://wavesbazaar.com/waves-buyer/signup" className="btn common-btn-div animated fadeInRight">Buyer’s Signup</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Us Section */}
            <div className="col-lg-12">
                <div className="why-us">
                    <div className="container">
                        <h3 className="text-center mb-4">Why you should join Waves Bazaar?</h3>
                        <div className="row">
                            <div className="col-md-4 mt-3">
                                <span><i className="bi bi-shop-window"></i></span>
                                <h5>Comprehensive E-Marketplace</h5>
                                <p>Waves Bazaar offers a cross-vertical platform catering to various Media and Entertainment (M&E) sectors, including film, gaming, animation, AVGC-XR, and more</p>
                            </div>
                            <div className="col-md-4 mt-3">
                                <span><i className="bi bi-arrow-down-up"></i></span>
                                <h5>Global Appeal and Scalability</h5>
                                <p>Designed to connect buyers and sellers locally and globally, ensuring wide-reaching networking and business opportunities</p>
                            </div>
                            <div className="col-md-4 mt-3">
                                <span><i className="bi bi-bullseye"></i></span>
                                <h5>Diverse Offerings</h5>
                                <p>Provides features such as content showcases, buyer-seller meets, brand and product launches, pitching and funding opportunities, and an extensive networking hub</p>
                            </div>
                        </div>
                        <div className="col-md-8 mx-auto">
                            <div className="row">
                                <div className="col-md-6 mt-3">
                                    <span><i className="bi bi-brush-fill"></i></span>
                                    <h5>User-Friendly Interface</h5>
                                    <p>The platform ensures a seamless onboarding experience and intuitive navigation to enhance user satisfaction.</p>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <span><i className="bi bi-lightbulb"></i></span>
                                    <h5>Networking Opportunities</h5>
                                    <p>Fosters connections between industry professionals through virtual events, workshops, and community features.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* explore project */}
            {data && data.length > 0 ? (
                <></>
            ) : (
                <div className="shadow-sm white-bg mb-3">
                    <div className="user-list">

                        <p>Data not present</p>
                    </div>
                </div>
            )}
            <div className="container">
                <div className="innerpage mt-3">
                    <div className="page-title list-name text-center mb-4">
                        <h2>Explore Projects</h2>
                    </div>
                    <div className="row">
                        {
                            data.map((row) => {
                                const type2Document = row.FilmDocuments.find(doc => doc.type === 8);

                                return <div className="col-md-3 col-sm-3">
                                    <div className="image-container">
                                        {type2Document ?
                                            <img src={`${dataurl}/file/read/${type2Document.url}`} alt={type2Document.name}
                                            />
                                            :
                                            <div className='defaultimagecontainer text-center'>
                                                <img src={`/project/img/category_${row.category}.jpg`} alt="user" className='defualtImage' />
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
                        <div className=' exploreallcontainer text-center mt-3'>
                            <Link to='/project' className='btn common-btn-div1 animated fadeInLeft exploreall'>Explore Projects</Link>
                        </div>

                    </div>

                </div>
            </div>
            {loading && <div className="text-center loader">
                <img src={WAVESLoader} />

            </div>}
            <AlertMessage handleClickOpen={handleClickOpen} setOpen={setOpen} open={open} handleClose={handleClose}

                data={alertData}
            />
            {/* Description Section */}
            <div className="container p-100">
                <div className="col-md-8 mx-auto">
                    <p className="text-center font-28">Waves Bazaar is the ultimate global e marketplace for the media &amp; entertainment industry, offering you to connect, collaborate, and grow. You can easily interact with buyers, sellers, projects, profiles, skill showcasing, and do networking.</p>
                </div>
            </div>

            {/* Features Section */}
            <div className="feature col-lg-12">
                <div className="container">
                    <div className="p-4">
                        <h3 className="text-center mb-4">Explore Different Segments of Media and Entertainment Industry</h3>
                        <ul className="list-icon">
                            <li><i className="bi bi-circle-fill"></i> Film</li>
                            <li><i className="bi bi-circle-fill"></i> Television</li>
                            <li><i className="bi bi-circle-fill"></i> Gaming & Esports</li>
                            <li><i className="bi bi-circle-fill"></i> Radio & Podcasts</li>
                            <li><i className="bi bi-circle-fill"></i> Music & Sound</li>
                            <li><i className="bi bi-circle-fill"></i> Internet Advertising</li>
                            <li><i className="bi bi-circle-fill"></i> Influencer Marketing</li>
                            <li><i className="bi bi-circle-fill"></i> Out of Home Media</li>
                            <li><i className="bi bi-circle-fill"></i> AVGC- XR</li>
                            <li><i className="bi bi-circle-fill"></i> Print (Newspaper, Magazine)</li>
                            <li><i className="bi bi-circle-fill"></i> Live Events</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Benefits for Sellers */}
            <div className="col-lg-12">
                <div className="benifits red-bg-seller">
                    <div className="container">
                        <h3 className="text-center">Benefits of Joining Waves Bazaar <span className="pink-text">For Sellers</span></h3>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 d-flex">
                                <div className="card mt-4">
                                    <div className="card-body text-center">
                                        <span><img src="image/icon1.png" alt="Icon" /></span>
                                        <h5>Access a Global Marketplace</h5>
                                        <p>Showcase your skills and projects to a worldwide audience within the media industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 d-flex">
                                <div className="card mt-4">
                                    <div className="card-body text-center">
                                        <span><img src="image/icon2.png" alt="Icon" /></span>
                                        <h5>Create and Collaborate</h5>
                                        <p>Develop multiple projects, build your profile, and network effectively.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 d-flex">
                                <div className="card mt-4">
                                    <div className="card-body text-center">
                                        <span><img src="image/icon3.png" alt="Icon" /></span>
                                        <h5>Expand Your Opportunities</h5>
                                        <p>Connect with buyers and showcase your unique talents effortlessly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits for Buyers */}
            <div className="col-lg-12">
                <div className="benifits red-bg-buyer">
                    <div className="container">
                        <h3 className="text-center">Benefits of Joining Waves Bazaar <span className="pink-text">For Buyers</span></h3>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 d-flex">
                                <div className="card mt-4">
                                    <div className="card-body text-center">
                                        <span><img src="image/icon4.png" alt="Icon" /></span>
                                        <h5>Explore Quality Content</h5>
                                        <p>Browse through a vast range of industry-specific content tailored to your needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 d-flex">
                                <div className="card mt-4">
                                    <div className="card-body text-center">
                                        <span><img src="image/icon5.png" alt="Icon" /></span>
                                        <h5>Build Professional Relationships</h5>
                                        <p>Connect with sellers, creators, and industry professionals to make the right investments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 d-flex">
                                <div className="card mt-4">
                                    <div className="card-body text-center">
                                        <span><img src="image/icon6.png" alt="Icon" /></span>
                                        <h5>Access Innovative Solutions</h5>
                                        <p>Get in touch with diverse creators, discover exclusive offerings, and shape your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div class="footer text-center ">
                <div class="container">
                    <div class="footer-landing-page">
                        <a href="https://wavesindia.org/" target="_blank">Waves India</a>
                        <a href="https://wavesbazaar.com/project/terms-and-conditions">Terms and conditions</a>
                        <span>All right reserved, Copyright© Powered by Waves Bazaar.</span>
                        <a href="mailto:@info@wavesbazaar.com">For Queries: info@wavesbazaar.com</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomePage;