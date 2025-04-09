import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Page/Header";
import Logos from "../Logos/Logos";

const TermsAndCondition = () => {
  let countData = 0;
  let countDataAdditional = 0;
  return (
    <>
      <div className="col-lg-12 top-menu-custom">
        <div className="container">
          <div className="logo-landing-header">
            <div className="top-logo">
              {/* <a href="https://wavesbazaar.com/">
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
              <a
                    href="https://ficci.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="image/ficci-white.png" alt="FICCI Logo" />
                  </a> */}
              {/* <button
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
              </button> */}
              <Logos/>
              <Header/>
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
      <div className="container terms-codition mt-5">
        <Box sx={{ padding: 2 }}>
          <Grid spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1" gutterBottom>
                Terms & Conditions of Waves Bazaar
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Welcome to Waves Bazaar!
              </Typography>
              <Typography variant="body1" gutterBottom>
                By accessing or using the platform https://wavesbazaar.com/, you
                agreed to comply with the terms and conditions governing your
                usage of the Waves Bazaar website and services and any amendment
                thereof from time to time and have duly understood them.
                Therefore it is advised to read them carefully.
              </Typography>
            </Grid>

            {/* 1. Acceptance of Terms */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Government Disclaimer
              </Typography>
              <p>
                Waves Bazaar is a government initiative aimed at facilitating
                direct communication between buyers and sellers. However, the
                Ministry of Information and Broadcasting and National Film
                Development Corporation Ltd. or any of its officers, associates,
                service providers or Government shall not be responsible for
                guaranteeing the sale of any project, payment transactions or
                shall be party to any, disputes arising between the users of the
                platform inter se. All transactions are solely between the
                respective parties, and the Ministry of Information and
                Broadcasting and National Film Development Corporation Ltd. or
                any of its officers, associates, service providers or any
                Government body disclaims any liability arising from omission,
                commission, non-performance, non-payment, or any issues
                incidental or consequential thereto.
              </p>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Acceptance of Terms
              </Typography>
              <p>
                By registering on or using Waves Bazaar, you accept these Terms
                and Conditions in full. If you do not agree, you must refrain
                from using the platform.
              </p>
            </Grid>

            {/* 2. Eligibility */}
            <Grid item xs={12}>
              <Typography variant="h6">{++countData}. Eligibility</Typography>
              <ul>
                <li>
                  You must be at least 18 years old to register and use Waves
                  Bazaar services.
                </li>
                <li>
                  You agree to provide accurate and complete information during
                  the registration process.
                </li>
              </ul>
            </Grid>

            {/* 3. Seller Responsibilities */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Seller Responsibilities
              </Typography>
              <ul>
                <li>
                  Sellers must ensure all uploaded content (e.g., profile
                  picture, project synopsis, preview links) complies with
                  applicable laws and does not infringe third-party rights.
                </li>
                <li>
                  Sellers are responsible for maintaining the accuracy of their
                  project details.
                </li>
                <li>
                  Projects uploaded must be original and relevant to the purpose
                  of Waves Bazaar.
                </li>
                <li>
                  By submitting a project, Sellers agree to share their contact
                  details and project information with potential Buyers.
                </li>
              </ul>
            </Grid>

            {/* 4. Buyer Responsibilities */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Buyer Responsibilities
              </Typography>

              <ul>
                <li>
                  Buyers agrees to use the platform ethically and for legitimate
                  purposes only.
                </li>
                <li>
                  Buyers shall refrain from any act or deed which may give rise
                  to the intellectual property rights infringement of sellers
                  and any such act or ommission the buyer shall be responsible
                  to the seller for any consequential action.
                </li>
                <li>
                  Any communication or transaction with sellers must comply with
                  the platform's policies and be conducted in good faith.
                </li>
                <li>
                  Buyers agree not to distribute, reproduce, or misuse project
                  materials provided by sellers without prior authorization.
                </li>
                <li>
                  Buyers agrees to ensure timely payment for any purchases made
                  through the platform as per agreed terms.
                </li>
                <li>
                  Buyers are prohibited from engaging in activities that may
                  mislead or harm sellers, including fraudulent claims or
                  disputes.
                </li>
              </ul>
            </Grid>

            {/* 5. Content Guidelines */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Content Guidelines
              </Typography>
              <ul>
                <li>
                  Sellers are required to upload a profile picture, a synopsis
                  (50 words), a project preview link, and specify the language
                  of the project.
                </li>
                <li>
                  The content the seller submits on website shall not include
                  offensive, defamatory, or illegal material.
                </li>
                <li>
                  Whatever content the seller is uploading is not a part of IP
                  (intellectual property).
                </li>
                <li>
                  Waves Bazaar reserves the right to remove or modify any
                  content deemed inappropriate or non-compliant with these
                  terms.
                </li>
              </ul>
            </Grid>

            {/* 6. Usage Restrictions */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Usage Restrictions
              </Typography>
              Users agrees not to :
              <ul>
                <li>Use the platform for fraudulent activities.</li>
                <li>
                  Share or promote unauthorized links, malware, or harmful
                  content.
                </li>
                <li>
                  Violate the intellectual property rights of Waves Bazaar or
                  other users.
                </li>
              </ul>
            </Grid>

            {/* 7. Privacy and Data Protection */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Privacy and Data Protection
              </Typography>
              <p>
                We respect your privacy. All user data is handled in accordance
                with our Privacy Policy. By using the platform, you consent to
                the collection, storage, and use of your data as outlined in our
                Privacy Policy and extant rules and regulations of GoI in this
                regard.
              </p>
            </Grid>

            {/* 8. Intellectual Property */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Intellectual Property
              </Typography>
              <ul>
                <li>
                  Sellers retain rights to their projects but grant Waves Bazaar
                  a license to display and promote them on the platform.
                </li>
                <li>
                  By uploading the project, the seller agrees that they are the
                  sole owner of the intellectual property (IP) associated with
                  the project. Waves Bazaar, NFDC, and any affiliated entities
                  shall not be held liable for any legal claims, disputes, or
                  actions related to the IP.
                </li>
              </ul>
            </Grid>

            {/* 9. Limitation of Liability */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Limitation of Liability
              </Typography>
              <ul>
                <li>
                  {" "}
                  Waves Bazaar is not liable for any direct, indirect, or
                  consequential damages arising from the use of the platform by
                  user.
                </li>
                <li>
                  The platform is provided “as is,” without warranties of any
                  kind.
                </li>
              </ul>
            </Grid>

            {/* 10. Termination of Account */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Termination of Account
              </Typography>
              <p>
                Waves Bazaar reserves the right to terminate or suspend accounts
                for violating any of these terms including, providing false
                information, or engaging in prohibited activities.
              </p>
            </Grid>

            {/* 11. Changes to Terms and Conditions */}
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Transaction and Payments
              </Typography>
              <p>
                Waves Bazaar serves solely as a platform for buyers and sellers
                to interact and engage in transactions. It is not responsible
                for facilitating or managing payments, which shall be handled
                directly between the buyer and seller including any dispute
                arising out thereof shall be settled by the Buyer and Seller
                inter se and neither NFDC / MI&B shall be responsible in any
                manner.
              </p>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countData}. Changes to Terms and Conditions
              </Typography>
              <p>
                MI&B / NFDC reserves the right to mofify these Terms and
                Conditions from time to time and the same shall be updated on
                the website and user of website shall be governed by such
                amended terms and conditions, and continued use of the platform
                constitutes acceptance of the revised terms.
              </p>
            </Grid>

            {/* 12. Contact Us */}
            <Grid item xs={12}>
              <Typography variant="h6">{++countData}. Contact Us</Typography>
              <Typography variant="body1">
                For any questions or concerns regarding these terms, please
                contact us at:{" "}
                <Link href="mailto:info@wavesbazaar.com" underline="hover">
                  info@wavesbazaar.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ padding: 2 }}>
          <Grid spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1" gutterBottom>
                Additional Points
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">
                {++countDataAdditional}. Dispute Resolution & Governing Law
              </Typography>
              <p>
                Any disputes or claims arising from the use of Waves Bazaar
                shall be governed by and construed in accordance with the laws
                of India. The parties irrevocably agree that the courts of Delhi
                shall have exclusive jurisdiction to settle any dispute or claim
                arising out of or in connection with this Agreement or its
                subject matter inter se between Buyer and Seller.
              </p>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">
                {++countDataAdditional}. Refund & Cancellation Policy
              </Typography>
              <p>
                Refunds and cancellations are subject to the policies set by the
                Seller, and Waves Bazaar does not facilitate or manage these
                processes and shall at no point of time be party to any
                transaction between Buyer and Seller. Any disputes regarding
                refunds or cancellations shall be resolved directly between the
                buyer and seller.
              </p>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countDataAdditional}. Account Security and Password
                Protection
              </Typography>
              <p>
                The buyers and sellers are solely responsible for maintaining
                the confidentiality of respective account credentials and agree
                to notify us immediately of any unauthorized access to
                respective accounts
              </p>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                {++countDataAdditional}. Force Majeure
              </Typography>
              <p>
                Waves Bazaar or any of its team members shall not be held liable
                for any failure or delay in the performance of its services due
                to events outside of its reasonable control, including, but not
                limited to, natural disasters, strikes, or technological
                disruptions.
              </p>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
