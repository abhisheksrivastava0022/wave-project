import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const LiveEvent = ({
  film,
  countryName,
  languageName,
  segment,
  videography,
  formatStageType,
}) => {
  const type2Document = film.FilmDocuments.find((doc) => doc.type === 8);

  const fetchBy = (array, key, value) => {
    const data = array.find((item) => item["id"] == value) || null;
    if (data) {
      return data["name"];
    }
  };

  const designationRole = [
    { id: 1, name: "Event Organizer" },
    { id: 2, name: "Planner" },
  ];

  const eventTypes = [
    { id: 1, name: "Concert" },
    { id: 2, name: "Conference" },
    { id: 3, name: "Fashion show" },
    { id: 4, name: "Sports" },
    { id: 5, name: "Product launch" },
    { id: 6, name: "Other" },
  ];
  const venueArrangement = [
    { id: 1, name: "Indoor" },
    { id: 2, name: "Outdoor" },
    { id: 3, name: "Hybrid" },
    { id: 4, name: "Virtual" },
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
                    src={`/img/category_${film.category}.jpg`}
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
                  {film.title && (
                    <tr>
                      <th scope="row">Title name :</th>
                      <td>{film.title}</td>
                    </tr>
                  )}
                  {segment && (
                    <tr>
                      <th scope="row">Segment Type :</th>
                      <td>{segment}</td>
                    </tr>
                  )}
                  {film?.other_details.company && (
                    <tr>
                      <th scope="row">Company / Individual Name :</th>
                      <td>{film?.other_details.company}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Grid>

            <Grid item md={12}>
              <div className="view-heading">
                <h6>Event information</h6>
              </div>

              <table className="table table-striped table-sm">
                <tbody>
                  {film?.other_details?.designation_role && (
                    <tr>
                      <th scope="row">Designation/Role :</th>

                      <td>
                        {" "}
                        {fetchBy(
                          designationRole,
                          "name",
                          film?.other_details?.designation_role
                        )}
                      </td>
                    </tr>
                  )}

                  {film?.other_details?.website && (
                    <tr>
                      <th scope="row">Website :</th>

                      <td> {film?.other_details?.website}</td>
                    </tr>
                  )}

                  {film?.other_details?.facebook && (
                    <tr>
                      <th scope="row">Facebook :</th>

                      <td> {film?.other_details?.facebook}</td>
                    </tr>
                  )}

                  {film?.other_details?.instagram && (
                    <tr>
                      <th scope="row">Instagram :</th>

                      <td> {film?.other_details?.instagram}</td>
                    </tr>
                  )}

                  {film?.other_details?.twitter && (
                    <tr>
                      <th scope="row">Twitter :</th>

                      <td> {film?.other_details?.twitter}</td>
                    </tr>
                  )}

                  {film?.other_details?.linkedin && (
                    <tr>
                      <th scope="row">Linkedin :</th>

                      <td> {film?.other_details?.linkedin}</td>
                    </tr>
                  )}

                  {film?.other_details?.social_media && (
                    <tr>
                      <th scope="row">Other Social media profiles :</th>

                      <td> {film?.other_details?.social_media}</td>
                    </tr>
                  )}

                  {film?.other_details?.event_type?.length > 0 && (
                    <tr>
                      <th scope="row">Event Type :</th>
                      <td>
                        {film.other_details.event_type
                          .map(
                            (id) =>
                              id === 6
                                ? `Other: ${
                                    film.other_details
                                      .please_specify_event_type ||
                                    "Not specified"
                                  }`
                                : fetchBy(eventTypes, "name", id) // Corrected variable name
                          )
                          .sort((a, b) => (a.startsWith("Other:") ? 1 : -1)) // Fixed sorting logic
                          .join(", ")}
                      </td>
                    </tr>
                  )}
                  {film?.other_details?.venue_arrangement && (
                    <tr>
                      <th scope="row">Venue Arrangement :</th>
                      <td>
                        {film.other_details.venue_arrangement
                          .map((id) => fetchBy(venueArrangement, "name", id)) // Fetch names for all IDs
                          .join(", ")}{" "}
                        {/* Join with a comma */}
                      </td>
                    </tr>
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

export default LiveEvent;
