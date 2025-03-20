import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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

const images = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo20,
  Logo21,
  Logo22,
  Logo23,
  Logo24,
  Logo25,
  Logo26,
  Logo27,
  Logo28,
  Logo29,
  Logo30,
  Logo31,
  Logo31,
  Logo32,
  Logo33,
  Logo34,
  Logo35,
  Logo36,
  Logo37,
  Logo38,
  Logo39,
  Logo40,
  Logo41,
  Logo42,
  Logo43,
];

const CarouselComponent = () => {
  const options = {
    loop: true,
    items: 8,
    margin: 5,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 8,
      },
    },
  };

  return (
    <>


      <OwlCarousel className="owl-theme" {...options}>
        {images.map((image, index) => (
          <div
            // className="item"
            key={index}
            // style={{ width: "130.75px", marginRight: "10px" }}
            
          >
            <div
            //  className="card"
             className="item custom-item"
             >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                // className="img-logo img-fluid"
              
              />
            </div>
          </div>
        ))}
      </OwlCarousel>

    

      {/* <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <img src={Logo1} alt="Slide 1" />
      </div>
      <div className="item">
        <img src={Logo2} alt="Slide 2" />
      </div>
      <div className="item">
        <img src={Logo3} alt="Slide 3" />
      </div>
      <div className="item">
        <img src={Logo4} alt="Slide 4" />
      </div>
      <div className="item">
        <img src={Logo5} alt="Slide 5" />
      </div>
      <div className="item">
        <img src={Logo6} alt="Slide 6" />
      </div>
      <div className="item">
        <img src={Logo7} alt="Slide 7" />
      </div>
      <div className="item">
        <img src={Logo8} alt="Slide 8" />
      </div>
      <div className="item">
        <img src={Logo9} alt="Slide 9" />
      </div>
      <div className="item">
        <img src={Logo10} alt="Slide 10" />
      </div>
      <div className="item">
        <img src={Logo11} alt="Slide 11" />
      </div>
      <div className="item">
        <img src={Logo12} alt="Slide 12" />
      </div>
      <div className="item">
        <img src={Logo13} alt="Slide 13" />
      </div>
      <div className="item">
        <img src={Logo14} alt="Slide 14" />
      </div>
      <div className="item">
        <img src={Logo15} alt="Slide 15" />
      </div>
      <div className="item">
        <img src={Logo16} alt="Slide 16" />
      </div>
      <div className="item">
        <img src={Logo17} alt="Slide 17" />
      </div>
      <div className="item">
        <img src={Logo18} alt="Slide 18" />
      </div>
      <div className="item">
        <img src={Logo19} alt="Slide 19" />
      </div>
      <div className="item">
        <img src={Logo20} alt="Slide 20" />
      </div>
      <div className="item">
        <img src={Logo21} alt="Slide 21" />
      </div>
      <div className="item">
        <img src={Logo22} alt="Slide 22" />
      </div>
      <div className="item">
        <img src={Logo23} alt="Slide 23" />
      </div>
      <div className="item">
        <img src={Logo24} alt="Slide 24" />
      </div>
      <div className="item">
        <img src={Logo25} alt="Slide 25" />
      </div>
      <div className="item">
        <img src={Logo26} alt="Slide 26" />
      </div>
      <div className="item">
        <img src={Logo27} alt="Slide 27" />
      </div>
      <div className="item">
        <img src={Logo28} alt="Slide 28" />
      </div>
      <div className="item">
        <img src={Logo29} alt="Slide 29" />
      </div>
      <div className="item">
        <img src={Logo30} alt="Slide 30" />
      </div>
      <div className="item">
        <img src={Logo31} alt="Slide 31" />
      </div>
      <div className="item">
        <img src={Logo32} alt="Slide 32" />
      </div>
      <div className="item">
        <img src={Logo33} alt="Slide 33" />
      </div>
      <div className="item">
        <img src={Logo34} alt="Slide 34" />
      </div>
      <div className="item">
        <img src={Logo35} alt="Slide 35" />
      </div>
      <div className="item">
        <img src={Logo36} alt="Slide 36" />
      </div>
      <div className="item">
        <img src={Logo37} alt="Slide 37" />
      </div>
      <div className="item">
        <img src={Logo38} alt="Slide 38" />
      </div>
      <div className="item">
        <img src={Logo39} alt="Slide 39" />
      </div>
      <div className="item">
        <img src={Logo40} alt="Slide 40" />
      </div>
      <div className="item">
        <img src={Logo41} alt="Slide 41" />
      </div>
      <div className="item">
        <img src={Logo42} alt="Slide 42" />
      </div>
      <div className="item">
        <img src={Logo43} alt="Slide 43" />
      </div>
    </OwlCarousel> */}
    </>
  );
};

export default CarouselComponent;
