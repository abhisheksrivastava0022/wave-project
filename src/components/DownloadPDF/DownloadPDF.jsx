import React from "react";

import { Link } from "react-router-dom";
import W1 from "../../assets/img/WAVES_Bazaar.jpg";
import W2 from "../../assets/img/Web_Series_Waves Bazaar.jpg";
import W3 from "../../assets/img/VFX_Waves_Bazaar.jpg";
import W4 from "../../assets/img/Podcast.jpg";
import W5 from "../../assets/img/Music_Sound.jpg";
import W6 from "../../assets/img/GameMakers_Waves.jpg";
import W7 from "../../assets/img/Films_Waves_Bazaar.jpg";
import W8 from "../../assets/img/Events_Waves_Bazaar.jpg";
import W9 from "../../assets/img/Comic and eBook_Waves_Bazaar.jpg";
import W10 from "../../assets/img/AR_VR.jpg";
import influencer from "../../assets/img/influencer-markerting.png";
import advertising from "../../assets/img/advertising.png";
import c1 from "../../assets/img/1.jpeg";
import c2 from "../../assets/img/2.jpeg";
import c3 from "../../assets/img/3.jpg";
import c4 from "../../assets/img/4.jpg";
import c5 from "../../assets/img/5.jpeg";
import c6 from "../../assets/img/6.jpeg";
import c7 from "../../assets/img/7.jpeg";
import c8 from "../../assets/img/8.jpeg";
import c9 from "../../assets/img/9.jpeg";
import c10 from "../../assets/img/10.jpeg";
import c11 from "../../assets/img/11.jpeg";
import c12 from "../../assets/img/12.jpeg";
import c13 from "../../assets/img/13.jpeg";
import c14 from "../../assets/img/14.jpeg";
import Footer from "../Footer/Footer";

const DownloadPDF = () => {
  return (
    <>
      <div className="col-lg-12 top-menu-custom">
        <div className="container">
          <div className="logo-landing-header">
            <div className="top-logo">
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
              <h2 className="animated fadeInRight">Downloads</h2>
            </div>
            <div className="">
              <ul
                className="nav nav-tabs customTabs"
                id="myTabs"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="brochure-tab"
                    data-bs-toggle="tab"
                    href="#brochure"
                    role="tab"
                    aria-controls="brochure"
                    aria-selected="true"
                  >
                    Brochure
                  </a>
                </li>
                {/* <li className="nav-item" role="presentation">
                     <a className="nav-link" id="videos-tab" data-bs-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false">Videos</a>
                  </li> */}
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="creatives-tab"
                    data-bs-toggle="tab"
                    href="#creatives"
                    role="tab"
                    aria-controls="creatives"
                    aria-selected="false"
                  >
                    Creatives
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-2" id="myTabsContent">
                <div
                  className="tab-pane fade show active"
                  id="brochure"
                  role="tabpanel"
                  aria-labelledby="brochure-tab"
                  data-aos="fade-up-right"
                >
                    {/* brochure */}
                  <div className="row mt-3">
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={W1} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">What is WAVES Bazaar</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">What is WAVES Bazaar</h5>
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/pdf/What is WAVES Bazaar.pdf"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={W2} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Web Series</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">Web Series</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/Web Series_Waves Bazaar.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
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

                        <div className="project-title-name text-center">
                          <h5 className="card-title">VFX</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">VFX</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/VFX_Waves Bazaar.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
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

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Podcast</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">Podcast</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/Podcast.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
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

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Music and Sound</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">Music and Sound</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/Music and Sound_Waves Bazaar.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
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

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Game Makers</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">Game Makers</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/GameMakers_Waves Bazaar.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
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

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Films Waves Bazaar</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">Films Waves Bazaar</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/Films_Waves Bazaar.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
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

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Events Waves Bazaar</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">Events Waves Bazaar</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/Events_Waves Bazaar.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
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

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Comic and eBook</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">Comic and eBook</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/Comic and eBook_Waves Bazaar.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
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

                        <div className="project-title-name text-center">
                          <h5 className="card-title">AR VR XR</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">AR VR XR</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/AR_VR_XR_Waves Bazaar.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={influencer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Influencer Marketing</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title">Influencer Marketing</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/Influencer marketing.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={advertising} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Advertising</h5>
                        </div>
                        <div className="hover-content">
                          <h5 className="card-title"> Advertising</h5>
                          <ul className="ProjectType-list"></ul>

                          <a
                            href="/pdf/Advertising.pdf"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="tab-pane fade" id="videos" role="tabpanel" aria-labelledby="videos-tab"  data-aos="fade-up-left">
                   videos
                  </div> */}
                <div
                  className="tab-pane fade"
                  id="creatives"
                  role="tabpanel"
                  aria-labelledby="creatives-tab"
                  data-aos="fade-up-right"
                >
                  {/* creatives */}
                  <div className="row mt-3">
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c1} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c1}
                            className="btn btn-primary"
                            target="_blank"

                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c2} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c2}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c3} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c3}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c4} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c4}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c5} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c5}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c6} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c6}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c7} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c7}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c8} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c8}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c9} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c9}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c10} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c10}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c11} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c11}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c12} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c12}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c13} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c13}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c14} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">What is WAVES Bazaar</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c14}
                            className="btn btn-primary"
                            target="_blank"
                          >
                            View & Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
