import React from 'react'
import defaultimg from '../../assets/img/project.png';
import WavesLogo from "../../assets/img/Waves.png";
import NFDCLogo from "../../assets/img/NFDC.png"

const Home = () => {
    return (
        <>

            <div className="container">
                <div className="container">
                    <div className="top-logo">
                        <ul>
                            <li className="logo-left">
                                <a href="/">
                                    <img src={WavesLogo} alt="" /></a>
                                <a href="https://www.nfdcindia.com/" target="blank">
                                    <img src={NFDCLogo} alt="" />
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="innerpage mt-3">
                    <div className="row">

                        <div className="col-md-12 col-sm-12">
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Basic Information</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 mb-4 css-isbt42">
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0">
                                                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root form-control css-1vbfw84">
                                                        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1niro10" data-shrink="true" for=":r0:" id=":r0:-label"><span>Enter title name<span> *</span></span></label>
                                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-xhkvgb">
                                                            <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-5v2ak0">
                                                                <legend className="css-w1u3ce"><span><span>Enter title name<span > *</span></span></span></legend>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42">
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0">
                                                    <div className="MuiFormControl-root MuiFormControl-fullWidth css-17qa0m8">
                                                        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-160rfsr" data-shrink="false" id="category-label">Select Segment <span> *</span></label>
                                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-98ra8i">
                                                            <div tabindex="0" role="combobox" aria-controls=":r1:" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="category-label mui-component-select-category" id="mui-component-select-category" className="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-mp9f0v"><span className="notranslate">&ZeroWidthSpace;</span></div>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1l3b12y" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                                <path d="M7 10l5 5 5-5z"></path>
                                                            </svg>
                                                            <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-5v2ak0">
                                                                <legend className="css-w4cd9x"><span className="notranslate">&ZeroWidthSpace;</span></legend>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer"><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button><button type="button" className="btn btn-primary">Continue</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-title">
                                <h2>My Projects</h2>
                               
                            </div>
                            <div className="shadow-sm white-bg mb-3">
                                <div className="user-list">
                                    <ul>
                                        <li>
                                            <div><img src="https://wavesbazaar.com/api/waves-seller/file/read/1736413592519_9509098.png" alt="703016_1722519935.png" className="project-img" /></div>
                                            <div className="text-notification">
                                                <h4>test title</h4>
                                                <ul className="discription-data">
                                                    <li>Film</li>
                                                    <li>Live Shoot</li>
                                                    <li>Featured</li>
                                                    <li>Film Ready For Distribution</li>
                                                    <li>India</li>
                                                    <li>English, Gujarati</li>
                                                    <li>Action, Arts, Music and Culture, Drama, Mystery, Thriller</li>
                                                    <li>6 min</li>
                                                </ul>
                                                <ul className="link-details mt-3">
                                                    <li><a className="" href="/wave-seller/project/view/663">View Details</a></li>
                                                    <li><a className="btn border-radius pending" href="/wave-seller/project/663">Edit</a></li>
                                                    <li><button className="btn border-radius makeactive">Click to active</button></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="shadow-sm white-bg mb-3">
                                <div className="user-list">
                                    <ul>
                                        <li>
                                            <div>
                                                <img src={defaultimg} alt="user" className="project-img" /></div>
                                            <div className="text-notification">
                                                <h4>Ff</h4>
                                                <ul className="discription-data">
                                                    <li>TV</li>
                                                </ul>
                                                <ul className="link-details mt-3">
                                                    <li><a className="" href="/wave-seller/wave-project/view/653">View Details</a></li>
                                                    <li><a className="btn border-radius pending" href="/wave-seller/wave-project/653">Edit</a></li>
                                                    <li><button className="btn border-radius delete">Delete</button></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home