import React, { useEffect, useState } from "react";
import defaultimg from "../../assets/img/default.jpg";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Alert, Grid, Snackbar } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  postFilm,
  patchFilm,
  fetchCountries,
  fetchLanguage,
  fetchType,
  fetchPrintFormat,
  fetchRatioFormat,
  fetchSoundFormat,
  uploadFileAction,
  createContactForFilm,
  fetchContactData,
} from "../../store/actions/filmActions"; // Assuming patchFilm is the action for the PATCH request
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ViewProfile = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [companyTypes, setCompanyTypes] = useState([]);
  const [segmentTypes, setSegmentTypes] = useState([]);
  const countries = useSelector((state) => state.films.countries.data); // Assuming you have this in your reducer

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchLanguage());
  }, [dispatch]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/film/maker`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensures cookies are sent with the request if needed
        });

        setSeller(response.data.data); // Adjust based on actual response structure
        // console.log("test amar details", response.data.data);
      } catch (err) {
        console.error("Error fetching film data:", err); // Use err instead of error
      } finally {
        // Optional: You can add any cleanup or final steps here
      }
    };

    fetchUserDetails();
  }, [id]);

  useEffect(() => {
    const loadCompanyTypes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/site/company_type`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const result = await response.json();
        if (result.status) {
          setCompanyTypes(result.data);
        } else {
          console.error("Error: ", result.message);
        }
      } catch (error) {
        console.error("Error fetching stage types:", error);
      }
    };
    loadCompanyTypes();
  }, []);

  useEffect(() => {
    const loadSegmentTypes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/site/segment`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const result = await response.json();
        if (result.status) {
          setSegmentTypes(result.data);
          // console.log("segment", result.data);
        } else {
          console.error("Error: ", result.message);
        }
      } catch (error) {
        console.error("Error fetching stage types:", error);
      }
    };
    loadSegmentTypes();
  }, []);

  const getCountryNames = (countryId) => {
    const country = countries?.find((c) => c.id === countryId); // Find the country with the matching ID
    return country ? country.name : ""; // Return the country name or a default value
  };

  const getCompanyTypeNames = (compnayId) => {
    const company = companyTypes?.find((c) => c.id === compnayId);
    return company ? company.name : "";
  };

  const getSegmentTypeNames = (segmentIds) => {
    if (!Array.isArray(segmentIds)) {
      segmentIds = [segmentIds];
    }
    const names = segmentIds.map((segmentId) => {
      const segment = segmentTypes?.find((c) => c.id === segmentId);
      return segment ? segment.name : "";
    });
    return names.filter((name) => name).join(", ");
  };

  const getGeographiesNames = (segmentIds) => {
    if (!Array.isArray(segmentIds)) {
      segmentIds = [segmentIds];
    }
    const names = segmentIds.map((segmentId) => {
      const segment = countries?.find((c) => c.id === segmentId);
      return segment ? segment.name : "";
    });
    return names.filter((name) => name).join(", ");
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="innerpage mt-3">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-sm-9">
              <main>
                <div className="page-title">
                  <h2>View Profile</h2>
                  {/* <h2>
                    View Profile {seller.first_name} {seller.last_name}
                  </h2> */}
                  <div>
                  <Link to={"/edit-personal-information"}>
                    <button className="btn btn-primary btn-yellow">Edit</button>
                  </Link>&nbsp;
                  <Link to={"/my-project"}>
                    <button className="btn btn-primary btn-yellow">
                      View or Create Project
                    </button>
                  </Link>

                  </div>
                  
                </div>
               
                <div className="tab-content1">
                  <div>
                    <div className="shadow-sm white-bg mb-3">
                      <div>
                        <div className="row g-0  overflow-hidden flex-md-row mb-4  h-md-250  position-relative">
                          <div className="col-auto d-lg-block">
                            {seller.profile_img && seller.profile_img.url ? (
                              <img
                                src={`${BASE_URL}/file/read/${seller.profile_img.url}`}
                                alt={seller.profile_img.name}
                                style={{
                                  width: "120px",
                                  height: "120px",
                                  borderRadius: "8px",
                                }}
                              />
                            ) : (
                              <img
                                src={defaultimg}
                                alt="user"
                                style={{
                                  width: "120px",
                                  height: "120px",
                                  borderRadius: "8px",
                                }}
                              />
                            )}
                          </div>
                          <div className="col p-4 d-flex flex-column position-static pt-0">
                            {/* <h3 className="d-inline-block mb-2 text-primary-emphasis font-18"> */}
                            <h3 className="d-inline-block mb-2 view-name">
                              {seller.first_name}{" "}
                            </h3>
                            <div className="mb-1 text-body-secondary">
                              {" "}
                              <strong>First Name :</strong> {seller.first_name}
                            </div>
                            <div className="mb-1 text-body-secondary">
                              {" "}
                              <strong>Last Name :</strong> {seller.last_name}
                            </div>
                            <div className="mb-1 text-body-secondary">
                              {" "}
                              <strong>Job Title :</strong> {seller.job_profile}
                            </div>
                            {/* <div className="mb-1 text-body-secondary">
                              <strong>About Us :</strong> {seller.about_us}
                            </div> */}
                            {/* <div className="mb-1 text-body-secondary">
                              {" "}
                              <strong>Phone No :</strong> {seller.phone_number}
                            </div> */}
                            {/* <div className="mb-1 text-body-secondary">   <strong>Mobile No :</strong> {seller.mobile}</div> */}
                            {/* <div className="mb-1 text-body-secondary">
                              {" "}
                              <strong>Email :</strong> {seller.email}
                            </div> */}
                          </div>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="list-group-item active header-title-bg mt-4 mb-4">
                              <div className="d-flex align-items-center justify-content-start w-100">
                                <h6 className="seller-heading">About Us</h6>
                              </div>
                            </div>
                          </Grid>
                          <div className="table-responsive">
                            <table className="table table-striped table-list-view">
                              <tbody>
                                <tr>
                                  {/* <th scope="row">Bio :</th> */}
                                  <td> {seller.about_us}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="list-group-item active header-title-bg mt-4 mb-4">
                              <div className="d-flex align-items-center justify-content-start w-100">
                                <h6 className="seller-heading">
                                  Contact Information
                                </h6>
                              </div>
                            </div>
                          </Grid>
                          <div className="table-responsive">
                            <table className="table table-striped table-list-view">
                              <tbody>
                                <tr>
                                  <th scope="row">Phone No :</th>
                                  <td> {seller.phone_number}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Email :</th>
                                  <td> {seller.email}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="list-group-item active header-title-bg mt-4 mb-4">
                              <div className="d-flex align-items-center justify-content-start w-100">
                                <h6 className="seller-heading">Address</h6>
                              </div>
                            </div>
                          </Grid>
                          <div className="table-responsive">
                            <table className="table table-striped table-list-view">
                              <tbody>
                                <tr>
                                  <th scope="row">Address :</th>
                                  <td> {seller.address}</td>
                                </tr>
                                <tr>
                                  <th scope="row"> City :</th>
                                  <td> {seller.city}</td>
                                </tr>
                                {/* <tr>
                                                                <th scope="row"> Zip :</th>
                                                                <td>{seller.zip}</td>
                                                            </tr> */}
                                {/* <tr>
                                                                <th scope="row"> State :</th>
                                                                <td>{seller.state}</td>
                                                            </tr> */}
                                <tr>
                                  <th scope="row"> Country :</th>
                                  <td> {getCountryNames(seller.country_id)}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="list-group-item active header-title-bg mt-4 mb-4">
                              <div className="d-flex align-items-center justify-content-start w-100">
                                <h6 className="seller-heading">
                                  Company Information
                                </h6>
                              </div>
                            </div>
                          </Grid>
                          <div className="table-responsive">
                            <table className="table table-striped table-list-view">
                              <tbody>
                                {/* <tr>
                                                                <th scope="row">Profile :</th>
                                                                <td>{seller.about_us}</td>
                                                            </tr> */}
                                <tr>
                                  <th scope="row"> Company Name :</th>
                                  <td>{seller.company}</td>
                                </tr>
                                <tr>
                                  <th scope="row"> Company Profile :</th>
                                  <td>{seller.company_profile}</td>
                                </tr>
                                <tr>
                                  <th scope="row"> Company type :</th>
                                  <td>
                                    {getCompanyTypeNames(seller.company_type)}
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    {" "}
                                    Company Registration Number/Tax ID :
                                  </th>
                                  <td>{seller.registration_number}</td>
                                </tr>
                                <tr>
                                  <th scope="row"> Registered Address :</th>
                                  <td>{seller.registered_address}</td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    {" "}
                                    Existing collaborations/partnerships :
                                  </th>
                                  <td>{seller.collaborations}</td>
                                </tr>
                                <tr>
                                  <th scope="row"> Intial funding :</th>
                                  <td>{seller.funding}</td>
                                </tr>
                                <tr>
                                  <th scope="row"> Current geographies :</th>
                                  <td>
                                    {getGeographiesNames(seller.geographies)}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="list-group-item active header-title-bg mt-4 mb-4">
                              <div className="d-flex align-items-center justify-content-start w-100">
                                <h6 className="seller-heading"> Sector</h6>
                              </div>
                            </div>
                          </Grid>

                          <div className="table-responsive">
                            <table className="table table-striped table-list-view">
                              <tbody>
                                <tr>
                                  <th scope="row">Selected Segment :</th>
                                  <td>{getSegmentTypeNames(seller.sectors)}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="list-group-item active header-title-bg mt-4 mb-4">
                              <div className="d-flex align-items-center justify-content-start w-100">
                                <h6 className="seller-heading">File</h6>
                              </div>
                            </div>
                          </Grid>
                          <div className="table-responsive">
                            <table className="table table-striped table-list-view">
                              <tbody>
                                <tr>
                                  <th scope="row">Upload Identity Proof :</th>
                                  <td>
                                    <a
                                      href={`${BASE_URL}/file/${seller?.file_identity_proof?.url}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      download
                                    >
                                      {seller?.file_identity_proof?.name}
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Upload Government ID :</th>
                                  <td>
                                    <a
                                      href={`${BASE_URL}/file/${seller?.file_government_id?.url}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      download
                                    >
                                      {seller?.file_government_id?.name}
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    Upload Registration File :
                                  </th>
                                  <td>
                                    <a
                                      href={`${BASE_URL}/file/${seller?.file_registration_proof?.url}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      download
                                    >
                                      {seller?.file_registration_proof?.name}
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    Upload Supporting Document :
                                  </th>
                                  <td>
                                    <a
                                      href={`${BASE_URL}/file/${seller?.file_other_document?.url}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      download
                                    >
                                      {seller?.file_other_document?.name}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewProfile;
