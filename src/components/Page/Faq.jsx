
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Faq = () => {
    const faq = [
        {
            question: "What is WAVES Bazaar?",
            answer: "WAVES Bazaar is a global e-marketplace designed to connect India's creative talent with international markets. It serves as a platform for creators across various industries, including film, TV, music, animation, gaming, and comics, to showcase their work, pitch projects, and establish meaningful business-to-business (B2B) relationships."
        },
        {
            question: "Who can join WAVES Bazaar?",
            answer: "WAVES Bazaar is open to both buyers and sellers within the creative industries. Creators, such as filmmakers, game developers, musicians, and other professionals, can register as sellers to showcase their projects. Businesses and individuals seeking innovative content and services can register as buyers to explore and connect with these creators."
        },
        {
            question: "How do I register as a seller on WAVES Bazaar?",
            answer: "To register as a seller, visit the <a href='https://wavesbazaar.com/wave-seller/signup'>Wave Seller Signup</a> page on the WAVES Bazaar website. Complete the registration form by providing the necessary information about yourself and your services. Once registered, you can create a profile to showcase your projects and connect with potential clients."
        },
        {
            question: "How do I register as a buyer on WAVES Bazaar?",
            answer: "To register as a buyer, go to the <a href='https://wavesbazaar.com/waves-buyer/signup'>Wave Buyer Signup</a> page on the WAVES Bazaar website. Sign up by providing the required details. After registration, you'll gain access to a diverse range of creative projects and services, enabling you to connect directly with sellers."
        },
        {
            question: "What types of projects are featured on WAVES Bazaar?",
            answer: "WAVES Bazaar features a wide array of projects across multiple sectors of the entertainment and media industry. This includes films, television shows, music compositions, animation projects, video games, visual effects, and comics. The platform aims to foster collaborations and networking opportunities among creative professionals."
        },
        {
            question: "Is there a fee to join WAVES Bazaar?",
            answer: "There is no registration fee to join WAVES Bazaar. You can sign up for free and gain access to the platform, allowing you to explore opportunities, showcase your work, and connect with industry professionals."
        },
        {
            question: "How does WAVES Bazaar support brand collaborations and funding?",
            answer: "WAVES Bazaar facilitates brand collaborations by providing a platform where creators can connect with potential partners, investors, and distributors. This interaction helps creators secure the necessary backing to realize their ideas and expand their reach in the global market."
        },
        {
            question: "What is the WAVES Summit, and how is it related to WAVES Bazaar?",
            answer: "The WAVES Summit, officially known as the World Audio Visual & Entertainment Summit, is a premier global event that brings together stakeholders from the media and entertainment industry. WAVES Bazaar is a key component of this summit, serving as the content networking market where creators and buyers can engage, collaborate, and explore business opportunities."
        },
        {
            question: "What should I do if I face issues while filling out the buyer or seller registration form?",
            answer: `If you encounter any technical difficulties while completing the registration form, please reach out to us at <a href="mailto:info@wavesbazaar.com">info@wavesbazaar.com</a> for assistance. Our support team will help resolve the issue promptly.`
        },
        {
            question: "How does Waves Bazaar ensure successful transactions?",
            answer: "Waves Bazaar provides a structured platform to facilitate seamless transactions and industry connections. While we connect buyers and sellers, it’s important to review service providers and communicate clearly before engaging in any agreements."
        }

    ];

    const film = [
        {
            question: "What qualifies a project for the Script Stage?",
            answer: "Projects that have a completed screenplay but have not yet begun production qualify for this stage."
        },
        {
            question: "What can sellers expect at this stage?",
            answer: "Sellers can pitch their scripts to producers, investors, and studios looking for fresh ideas and compelling stories."
        },
        {
            question: "What benefits do buyers get from the Script Stage?",
            answer: "Buyers can acquire high-potential scripts, invest in promising concepts, or collaborate with scriptwriters to develop new projects."
        },
        {
            question: "What does the Co-Production Stage entail?",
            answer: "This stage is for projects that have some funding or production elements in place but need additional co-producers, investors, or international partners."
        },
        {
            question: "Who should apply as a seller at this stage?",
            answer: "Filmmakers and producers seeking financial partners, production resources, or international collaborations."
        },
        {
            question: "What can buyers gain from this stage?",
            answer: "Buyers, including production companies and studios, can partner on projects that align with their vision and expand their global reach."
        },
        {
            question: "What qualifies as a Work in Progress project?",
            answer: "Films that are partially completed, in post-production, or seeking final-stage funding, editing, or distribution support."
        },
        {
            question: "What opportunities are available for sellers at this stage?",
            answer: "Sellers can showcase their nearly finished films to distributors, post-production studios, and festival programmers."
        },
        {
            question: "Why should buyers be interested in this stage?",
            answer: "Buyers can acquire films at a strategic stage, providing finishing funds or securing distribution rights before completion."
        },
        {
            question: "What does the Complete Stage include?",
            answer: "Fully finished films looking for distribution, festival screenings, or streaming platform acquisitions."
        },
        {
            question: "How can sellers benefit at this stage?",
            answer: "Sellers can pitch completed films to potential buyers, secure deals for digital and theatrical releases, and get exposure to global audiences."
        },
        {
            question: "Who are the key buyers in this stage?",
            answer: "Distributors, streaming platforms, broadcasters, and festival programmers looking for high-quality content ready for release."
        },
        {
            question: "How do I register for Waves Bazaar?",
            answer: "Visit  <a href='https://wavesbazaar.com/'> https://wavesbazaar.com/</a> and sign up as a buyer or seller based on your needs."
        },
        {
            question: "Are there any fees to participate?",
            answer: "Participation details, including any associated fees, will be outlined on the platform. Check the website for the latest pricing structure."
        },
        {
            question: "How do I connect with potential buyers or sellers?",
            answer: "Once registered, you can browse available projects, schedule meetings, and communicate directly with interested parties through the platform."
        },
        {
            question: "Can I submit more than one film project?",
            answer: "Yes, multiple submissions are allowed, provided each project has a separate application."
        },
        {
            question: "Is there an entry fee for submission?",
            answer: "Please refer to the official website for details on submission fees, if applicable."
        },
        {
            question: "Can I submit a film that has already premiered?",
            answer: "Yes, completed films that have already premiered can still apply for Waves Bazaar for further distribution and networking opportunities."
        },
        {
            question: "Do I need to own the rights to submit a project?",
            answer: "Yes, applicants must have the legal rights to submit the project."
        },
        {
            question: "Can I submit a film in a non-English language?",
            answer: "Yes, but all submission materials, including logline, synopsis, and dialogues, must be in English."
        },
        {
            question: "What happens during & after submission?",
            answer: "1. Applicant’s projects will be displayed on his profile. Any buyer interested can reach out to the applicant directly to take the discussion forward. <br/> 2. During filling the form the applicant will be given an opportunity to apply for the Viewing Room and Market Screening vertical of physical Waves Bazaar by paying applicable fees. (details available on the website)"
        },
        {
            question: "Will my submission materials be kept confidential?",
            answer: "Yes, all submitted materials will be handled with confidentiality and used only for evaluation/catalogue purposes."
        },
        {
            question: "What are the benefits of participating in Waves Bazaar?",
            answer: "Participants gain exposure, networking opportunities, and potential funding or distribution deals for their films."
        },
        {
            question: "Can I update my submission after applying?",
            answer: "Once submitted, changes can only be made if the submission portal allows for modifications before the deadline."
        },



    ];

    const advertising = [
        {
            question: "Who can list their services on Waves Bazaar in Advertising segment?",
            answer: "A wide range of advertising service providers can register as sellers, including: <br/><br/> 1. Print Media Companies <br/> 2. Advertising Agencies <br/> 3. Digital Marketers <br/> 4. Influencer Marketing Agencies <br/> 5. Billboard & OOH Advertising Vendors <br/> 6. Email & Mobile Marketing Service Providers <br/> Many more!"
        }, 
        {
            question: "What are the categories of advertising services I can list?",
            answer: "Waves Bazaar offers three major categories for listings: <br/> 1. Print Advertising <br/> 2. Digital Advertising <br/> 3. Out-of-Home (OOH) Advertising"
        },
        {
            question: "Who can buy advertising services on Waves Bazaar?",
            answer: "Buyers include businesses, brands, organizations, and anyone looking for advertising partners. This includes: <br/> 1. Advertising Agencies & Media Buying Firms <br/> 2. Corporate Brands & Product Manufacturers <br/> 3. Film Production Houses & Entertainment Companies <br/> 4. Event Organizers & Public Sector Organizations"
        },
        {
            question: "How do I find the right advertising service provider?",
            answer: "You can browse through listed services, compare offerings, and directly connect with sellers that match your needs."
        },
        {
            question: "Is there a cost to browse and connect with sellers?",
            answer: "Browsing and exploring services is free! However, transaction costs or service fees may vary depending on the seller."
        },
        {
            question: "Who do I contact for support in Advertising Segment?",
            // answer: "For any questions or assistance, you can reach out to the Nodal Officer for Advertising Vertical Mr. Shivaram Mony ( 7909195587, sivaram@nfdcindia.com )"
            "answer": "For any questions or assistance, you can reach out to the Nodal Officer for Advertising Vertical, Mr. Shivaram Mony (7909195587, <a href=\"mailto:sivaram@nfdcindia.com\">sivaram@nfdcindia.com</a>)."

        },
        
    ];

    return (
        <>

            <div className='container  mb-5'>
                <h3 className='text-center mb-5'>Frequently Asked Questions</h3>
                <div className='card'>
                <div className="mt-5">
               <ul className="nav nav-tabs customTabs" id="myTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                     <a className="nav-link active" id="generic-tab" data-bs-toggle="tab" href="#generic" role="tab" aria-controls="generic" aria-selected="true">Generic</a>
                  </li>
                  <li className="nav-item" role="presentation">
                     <a className="nav-link" id="film-tab" data-bs-toggle="tab" href="#film" role="tab" aria-controls="film" aria-selected="false">Film</a>
                  </li>
                  <li className="nav-item" role="presentation">
                     <a className="nav-link" id="advertising-tab" data-bs-toggle="tab" href="#advertising" role="tab" aria-controls="advertising" aria-selected="false">Advertising</a>
                  </li>
               </ul>
               <div className="tab-content mt-2" id="myTabsContent">
                  <div className="tab-pane fade show active" id="generic" role="tabpanel" aria-labelledby="generic-tab" data-aos="fade-up-right">
                  <div className="accordion " id="faqAccordion">
                        {faq.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={`heading-${index}`}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse-${index}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse-${index}`}
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse-${index}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading-${index}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body"><div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                  </div>
                  <div className="tab-pane fade" id="film" role="tabpanel" aria-labelledby="film-tab"  data-aos="fade-up-left">
                  <div className="accordion" id="filmAccordion">
                        {film.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={`film-heading-${index}`}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#film-collapse-${index}`}
                                        aria-expanded="false"
                                        aria-controls={`film-collapse-${index}`}
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={`film-collapse-${index}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`film-heading-${index}`}
                                    data-bs-parent="#filmAccordion"
                                >
                                    <div className="accordion-body"><div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                  </div>
                  <div className="tab-pane fade" id="advertising" role="tabpanel" aria-labelledby="advertising-tab"  data-aos="fade-up-right">
                  <div className="accordion " id="advertisingAccordion">
                        {advertising.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={`advertising-heading-${index}`}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#advertising-collapse-${index}`}
                                        aria-expanded="false"
                                        aria-controls={`advertising-collapse-${index}`}
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={`advertising-collapse-${index}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`advertising-heading-${index}`}
                                    data-bs-parent="#advertisingAccordion"
                                >
                                    <div className="accordion-body"><div dangerouslySetInnerHTML={{ __html: item.answer }} />
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
    )
}

export default Faq