import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const AnimationVFX = ({
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

  const categoryType = [
    { id: 1, name: "Animation" },
    { id: 2, name: "VFX" },
  ];
  const animationExpertise = [
    { id: 1, name: "2D" },
    { id: 2, name: "3D" },
    { id: 3, name: "Others" },
  ];
  const expertise = [
    { id: 1, name: "Creature FX" },
    { id: 2, name: "Crowd FX" },
    { id: 3, name: "Set Extensions" },
    { id: 4, name: "World Building" },
    { id: 5, name: "Virtual Production" },
    { id: 6, name: "Others" },
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

                  {film?.other_details?.category_type && (
                    <tr>
                      <th scope="row">Category :</th>
                      <td>
                        {" "}
                        {fetchBy(
                          categoryType,
                          "name",
                          film?.other_details?.category_type
                        )}
                      </td>
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
                  {film?.other_details?.category_type === 1 ? (
                    <>
                      {film?.other_details?.animation_expertise_select?.length >
                        0 && (
                        <tr>
                          <th scope="row">Select the expertise :</th>
                          <td>
                            {film.other_details.animation_expertise_select
                              .map(
                                (id) =>
                                  id === 3
                                    ? `Other: ${
                                        film.other_details
                                          .please_specify_animation_expertise_select ||
                                        "Not specified"
                                      }`
                                    : fetchBy(animationExpertise, "name", id) // Corrected variable name
                              )
                              .sort((a, b) => (a.startsWith("Other:") ? 1 : -1)) // Fixed sorting logic
                              .join(", ")}
                          </td>
                        </tr>
                      )}
                    </>
                  ) : film?.other_details?.category_type === 2 ? (
                    <>
                      {film?.other_details?.expertise_select?.length > 0 && (
                        <tr>
                          <th scope="row">
                            Select the expertise (Select 2 Minimum) :
                          </th>
                          <td>
                            {film.other_details.expertise_select
                              .map(
                                (id) =>
                                  id === 6
                                    ? `Other: ${
                                        film.other_details
                                          .please_specify_expertise_select ||
                                        "Not specified"
                                      }`
                                    : fetchBy(expertise, "name", id) // Corrected variable name
                              )
                              .sort((a, b) => (a.startsWith("Other:") ? 1 : -1)) // Fixed sorting logic
                              .join(", ")}
                          </td>
                        </tr>
                      )}
                    </>
                  ) : (
                    <></>
                  )}

                  {/* {film.synopsis && (
                    <tr>
                      <th scope="row">Synopsis of Content :</th>
                      <td>{film.synopsis}</td>
                    </tr>
                  )}
                  {film.director_comment && (
                    <tr>
                      <th scope="row">Creator's Note:</th>
                      <td>{film.director_comment}</td>
                    </tr>
                  )}
                  {film?.other_details?.unique_selling && (
                    <tr>
                      <th scope="row">Synopsis of Content :</th>
                      <td>{film?.other_details?.unique_selling}</td>
                    </tr>
                  )} */}
                </tbody>
              </table>
            </Grid>
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default AnimationVFX;
