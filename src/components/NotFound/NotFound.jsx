import React from 'react';
import Footer from '../Footer/Footer';
// import NotFoundPage from '../../assets/img/notfound.png'
import NotFoundPage from "../../assets/img/notfound.png";
import Logos from '../Logos/Logos';


const NotFound = () => {

    return (
        <>
            <div className="col-lg-12 top-menu-custom">
                <div className="container">
                    <div className="logo-landing-header">
                        <div className="top-logo">
                            {/* <a href="https://wavesbazaar.com/" ><img src="https://wavesbazaar.com/landing-page-img/waves-logo.png" /></a>
                            <a href="https://www.mib.gov.in/" target='_blank'><img src="https://wavesbazaar.com/landing-page-img/mib.png" /></a>
                            <a href="https://nfdcindia.com/" target='_blank'><img src="https://wavesbazaar.com/landing-page-img/nfdc-logo.png" /></a>
                            <a
                    href="https://ficci.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="image/ficci-white.png" alt="FICCI Logo" />
                  </a> */}
                  <Logos/>
                            <button className="btn btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <img src="https://www.iffigoa.org/public/images/menu.svg" alt="image" className="menu-link" />
                                Menu
                            </button>
                        </div>
                        <div className="offcanvas offcanvas-end text-bg-dark sidemenu" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navigation-menu">
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
            <div className="hero-banner-background">
                <main className="d-flex flex-column u-hero u-hero--end mnh-100vh ">
                    <div className="container py-11 my-auto ">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6 col-lg-6 offset-lg-1 mb-md-0" style={{ width: '100%' }}>
                                <h2 className="text-center">
                                    <img src={NotFoundPage} alt="" />
                                </h2>
                                {/* <img src={NotFoundPage} /> */}
                                <p className="text-center mb-3">Sorry, the page you are looking for does not exist.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
