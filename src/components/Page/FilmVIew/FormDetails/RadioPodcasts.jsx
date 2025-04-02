import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const RadioPodcasts = ({
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

  const stageTypes = [
    { id: 1, name: "Work In Progress" },
    { id: 2, name: "Completed" },
  ];
  const contentOriginal = [
    { id: 1, name: "Original Content" },
    { id: 2, name: "Adapted Content" },
    { id: 3, name: "Public Domain" },
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
                  alt={type2Document.name || "Film document"}
                  className="document-image"
                  loading="lazy"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              ) : (
                <>
                  <img
                    src={`/img/category_${film.category}.jpg`}
                    alt={type2Document.name || "Film document"}
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
                  {segment && (
                    <tr>
                      <th scope="row">Segment Type :</th>
                      <td>{segment}</td>
                    </tr>
                  )}

                  {film.other_details && (
                    <tr>
                      <th scope="row">Stage :</th>
                      <td>
                        {fetchBy(
                          stageTypes,
                          "name",
                          film.other_details.type_stage
                        )}
                      </td>
                    </tr>
                  )}
                  {film.other_details.expected_date && (
                    <tr>
                      <th scope="row">Expected date :</th>

                      <td> {film.other_details.expected_date}</td>
                    </tr>
                  )}

                  {countryName && (
                    <tr>
                      <th scope="row">Countries of Production :</th>
                      <td>{countryName}</td>
                    </tr>
                  )}
                  {languageName && (
                    <tr>
                      <th scope="row">Language :</th>
                      <td>{languageName}</td>
                    </tr>
                  )}
                  {film?.other_details.type_of_content && (
                    <tr>
                      <th scope="row">Type of Content :</th>
                      <td> {film.other_details.type_of_content}</td>
                    </tr>
                  )}
                  {film.other_details && (
                    <tr>
                      <th scope="row">Content Original :</th>
                      <td>
                        {fetchBy(
                          contentOriginal,
                          "name",
                          film.other_details.content_original
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
                  {film.other_details.synopsis_of_content && (
                    <tr>
                      <th scope="row">Synopsis of Content :</th>
                      <td>{film.other_details.synopsis_of_content}</td>
                    </tr>
                  )}
                  {film.other_details.creator_notes && (
                    <tr>
                      <th scope="row">Creator's Note :</th>
                      <td>{film.other_details.creator_notes}</td>
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

export default RadioPodcasts;
