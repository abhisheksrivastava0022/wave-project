
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const TermsAndCondition = () => {
    return (

        <>


            <div className="col-lg-12 top-menu-custom">
                <div className="container">
                    <div className="logo-landing-header">
                        <div className="top-logo">
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
            <div className='container terms-codition mt-5'>
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
                                By accessing or using our platform, you
                                agree to comply with the following terms and conditions. These terms
                                govern your use of the Waves Bazaar website and services. Please
                                read them carefully.
                            </Typography>
                        </Grid>

                        {/* 1. Acceptance of Terms */}
                        <Grid item xs={12}>
                            <Typography variant="h6">1. Acceptance of Terms</Typography>
                            <p>
                                By registering on or using Waves Bazaar, you accept these Terms and
                                Conditions in full. If you do not agree, you must refrain from using
                                the platform.

                            </p>



                        </Grid>

                        {/* 2. Eligibility */}
                        <Grid item xs={12}>
                            <Typography variant="h6">2. Eligibility</Typography>
                            <ul>
                                <li>You must be at least 18 years old to register and use Waves Bazaar
                                    services.</li>
                                <li>You agree to provide accurate and complete information during the
                                    registration process.</li>

                            </ul>

                        </Grid>

                        {/* 3. Seller Responsibilities */}
                        <Grid item xs={12}>
                            <Typography variant="h6">3. Seller Responsibilities</Typography>
                            <ul>
                                <li>Sellers must ensure all uploaded content (e.g., profile picture,
                                    project synopsis, preview links) complies with applicable laws and
                                    does not infringe third-party rights.</li>
                                <li>Sellers are responsible for maintaining the accuracy of their
                                    project details.</li>
                                <li>Projects uploaded must be original and relevant to the purpose of
                                    Waves Bazaar.</li>
                                <li>By submitting a project, Sellers agree to share their contact
                                    details and project information with potential Buyers.</li>

                            </ul>


                        </Grid>

                        {/* 4. Buyer Responsibilities */}
                        <Grid item xs={12}>
                            <Typography variant="h6">4. Buyer Responsibilities</Typography>

                            <ul>
                                <li> Buyers must use the platform ethically and for legitimate purposes
                                    only.</li>
                                <li>Buyers are required to respect the intellectual property rights of
                                    sellers.</li>
                                <li>Any communication or transaction with sellers must comply with the
                                    platform's policies and be conducted in good faith.</li>
                                <li>Buyers agree not to distribute, reproduce, or misuse project
                                    materials provided by sellers without prior authorization.</li>
                                <li>Buyers must ensure timely payment for any purchases made through
                                    the platform as per agreed terms.</li>
                                <li>Buyers are prohibited from engaging in activities that may mislead
                                    or harm sellers, including fraudulent claims or disputes.</li>
                            </ul>


                        </Grid>

                        {/* 5. Content Guidelines */}
                        <Grid item xs={12}>
                            <Typography variant="h6">5. Content Guidelines</Typography>
                            <ul>
                                <li>Sellers are required to upload a profile picture, a synopsis (50
                                    words), a project preview link, and specify the language of the
                                    project.</li>
                                <li>The content you share must not include offensive, defamatory, or
                                    illegal material.</li>
                                <li>Whatever content the seller is uploading is not a part of IP
                                    (intellectual property).</li>
                                <li>Waves Bazaar reserves the right to remove or modify any content
                                    deemed inappropriate or non-compliant with these terms.</li>
                            </ul>
                        </Grid>

                        {/* 6. Usage Restrictions */}
                        <Grid item xs={12}>
                            <Typography variant="h6">6. Usage Restrictions</Typography>

                            Users agree not to :

                            <ul>
                                <li> Use the platform for fraudulent activities.</li>
                                <li>Share or promote unauthorized links, malware, or harmful content.</li>
                                <li>Violate the intellectual property rights of Waves Bazaar or other
                                    users.</li>
                            </ul>

                        </Grid>

                        {/* 7. Privacy and Data Protection */}
                        <Grid item xs={12}>
                            <Typography variant="h6">7. Privacy and Data Protection</Typography>
                            <p>
                                We respect your privacy. All user data is handled in accordance with
                                our Privacy Policy. By using the platform, you consent to the
                                collection, storage, and use of your data as outlined in our Privacy
                                Policy.

                            </p>



                        </Grid>

                        {/* 8. Intellectual Property */}
                        <Grid item xs={12}>
                            <Typography variant="h6">8. Intellectual Property</Typography>
                            <ul>
                                <li>Sellers retain rights to their projects but grant Waves Bazaar a
                                    license to display and promote them on the platform.</li>
                            </ul>

                        </Grid>

                        {/* 9. Limitation of Liability */}
                        <Grid item xs={12}>
                            <Typography variant="h6">9. Limitation of Liability</Typography>
                            <ul>
                                <li> Waves Bazaar is not liable for any direct, indirect, or
                                    consequential damages arising from the use of the platform.</li>
                                <li>
                                    The platform is provided “as is,” without warranties of any kind.
                                </li>
                            </ul>

                        </Grid>

                        {/* 10. Termination of Account */}
                        <Grid item xs={12}>
                            <Typography variant="h6">10. Termination of Account</Typography>
                            <p>
                                Waves Bazaar reserves the right to terminate or suspend accounts for
                                violating these terms, providing false information, or engaging in
                                prohibited activities.

                            </p>



                        </Grid>

                        {/* 11. Changes to Terms and Conditions */}
                        <Grid item xs={12}>
                            <Typography variant="h6">11. Changes to Terms and Conditions</Typography>
                            <p>
                                We may update these Terms and Conditions from time to time. Users
                                will be notified of any significant changes, and continued use of
                                the platform constitutes acceptance of the revised terms.

                            </p>


                        </Grid>

                        {/* 12. Contact Us */}
                        <Grid item xs={12}>
                            <Typography variant="h6">12. Contact Us</Typography>
                            <Typography variant="body1">
                                For any questions or concerns regarding these terms, please contact
                                us at:{" "}
                                <Link href="mailto:info@wavesbazaar.com" underline="hover">
                                    info@wavesbazaar.com
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </>
    )
}

export default TermsAndCondition