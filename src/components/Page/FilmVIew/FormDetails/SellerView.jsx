import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import defaultimg from "../../assets/img/default.jpg";
import { fetchCountries, fetchLanguage } from "../../store/actions/filmActions";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Table,
  TableBody,
  TableCell,
  Box,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputLabel,
  Select,
} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import logo from "../../assets/img/filmbazaar.png";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const SellerView = ({ loadFormatTypes }) => {
  const dispatch = useDispatch();
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false); // State for managing loader
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(0);


  const countries = useSelector((state) => state.films.countries.data);
  const languages = useSelector((state) => state.languages.data);
  const types = useSelector((state) => state.types.data);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchLanguage());
  }, [dispatch]);
  const [checkConnection, setCheckconnection] = useState(null);
  useEffect(() => {
    const fetchBuyerDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/film/seller/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch film data");
        }
        const data = await response.json();
        // console.log("Fetched film data:", data); // Log entire response data for inspection

        // Check if the `data` object has the `data` property
        if (data && data.data) {
          // console.log("Film data exists:", data.data);
          setCheckconnection(data.checkconnection);
          setShowDetails(data.checkconnection)
          setFilm([data.data]); // Wrap the `data.data` in an array if it's a single object
        } else {
          console.warn("Film data is missing in the response");
          setFilm([]); // Handle case where no data is available
        }
      } catch (error) {
        console.error("Error fetching film data:", error);
        setError(error.message);
        setFilm([]); // Clear film data on error
      } finally {
        setLoading(false);
      }
    };

    fetchBuyerDetails();
  }, [id]);
  const [formDataDetails, setFormDataDetails] = useState([]);
  const [formatTypes, setFormatTypes] = useState([]);
  const [stageTypes, setStageTypes] = useState([]);

  // console.log("video", formDataDetails.data);
  const dataurl = import.meta.env.VITE_API_BASE_URL;

  // useEffect(() => {
  //   const fetchVideographyTypes = async () => {
  //     try {
  //       const response = await fetch(`${dataurl}/site/videography-type`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       });
  //       const result = await response.json();
  //       if (result.status) {
  //         setFormDataDetails(result.data);
  //       } else {
  //         console.error("Error: ", result.message);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching videography types:", error);
  //     }
  //   };
  //   fetchVideographyTypes();
  // }, []);

  // useEffect(() => {
  //   const loadFormatTypes = async () => {
  //     try {
  //       const response = await fetch(`${dataurl}/site/format-type`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       });
  //       const result = await response.json();
  //       if (result.status) {
  //         setFormatTypes(result.data);
  //       } else {
  //         console.error("Error: ", result.message);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching format types:", error);
  //     }
  //   };
  //   loadFormatTypes();
  // }, []);

  // useEffect(() => {
  //   const loadStageTypes = async () => {
  //     try {
  //       const response = await fetch(`${dataurl}/site/stage-type`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       });
  //       const result = await response.json();
  //       if (result.status) {
  //         setStageTypes(result.data);
  //       } else {
  //         console.error("Error: ", result.message);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching stage types:", error);
  //     }
  //   };
  //   loadStageTypes();
  // }, []);

  const [genreOptions, setGenreOptions] = useState([]); // Store genres from API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${BASE_URL}/site/genre`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON

        if (result.status && Array.isArray(result.data)) {
          setGenreOptions(result.data); // Use genres from response data
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const getCountryNames = (countryId) => {
    const country = countries?.find((c) => c.id === countryId); // Find the country with the matching ID
    return country ? country.name : ""; // Return the country name or a default value
  };

  const [companyTypes, setCompanyTypes] = useState([]);
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
  const getCompanyTypeNames = (compnayId) => {
    const company = companyTypes?.find((c) => c.id === compnayId);
    return company ? company.name : "";
  };

  const [segmentTypes, setSegmentTypes] = useState([]);
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


  // const showDetails = false;
  return (
    <>
      {loading && <Loader />}
      {!film || film.length === 0 ? (
        <p></p>
      ) : (
        <>
          <div className="container">
            <Header />
            <div className="innerpage mt-3">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <Sidebar />
                </div>

                <div className="col-md-9 col-sm-9">
                  <div className="page-title">
                    <h2>Seller Profile Detail</h2>
                  </div>

                  <TableContainer component={Paper}>
                    <Table
                    // sx={{ minWidth: 650 }}
                    // aria-label="caption table"
                    // className="table table-bordered"
                    >
                      {film.map((buyer, index) => (
                        <TableRow className="form-white" key={index}>
                          <TableCell
                          // align="center"
                          // colSpan={10}
                          // className="form-white"
                          >
                            <div className="row g-0  overflow-hidden flex-md-row mb-4  h-md-250  position-relative">
                              <div className="col-auto d-lg-block">
                                {buyer.profile_img && buyer.profile_img.url ? (
                                  <img
                                    src={`${BASE_URL}/file/read/${buyer.profile_img.url}`}
                                    alt={buyer.profile_img.name}
                                    style={{ width: "120px", height: "120px" }}
                                  />
                                ) : (
                                  <img
                                    src={defaultimg}
                                    alt="user"
                                    style={{ width: "120px", height: "120px" }}
                                  />
                                )}
                              </div>
                              <div className="col p-4 d-flex flex-column position-static pt-0">
                                {/* <h3 className="d-inline-block mb-2 text-primary-emphasis font-18"> */}
                                <h3 className="d-inline-block mb-2 view-name">
                                  {buyer.first_name}{" "}
                                </h3>
                                <div className="mb-1 text-body-secondary">
                                  {" "}
                                  <strong>First Name :</strong>{" "}
                                  {buyer.first_name}
                                </div>
                                <div className="mb-1 text-body-secondary">
                                  {" "}
                                  <strong>Last Name :</strong> {buyer.last_name}
                                </div>
                                <div className="mb-1 text-body-secondary">
                                  {" "}
                                  <strong>Job Title :</strong>{" "}
                                  {buyer.job_profile}
                                </div>
                              </div>
                              <div>
                                {/* <div className="list-group-item active header-title-bg mt-4 mb-4">
                                  <div className="d-flex align-items-center justify-content-start w-100">
                                    <h6 className="seller-heading">About Us</h6>
                                  </div>
                                </div>


                              
                                  <Grid item xs={12}>
                                    <div className="table-responsive">
                                      <table className="table table-striped table-list-view">
                                        <tbody>
                                          <tr>
                                            <td>{buyer.about_us}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </Grid> */}

                                {buyer.about_us && (
                                  <>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                      <div className="list-group-item active header-title-bg mt-4 mb-4">
                                        <div className="d-flex align-items-center justify-content-start w-100">
                                          <h6 className="seller-heading">About Us</h6>
                                        </div>
                                      </div>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                      <div className="table-responsive">
                                        <table className="table table-striped table-list-view">
                                          <tbody>
                                            <tr>
                                              <td>{buyer.about_us}</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </Grid>
                                  </>
                                )}

                              </div>
                              <div>
                                <div className="list-group-item active header-title-bg mt-4 mb-4">
                                  <div className="d-flex align-items-center justify-content-start w-100">
                                    <h6 className="seller-heading">
                                      Contact Information
                                    </h6>
                                  </div>
                                </div>

                                {showDetails ? (<Grid item xs={12}>
                                  <div className="table-responsive">
                                    <table className="table table-striped table-list-view">
                                      <tbody>
                                        <tr>
                                          <th scope="row">Phone No :</th>
                                          <td> {buyer.phone_number}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Email :</th>
                                          <td> {buyer.email}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </Grid>) : (
                                  <div className="showblurbox">
                                    <div className="showblur"></div>
                                    <p className="showblurtext">
                                      This section will be available once the
                                      connection is build.
                                    </p>
                                  </div>
                                )}







                              </div>
                              <div>

                                <div className="list-group-item active header-title-bg mt-4 mb-4">
                                  <div className="d-flex align-items-center justify-content-start w-100">
                                    <h6 className="seller-heading">Address</h6>
                                  </div>
                                </div>
                                {showDetails ? (
                                  <Grid item xs={12}>
                                    <div className="table-responsive">
                                      <table className="table table-striped table-list-view">
                                        <tbody>
                                          <tr>
                                            <th scope="row">Address :</th>
                                            <td> {buyer.address}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row"> City :</th>
                                            <td> {buyer.city}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row"> Country :</th>
                                            <td>
                                              {" "}
                                              {getCountryNames(
                                                buyer.country_id
                                              )}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </Grid>
                                ) : (
                                  <div className="showblurbox">
                                    <div className="showblur"></div>
                                    <p className="showblurtext">
                                      This section will be available once the
                                      connection is build.
                                    </p>
                                  </div>
                                )}
                              </div>
                              <div>

                                {/* <div className="list-group-item active header-title-bg mt-4 mb-4">
                                  <div className="d-flex align-items-center justify-content-start w-100">
                                    <h6 className="seller-heading">
                                      Company Information
                                    </h6>
                                  </div>
                                </div>
                               
                                  <Grid item xs={12}>
                                    <div className="table-responsive">
                                      <table className="table table-striped table-list-view">
                                        <tbody>
                                          <tr>
                                            <th scope="row"> Company Name :</th>
                                            <td>{buyer.company}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">
                                              {" "}
                                              Company Profile :
                                            </th>
                                            <td>{buyer.company_profile}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row"> Company type :</th>
                                            <td>
                                              {getCompanyTypeNames(
                                                buyer.company_type
                                              )}
                                            </td>
                                          </tr>
                                          <tr>
                                            <th scope="row">
                                              Company Registration Number/Tax ID
                                              :
                                            </th>
                                            <td>{buyer.registration_number}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">
                                              Registered Address :
                                            </th>
                                            <td>{buyer.registered_address}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">
                                              Existing
                                              collaborations/partnerships :
                                            </th>
                                            <td>{buyer.collaborations}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">
                                              {" "}
                                              Intial funding :
                                            </th>
                                            <td>{buyer.funding}</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">
                                              {" "}
                                              Current geographies :
                                            </th>
                                            <td>{buyer.geographies}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </Grid> */}

                                {(buyer.company ||
                                  buyer.company_profile ||
                                  buyer.company_type ||
                                  buyer.registration_number ||
                                  buyer.registered_address ||
                                  buyer.collaborations ||
                                  buyer.funding ||
                                  buyer.geographies) && (
                                    <>
                                      <div className="list-group-item active header-title-bg mt-4 mb-4">
                                        <div className="d-flex align-items-center justify-content-start w-100">
                                          <h6 className="seller-heading">Company Information</h6>
                                        </div>
                                      </div>

                                      <Grid item xs={12}>
                                        <div className="table-responsive">
                                          <table className="table table-striped table-list-view">
                                            <tbody>
                                              {buyer.company && (
                                                <tr>
                                                  <th scope="row">Company Name :</th>
                                                  <td>{buyer.company}</td>
                                                </tr>
                                              )}
                                              {buyer.company_profile && (
                                                <tr>
                                                  <th scope="row">Company Profile :</th>
                                                  <td>{buyer.company_profile}</td>
                                                </tr>
                                              )}
                                              {buyer.company_type && (
                                                <tr>
                                                  <th scope="row">Company Type :</th>
                                                  <td>{getCompanyTypeNames(buyer.company_type)}</td>
                                                </tr>
                                              )}
                                              {buyer.registration_number && (
                                                <tr>
                                                  <th scope="row">Company Registration Number/Tax ID :</th>
                                                  <td>{buyer.registration_number}</td>
                                                </tr>
                                              )}
                                              {buyer.registered_address && (
                                                <tr>
                                                  <th scope="row">Registered Address :</th>
                                                  <td>{buyer.registered_address}</td>
                                                </tr>
                                              )}
                                              {buyer.collaborations && (
                                                <tr>
                                                  <th scope="row">Existing Collaborations/Partnerships :</th>
                                                  <td>{buyer.collaborations}</td>
                                                </tr>
                                              )}
                                              {buyer.funding && (
                                                <tr>
                                                  <th scope="row">Initial Funding :</th>
                                                  <td>{buyer.funding}</td>
                                                </tr>
                                              )}
                                              {buyer.geographies && (
                                                <tr>
                                                  <th scope="row">Current Geographies :</th>
                                                  <td>{buyer.geographies}</td>
                                                </tr>
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </Grid>
                                    </>
                                  )}


                              </div>
                              <div>
                                <div className="list-group-item active header-title-bg mt-4 mb-4">
                                  <div className="d-flex align-items-center justify-content-start w-100">
                                    <h6 className="seller-heading">
                                      Selected Sector
                                    </h6>
                                  </div>
                                </div>

                                <Grid item xs={12}>
                                  <div className="table-responsive">
                                    <table className="table table-striped table-list-view">
                                      <tbody>
                                        <tr>

                                          <td>
                                            {getSegmentTypeNames(
                                              buyer.sectors
                                            )}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </Grid>

                              </div>

                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default SellerView;
