import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <button
                className="btn btn-menu"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
            >
                <img
                    src="https://www.iffigoa.org/public/images/menu.svg"
                    alt="Menu"
                    className="menu-link"
                />
                Menu
            </button>
            <div
                className="offcanvas offcanvas-end text-bg-dark"
                style={{ background: "#5F259E!important" }}
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
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
                            <a href="https://wavesbazaar.com/wave-seller/login">
                                Seller Login
                            </a>
                        </li>
                        <li>
                            <a href="https://wavesbazaar.com/waves-buyer/login">
                                Buyer Login
                            </a>
                        </li>

                        <li>
                            <a href="https://wavesbazaar.com/project">
                                Explore Projects
                            </a>
                        </li>
                        {/* <li><a href="https://wavesbazaar.com/project">Download</a></li> */}
                        <li>
                            <Link to="/download">Downloads</Link>
                        </li>
                        <li>
                            <Link to="/featured-companies">Featured Companies</Link>
                        </li>

                        <li>
                            <a
                                href="https://wavesindia.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WAVES India
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header