import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const ArVr = ({
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

  const selectSegment = [
    { id: 1, name: "Healthcare (Medical training and patient education)" },
    { id: 2, name: "Retail (Product visualization)" },
    { id: 3, name: "Education(immersive learning experiences)" },
    { id: 4, name: "Manufacturing (design and training)" },
    { id: 5, name: "Real estate (virtual property tours)" },
    { id: 6, name: "Entertainment (Gaming)" },
    { id: 7, name: "Tourism (Virtual Tour, Temple, Museum)" },
  ];
  const selectCategory = [
    { id: 1, name: "AR" },
    { id: 2, name: "VR" },
    { id: 3, name: "XR" },
    { id: 4, name: "MR" },
    { id: 5, name: "VFX" },
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
                </tbody>
              </table>
            </Grid>

            <Grid item md={12}>
              <div className="view-heading">
                <h6>Service information</h6>
              </div>

              <table className="table table-striped table-sm">
                <tbody>
                  {film?.other_details?.select_category && (
                    <tr>
                      <th scope="row">Category :</th>
                      <td>
                        {fetchBy(
                          selectCategory,
                          "name",
                          film?.other_details?.select_category
                        )}
                      </td>
                    </tr>
                  )}
                  {film?.other_details?.select_expertise && (
                    <tr>
                      <th scope="row">Expertise :</th>
                      <td>
                        {fetchBy(
                          selectSegment,
                          "name",
                          film?.other_details?.select_expertise
                        )}
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

export default ArVr;
