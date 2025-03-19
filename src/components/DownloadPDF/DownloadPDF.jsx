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
import c1 from "../../assets/img/creatives/Advertising Buyer.jpeg";
import c2 from "../../assets/img/creatives/Advertising Seller.jpeg";
import c3 from "../../assets/img/creatives/Animation & VFX Services Buyer.jpeg";
import c4 from "../../assets/img/creatives/Animation & VFX Services Seller.jpeg";
import c5 from "../../assets/img/creatives/Comics E books Buyer.jpeg";
import c6 from "../../assets/img/creatives/Comics E books Seller.jpeg";
import c7 from "../../assets/img/creatives/Film & TV Live Action & Animation Buyer.jpeg";
import c8 from "../../assets/img/creatives/Film & TV Live Action & Animation Seller.jpeg";
import c9 from "../../assets/img/creatives/Gaming & Esports Buyer.jpeg";
import c10 from "../../assets/img/creatives/Gaming & Esports Seller.jpeg";
import c11 from "../../assets/img/creatives/Influencer Marketing Buyer.jpeg";
import c12 from "../../assets/img/creatives/Influencer Marketing Seller.jpeg";
import c13 from "../../assets/img/creatives/Live Events Buyer.jpeg";
import c14 from "../../assets/img/creatives/Live Events Seller.jpeg";
import c15 from "../../assets/img/creatives/Music & Sound Buyer.jpg";
import c16 from "../../assets/img/creatives/Music & Sound Seller.jpg";
import c17 from "../../assets/img/creatives/Radio & Podcast Buyer.jpeg";
import c18 from "../../assets/img/creatives/Radio & Podcast Seller.jpeg";
import c19 from "../../assets/img/creatives/Web Series Live action & Animation Buyer.jpeg";
import c20 from "../../assets/img/creatives/Web Series Live action & Animation Seller.jpeg";
import c21 from "../../assets/img/creatives/XR, VR & AR Buyer.jpeg";
import c22 from "../../assets/img/creatives/XR, VR & AR Seller.jpeg";
import Animation_Buyer from "../../assets/img/Film & TV Live Action & Animation Buyer.jpg";
import Animation_Seller from "../../assets/img/Film & TV Live Action & Animation Seller.jpg";
import Advertising_buyer from "../../assets/img/Advertising Buyer.jpg";
import Advertising_seller from "../../assets/img/Advertising seller.jpg";
import VFX_Services_Buyer from "../../assets/img/Animation & VFX Services Buyer.jpg";
import VFX_Services_seller from "../../assets/img/Animation & VFX Services Seller.jpg";
import Comics_Buyer from "../../assets/img/Comics and E-books Buyer.jpg";
import Comics_Seller from "../../assets/img/Comics and E-books Seller.jpg";
import Gaming_Buyer from "../../assets/img/Gaming & Esports Buyer.jpg";
import Gaming_Seller from "../../assets/img/Gaming & Esports Seller.jpg";
import Influencer_Buyer from "../../assets/img/Influencer Marketing Buyer.jpg";
import Influencer_Seller from "../../assets/img/Influencer Marketing Seller.jpg";
import Live_Events_Buyer from "../../assets/img/Live Events Buyer.jpg";
import Live_Events_Seller from "../../assets/img/Live Events Seller.jpg";
import Music_Buyer from "../../assets/img/Music and Sound Buyer.jpg";
import Music_Seller from "../../assets/img/Music and Sound Seller.jpg";
import Radio_Buyer from "../../assets/img/Radio & Podcast Buyer.jpg";
import Radio_Seller from "../../assets/img/Radio & Podcast Seller.jpg";
import Web_Series_Buyer from "../../assets/img/Web Series Live action & Animation Buyer.jpg";
import Web_Series_Seller from "../../assets/img/Web Series Live action & Animation Seller.jpg";
import XR_Buyer from "../../assets/img/XR,-VR-&-AR-Buyer.jpg";
import XR_Seller from "../../assets/img/XR, VR & AR Sellerf.jpg";





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
                <li className="nav-item" role="presentation">
                     <a className="nav-link" id="videos-tab" data-bs-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false">Videos</a>
                  </li>
              </ul>
              <div className="tab-content mt-2" id="myTabsContent">
                <div className="tab-pane fade show active" id="brochure" role="tabpanel" aria-labelledby="brochure-tab" data-aos="fade-up-right">
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
               
                <div className="tab-pane fade" id="creatives" role="tabpanel" aria-labelledby="creatives-tab" data-aos="fade-up-right">
                  {/* creatives */}
                  <div className="row mt-3">
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c1} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Advertising (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Advertising (Buyer)</h5> */}
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
                          <h5 className="card-title">Advertising (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Advertising (Seller)</h5> */}
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
                          <h5 className="card-title">Animation & VFX Services (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Animation & VFX Services (Buyer)</h5> */}
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
                          <h5 className="card-title">Animation & VFX Services (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Animation & VFX Services (Seller)</h5> */}
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
                          <h5 className="card-title">Comics  E books (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Comics  E books (Buyer)</h5> */}
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
                          <h5 className="card-title">Comics E books (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Comics E books (Seller)</h5> */}
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
                          <h5 className="card-title">Film (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation (Buyer)</h5> */}
                       
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
                          <h5 className="card-title">Film (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Film & TV Live Action & Animation (Seller)</h5> */}
                       
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
                          <h5 className="card-title">Gaming & Esports (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Gaming & Esports (Buyer)</h5> */}
                         
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
                          <h5 className="card-title">Gaming & Esports (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Gaming & Esports (Seller)</h5> */}
                         
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
                          <h5 className="card-title">Influencer Marketing (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Influencer Marketing (Buyer)</h5> */}
                     
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
                          <h5 className="card-title">Influencer Marketing (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Influencer Marketing (Seller)</h5> */}
                        
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
                          <h5 className="card-title">Live Events (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Live Events (Buyer)</h5> */}
                          
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
                          <h5 className="card-title">Live Events (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Live Events (Seller)</h5> */}
                         
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
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={c15} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Music & Sound (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Music & Sound (Buyer)</h5> */}
                          
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c15}
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
                          <img src={c16} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Music & Sound (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Music & Sound (Seller)</h5> */}
                          
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c16}
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
                          <img src={c17} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                        <h5 className="card-title">Radio & Podcast (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Radio & Podcast (Buyer)</h5> */}
                          
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c17}
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
                          <img src={c18} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Radio & Podcast (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Radio & Podcast (Seller)</h5> */}
                          
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c18}
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
                          <img src={c19} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Web Series (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Web Series Live action & Animation (Buyer)</h5> */}
                        
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c19}
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
                          <img src={c20} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Web Series (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">Web Series Live action & Animation (Seller)</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c20}
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
                          <img src={c21} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">XR, VR & AR (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">XR, VR & AR (Buyer)</h5> */}
                        
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c21}
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
                          <img src={c22} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                        <h5 className="card-title">XR, VR & AR (Seller)</h5>
                        
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">XR, VR & AR (Seller)</h5> */}
                      
                        
                          <ul className="ProjectType-list"></ul>
                          <a
                            href={c22}
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
             
                <div className="tab-pane fade" id="videos" role="tabpanel" aria-labelledby="videos-tab"  data-aos="fade-up-left">
                   {/* videos */}
                   <div className="row mt-3">
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Animation_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Film (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Buyer</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Film & TV Live Action & Animation Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Animation_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Film (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Film & TV Live Action & Animation Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Advertising_buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Advertising (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Advertising Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Advertising_seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Advertising (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Advertising Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={VFX_Services_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Animation & VFX Services (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Animation & VFX Services Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={VFX_Services_seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Animation & VFX Services (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Animation & VFX Services Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Comics_Buyer } alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Comics and E-books (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Comics & E-books Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Comics_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Comics and E-books (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Comics & E-books Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Gaming_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Gaming & Esports (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Gaming & Esports Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Gaming_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Gaming & Esports (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Gaming & Esports Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Influencer_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Influencer Marketing (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Influencer Marketing Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Influencer_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Influencer Marketing (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Influencer Marketing Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Live_Events_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Live Events (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Live Events Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Live_Events_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Live Events (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Live Events Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Music_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Music and Sound (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Music & Sound Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Music_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Music and Sound (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Music & Sound Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Radio_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Radio & Podcast (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Radio & Podcast Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Radio_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Radio & Podcast (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Radio & Podcast Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Web_Series_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Web Series (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Web Series Live action & Animation Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={Web_Series_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">Web Series (Seller)</h5>
                        </div>
                        <div className="hover-content">
                          {/* <h5 className="card-title">Film & TV Live Action & Animation Seller</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/Web Series Live action & Animation Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={XR_Buyer} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">XR, VR & AR (Buyer)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">XR, VR & AR (Buyer)</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/XR, VR & AR Buyer.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 animated fadeInUp">
                      <div className="image-container">
                        <div className="defaultimagecontainer text-center">
                          <img src={XR_Seller} alt="user" className="defualtImage" />
                        </div>

                        <div className="project-title-name text-center">
                          <h5 className="card-title">XR, VR & AR (Seller)</h5>
                        </div>
                        <div className="hover-content">
                        {/* <h5 className="card-title">XR, VR & AR (Seller)</h5> */}
                          <ul className="ProjectType-list"></ul>
                          <a
                            href="/assets/videos/XR, VR & AR Seller.mp4"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            Click to View
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
