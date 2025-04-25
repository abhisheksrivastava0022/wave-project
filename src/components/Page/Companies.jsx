import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Logo1 from "../../assets/img/Logo/Netflixlogo.png";
import Logo2 from "../../assets/img/Logo/PrimeVideo.png";
import Logo3 from "../../assets/img/Logo/MXPlayer.png";
import Logo4 from "../../assets/img/Logo/JioHotstar.png";
import Logo5 from "../../assets/img/Logo/PrasaarBharti.png";
import Logo6 from "../../assets/img/Logo/WavesOTT.png";
import Logo7 from "../../assets/img/Logo/SAREGAMA.png";
import Logo8 from "../../assets/img/Logo/ZEE.png";
import Logo9 from "../../assets/img/Logo/Sony.png";
import Logo10 from "../../assets/img/Logo/google.png";
import Logo11 from "../../assets/img/Logo/Lionsgate.png";
import Logo12 from "../../assets/img/Logo/BBC.png";
import Logo13 from "../../assets/img/Logo/Homable.png";
import Logo14 from "../../assets/img/Logo/TSeries.png";
import Logo15 from "../../assets/img/Logo/YasRajFilms.png";
import Logo16 from "../../assets/img/Logo/Emmay.png";
import Logo17 from "../../assets/img/Logo/BanijayAsia.png";
import Logo18 from "../../assets/img/Logo/Dharmatic.png";
import Logo19 from "../../assets/img/Logo/SikhyaEntertainment.png";
import Logo20 from "../../assets/img/Logo/PVRInox.png";
import Logo21 from "../../assets/img/Logo/Zomato.png";
import Logo22 from "../../assets/img/Logo/EpicGames.png";
import Logo23 from "../../assets/img/Logo/MUBI.png";
import Logo24 from "../../assets/img/Logo/Rajshri.png";
import Logo25 from "../../assets/img/Logo/MukeshChhabra.png";
import Logo26 from "../../assets/img/Logo/RedChillies.png";
import Logo27 from "../../assets/img/Logo/LycaProductions.png";
import Logo28 from "../../assets/img/Logo/Panorama Studios.jpg";
import Logo29 from "../../assets/img/Logo/Bookmyshow.png";
import Logo30 from "../../assets/img/Logo/ColorYellow.png";
import Logo31 from "../../assets/img/Logo/Latido.png";
import Logo32 from "../../assets/img/Logo/Applause.png";
import Logo33 from "../../assets/img/Logo/DrishyamFilms.png";
import Logo34 from "../../assets/img/Logo/CIVIC.png";
import Logo35 from "../../assets/img/Logo/RamojiFilmCity.png";
import Logo36 from "../../assets/img/Logo/QUBE.png";
import Logo37 from "../../assets/img/Logo/TechnicoloR.png";
import Logo38 from "../../assets/img/Logo/Tribeca.png";
import Logo39 from "../../assets/img/Logo/D2H.png";
import Logo40 from "../../assets/img/Logo/In10Media.png";
import Logo41 from "../../assets/img/Logo/AnnapurnaStudios.png";
import Logo42 from "../../assets/img/Logo/ShortsTV.png";
import Logo43 from "../../assets/img/Logo/FilmSharks.png";
import Logo44 from "../../assets/img/Logo/DEVGN FILMS.jpg";
import Logo45 from "../../assets/img/Logo/Janta_Cinema_Logo_vertical_RGB-2.jpg";
import Logo46 from "../../assets/img/Logo/LVS.jpg";
import Logo47 from "../../assets/img/Logo/Prismix.jpg";
import Logo48 from "../../assets/img/Logo/Pulz Sound.jpg";


const Companies = () => {
  const FeaturesCompanies = [
    {
      question: "International Companies",
      answer:
        [
         Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10,
         Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20,
         Logo21, Logo22, Logo23, Logo24, Logo25, Logo26, Logo27, Logo28, Logo29, Logo30,
         Logo31, Logo32, Logo33, Logo34, Logo35, Logo36, Logo37, Logo38, Logo39, Logo40,
         Logo41, Logo42, Logo43,
       ]
    },
    {
      question: "Indian Companies",
      answer:
        [
         Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10,
         Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20,
         Logo21, Logo22, Logo23, Logo24, Logo25, Logo26, Logo27, Logo28, Logo29, Logo30,
         Logo31, Logo32, Logo33, Logo34, Logo35, Logo36, Logo37, Logo38, Logo39, Logo40,
         Logo41, Logo42, Logo43,
       ]
    },
  ];

  return (
    <>
      <div className="container  mb-5">
        <h3 className="text-center mb-5">Featured Companies</h3>
        <div className="card">
          <div className="">
           

            <div className="tab-content mt-2" id="myTabsContent">
              <div
                className="tab-pane fade show active"
                id="generic"
                role="tabpanel"
                aria-labelledby="generic-tab"
                data-aos="fade-up-right"
              >
                <div className="accordion" id="faqAccordion">
                  {FeaturesCompanies.map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`heading-${index}`}>
                        <button
                          className={`accordion-button ${
                            index === 0 ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${index}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`collapse-${index}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${index}`}
                        className={`show`}
                        aria-labelledby={`heading-${index}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <div className="row">
                          {index === 0 ?
                           (
                           <>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo1}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo2}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo10}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo9}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo11}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo12}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo17}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo22}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo23}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo31}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo38}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo42}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo43}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <div className="card ">
                                <img
                                  src={Logo37}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    maxHeight: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                           
                           
                           </>) :
                            (
                            <>
                            <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo3}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo4}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo5}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo6}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo7}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo8}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo13}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo14}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo15}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo16}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo18}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo19}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo20}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo21}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo24}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo25}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo26}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo27}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo28}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo29}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo30}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo32}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo33}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo34}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo35}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo36}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo39}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo40}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo41}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo44}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo45}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                           
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo46}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                           
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo47}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                           
                          </div>
                          <div className="col-md-3 mb-3">
                            <div className="card ">
                              <img
                                src={Logo48}
                                alt=""
                                style={{
                                  width: "100%",
                                  maxHeight: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                           
                          </div>
                            
                            </>) }
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
