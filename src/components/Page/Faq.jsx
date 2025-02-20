
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
        }
    ];

    return (
        <>

            <div className='container  mb-5'>
                <h3 className='text-center mb-5'>Frequently Asked Questions</h3>
                <div className='card'>
                    <div class="accordion " id="accordionPanelsStayOpenExample">
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
            </div>
        </>
    )
}

export default Faq