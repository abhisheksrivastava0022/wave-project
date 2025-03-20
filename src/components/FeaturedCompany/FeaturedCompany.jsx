import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Page/Header";

// Import all logos
import Logo1 from "../../assets/img/ProductionHouseLogos/Netflixlogo.png";
import Logo2 from "../../assets/img/ProductionHouseLogos/PrimeVideo.png";
import Logo3 from "../../assets/img/ProductionHouseLogos/MXPlayer.png";
import Logo4 from "../../assets/img/ProductionHouseLogos/JioHotstar.png";
import Logo5 from "../../assets/img/ProductionHouseLogos/PrasarBharti.jpg";
import Logo6 from "../../assets/img/ProductionHouseLogos/WavesOtt.png";
import Logo7 from "../../assets/img/ProductionHouseLogos/Saregama.jpg";
import Logo8 from "../../assets/img/ProductionHouseLogos/Zee.png";
import Logo9 from "../../assets/img/ProductionHouseLogos/Sony.png";
import Logo10 from "../../assets/img/ProductionHouseLogos/Google.webp";
import Logo11 from "../../assets/img/ProductionHouseLogos/Lionsgate.webp";
import Logo12 from "../../assets/img/ProductionHouseLogos/Bbc.png";
import Logo13 from "../../assets/img/ProductionHouseLogos/Homable.png";
import Logo14 from "../../assets/img/ProductionHouseLogos/TSeries.png";
import Logo15 from "../../assets/img/ProductionHouseLogos/YashRajFilms.svg";
import Logo16 from "../../assets/img/ProductionHouseLogos/Emmay.avif";
import Logo17 from "../../assets/img/ProductionHouseLogos/BanijayAsia.png";
import Logo18 from "../../assets/img/ProductionHouseLogos/Dharmatic.png";
import Logo19 from "../../assets/img/ProductionHouseLogos/SikhyaEntertainment.jpg";
import Logo20 from "../../assets/img/ProductionHouseLogos/PVRInox.png";
import Logo21 from "../../assets/img/ProductionHouseLogos/Zomato.png";
import Logo22 from "../../assets/img/ProductionHouseLogos/EpicGames.png";
import Logo23 from "../../assets/img/ProductionHouseLogos/Mubi.png";
import Logo24 from "../../assets/img/ProductionHouseLogos/Rajshri.webp";
import Logo25 from "../../assets/img/ProductionHouseLogos/MukeshChhabra.png";
import Logo26 from "../../assets/img/ProductionHouseLogos/RedChillies.png";
import Logo27 from "../../assets/img/ProductionHouseLogos/Lyca.png";
import Logo28 from "../../assets/img/ProductionHouseLogos/PanoramaStudios.webp";
import Logo29 from "../../assets/img/ProductionHouseLogos/Bookmyshow.png";
import Logo30 from "../../assets/img/ProductionHouseLogos/Coloryellow.png";
import Logo31 from "../../assets/img/ProductionHouseLogos/Latido.png";
import Logo32 from "../../assets/img/ProductionHouseLogos/Applause.jpg";
import Logo33 from "../../assets/img/ProductionHouseLogos/DrishyamFilms.png";
import Logo34 from "../../assets/img/ProductionHouseLogos/Civicstudios.png";
import Logo35 from "../../assets/img/ProductionHouseLogos/RamojiFilmCity.png";
import Logo36 from "../../assets/img/ProductionHouseLogos/Qube.png";
import Logo37 from "../../assets/img/ProductionHouseLogos/TechnicoloR.png";
import Logo38 from "../../assets/img/ProductionHouseLogos/Tribeca.png";
import Logo39 from "../../assets/img/ProductionHouseLogos/Dish2h.png";
import Logo40 from "../../assets/img/ProductionHouseLogos/In10Media.png";
import Logo41 from "../../assets/img/ProductionHouseLogos/Annapurna_Studios.jpg";
import Logo42 from "../../assets/img/ProductionHouseLogos/Shortstv.jpg";
import Logo43 from "../../assets/img/ProductionHouseLogos/FilmSharks.png";

// Store all image imports in an array
const images = [
  Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10,
  Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20,
  Logo21, Logo22, Logo23, Logo24, Logo25, Logo26, Logo27, Logo28, Logo29, Logo30,
  Logo31, Logo32, Logo33, Logo34, Logo35, Logo36, Logo37, Logo38, Logo39, Logo40,
  Logo41, Logo42, Logo43,
];

const FeaturedCompany = () => {
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
              <Header />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Companies Section */}
      <div className="container terms-codition mt-5">
        <Box sx={{ padding: 2 }}>


          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h4" component="h1" gutterBottom>
                Featured Companies
              </Typography>
            </Grid>
            {images.map((logo, index) => (
              <Grid className="card" item xs={12} sm={12} md={3} lg={3} key={index}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                  <img
                    src={logo}
                    alt={`Company Logo ${index + 1}`}
                    style={{ width: "100%", maxHeight: "100px", objectFit: "contain" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>

      <Footer />
    </>
  );
};

export default FeaturedCompany;
