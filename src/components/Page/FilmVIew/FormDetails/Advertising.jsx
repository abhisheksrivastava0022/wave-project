import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const Advertising = ({
  film,
  countryName,
  languageName,
  segment,
  videography,
  formatStageType,
}) => {
  const type2Document = film?.FilmDocuments.find((doc) => doc.type === 8);

  const fetchBy = (array, key, value) => {
    const data = array.find((item) => item["id"] == value) || null;
    if (data) {
      return data["name"];
    }
  };

  const advertisingOptions = [
    { value: "", label: "--Select an option--" },
    { value: "1", label: "Print Media" },
    { value: "2", label: "Internet Advertising" },
    { value: "3", label: "Out of Home Media" },
  ];

  const fetchByadvertisingOptions = (array, key, value) => {
    const data = array.find((item) => item[key] == value) || null;
    return data ? data["label"] : null;
  };
  const periodiCity = [
    { id: 1, name: "Daily" },
    { id: 2, name: "Weekly" },
    { id: 3, name: "Monthly" },
    { id: 4, name: "Bi-Monthly" },
    { id: 5, name: "Quarterly" },
    { id: 6, name: "Other" },
  ];

  return (
    <>
      {film ? (
        <>
          <Grid container spacing={2}>
            <Grid item md={3}>
              {type2Document ? (
                <img
                  src={`${dataurl}/file/read/${type2Document.url}`}
                  alt={type2Document?.name || "Film document"}
                  className="document-image"
                  loading="lazy"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              ) : (
                <>
                  <img
                    src={`/img/category_${film?.category}.jpg`}
                    alt={type2Document?.name || "Film document"}
                    className="document-image"
                    loading="lazy"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </>
              )}
            </Grid>

            <Grid item md={9}>
              <div className="view-heading">
                <h6>Basic Information </h6>
              </div>

              <table className="table table-striped table-sm">
                <tbody>
                  {film?.title && (
                    <tr>
                      <th scope="row">Title name :</th>
                      <td>{film?.title}</td>
                    </tr>
                  )}
                  {segment && (
                    <tr>
                      <th scope="row">Segment Type :</th>
                      <td>{segment}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Grid>

            <Grid item md={12}>
              <div className="view-heading">
                <h6>Project Information </h6>
              </div>

              <table className="table table-striped table-sm">
                <tbody>
                  {film?.other_details?.advertising_type && (
                    <tr>
                      <th scope="row">Type of Advertising :</th>
                      <td>
                        {fetchByadvertisingOptions(
                          advertisingOptions,
                          "value",
                          film?.other_details?.advertising_type
                        )}
                      </td>
                    </tr>
                  )}

                  {film?.other_details?.advertising_type == 1 ? (
                    <>
                      {film?.other_details?.name_of_publication && (
                        <tr>
                          <th scope="row">Name of Publication :</th>
                          <td> {film?.other_details?.name_of_publication}</td>
                        </tr>
                      )}

                      {film?.other_details?.language && (
                        <tr>
                          <th scope="row">Language :</th>
                          <td> {film?.other_details?.language}</td>
                        </tr>
                      )}
                      {/* {film?.other_details && (
                        <tr>
                          <th scope="row">Country :</th>
                          <td>{countryName}</td>
                        </tr>
                      )} */}

                      {/* {film?.other_details?.location_of_publication &&
                        film?.other_details?.country !== 75 && (
                          <tr>
                            <th scope="row"> Location of Publication :</th>
                            <td>
                              {film?.other_details?.location_of_publication}
                            </td>
                          </tr>
                        )} */}

                      {/* {film?.other_details && (
                        <tr>
                          <th scope="row">Location of Publication :</th>
                          <td>{cityName}</td>
                        </tr>
                      )} */}

                      {film?.other_details?.reach && (
                        <tr>
                          <th scope="row">Reach :</th>
                          <td> {film?.other_details?.reach}</td>
                        </tr>
                      )}

                      {film?.other_details?.periodicity && (
                        <tr>
                          <th scope="row">Periodicity :</th>
                          <td>
                            {
                              film?.other_details?.periodicity !== 6
                                ? fetchBy(
                                    periodiCity,
                                    "name",
                                    film?.other_details?.periodicity
                                  ) // Normal selection
                                : `Other: ${
                                    film?.other_details?.please_specify ||
                                    "Not specified"
                                  }` // Append user input for "Other"
                            }
                          </td>
                        </tr>
                      )}

                      {film?.other_details?.publication_portfolio && (
                        <tr>
                          <th scope="row">Editions :</th>
                          <td> {film?.other_details?.publication_portfolio}</td>
                        </tr>
                      )}

                      {film?.other_details?.link_to_showreel && (
                        <tr>
                          <th scope="row">
                            {" "}
                            Link to Showreel (if available) :
                          </th>
                          <td> {film?.other_details?.link_to_showreel}</td>
                        </tr>
                      )}

                      {film?.other_details?.other_project_link && (
                        <tr>
                          <th scope="row">Other Project Links :</th>
                          <td> {film?.other_details?.other_project_link}</td>
                        </tr>
                      )}
                    </>
                  ) : (
                    <></>
                  )}

                  {film?.other_details?.advertising_type == 2 ? (
                    <>
                      {film?.other_details?.name_of_company && (
                        <tr>
                          <th scope="row">Name of Company:</th>
                          <td> {film?.other_details?.name_of_company}</td>
                        </tr>
                      )}
                      {film?.other_details?.company_portfolio && (
                        <tr>
                          <th scope="row">About The Company :</th>
                          <td> {film?.other_details?.company_portfolio}</td>
                        </tr>
                      )}
                      {/* {film?.other_details?.campaigns_offered && (
                        <tr>
                          <th scope="row">Types of Campaigns Offered :</th>

                          <td>
                            {getCampaignsOffered(
                              film?.other_details?.campaigns_offered
                            )}
                          </td>
                        </tr>
                      )} */}
                    </>
                  ) : (
                    <></>
                  )}

                  {film?.other_details?.advertising_type == 3 ? (
                    <>
                      {film?.other_details?.ooh_company && (
                        <tr>
                          <th scope="row"> Name of OOH Company :</th>
                          <td> {film?.other_details?.ooh_company}</td>
                        </tr>
                      )}
                      {/* {film?.other_details && (
                        <tr>
                          <th scope="row">Country:</th>
                          <td>{countryName}</td>
                        </tr>
                      )} */}
                      {film?.other_details?.service_location &&
                        film?.other_details?.country !== 75 && (
                          <tr>
                            <th scope="row">Services Location :</th>
                            <td>{film?.other_details?.service_location}</td>
                          </tr>
                        )}

                      {/* {film?.other_details?.city &&
                        film?.other_details?.city.length > 0 && (
                          <tr>
                            <th scope="row">Services Location :</th>
                            <td>{getCityNames(film?.other_details?.city)}</td>
                          </tr>
                        )} */}

                      {/* {film?.other_details?.type_of_services && (
                        <tr>
                          <th scope="row">Type of Services :</th>
                          <td>
                            {getServices(film?.other_details?.type_of_services)}
                          </td>
                        </tr>
                      )} */}
                      {film?.other_details?.type_of_services?.includes(9) && (
                        <>
                          <tr>
                            <th scope="row">Please Specify :</th>
                            <td>
                              {" "}
                              {film?.other_details?.please_specify_services}
                            </td>
                          </tr>
                        </>
                      )}
                      {film?.other_details?.additional_campaign_details && (
                        <tr>
                          <th scope="row">Additional Campaign Details :</th>

                          <td>
                            {film?.other_details?.additional_campaign_details}
                          </td>
                        </tr>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </Grid>
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default Advertising;
