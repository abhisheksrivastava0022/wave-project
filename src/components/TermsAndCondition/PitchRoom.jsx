import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Page/Header";
import Logos from "../Logos/Logos";

const PitchRoom = () => {
  let countData = 0;
  let countDataAdditional = 0;
  return (
    <>
      <div className="col-lg-12 top-menu-custom">
        <div className="container">
          <div className="logo-landing-header">
            <div className="top-logo">

              <Logos />
              <Header />
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
                  {/* <li>
                    {" "}
                    <a href="https://wavesbazaar.com/wave-seller/login">
                      Pitch  Room
                    </a>
                  </li> */}
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
      <div className="container terms-codition mt-5" style={{ "minHeight": "408px" }}>
        <Box sx={{ padding: 2 }}>
          <Grid spacing={2}>
            <Grid item xs={12}>

              <Typography variant="h4" component="h1" gutterBottom>
                Pitch Room

              </Typography>

            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>

              </Typography>
              <Typography variant="body1" gutterBottom>
                The Pitch Room is high-energy platform for creators, filmmakers, and content innovators to present their most promising concepts to investors, producers, and commissioning editors. Designed to spotlight emerging talent and innovative projects, the Pitch Room will serve as a launchpad for new content ventures and potential co-productions, making it a must-attend for industry decision-makers.
                This is your chance to connect with global industry network.
                <br />
                <br />
                {/* <b> Eligibility</b><br />
                <b> Film, TV, AVGC (Animation, VFX, Gaming, Comics), Radio and Podcast, Music and Sound, Live Events and Influencer Marketing & other innovative formats are eligible.
                  To apply
                  <br />
                  <br />
                </b>
                1.
                Write to producersworkshop@filmbazaarindia.com with the following details about your project latest
                <b> by Monday, 21th April.</b><br />
                Project Title (Original language)
                <br />

                Format: Film, Music, Ad, Web Series, Video Game and so on.
                <br />
                Purpose/Goal for the Project: Seeking Producer/ Co-writer/Filmmaker as desired<br />
                Synopsis/Project Details<br />
                Year of Production:<br />
                Director/Artist/Company Name<br />
                Creator/Artist/Company Bio<br />
                Contact Person<br />
                Phone<br />
                Email<br />
                Link to Work: Film, Trailer, Writing, Ad etc.<br />
                Do not forget to include the link to the project you wish to showcase. (pitch deck, pitch video accepted)
                <br />
                <br />
                2.	A Registration fee of Rs. 3000 plus taxes as a Business Delegate is applicable which grants you Exclusive Access to investors, producers, and commissioning editors.
                <br />
                <br />
                3.	The Registration fee does not guarantee a slot to the Pitch room.
                <br />
                <br />
                4.	Entry to the Pitch Room is on first come first serve basis. However, scheduling of pitches is subject to the availability of slots.
                <b>All confirmed pitches will receive intimation latest by Tuesday, 22nd April, 2025.    </b>
                <br /> */}
                <br />
                <b>  Applications for Pitch Room are now closed</b>.
                <br />
                <br />

              </Typography>
            </Grid>


          </Grid>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default PitchRoom;
