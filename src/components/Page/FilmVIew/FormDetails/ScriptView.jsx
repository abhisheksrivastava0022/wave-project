import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const ScriptView = ({
  film,
  segment,
  videography,
  formatType,
  formatStageType,
  languageName,
}) => {
  console.log("Computed Values:", {
    segment,
    videography,
    formatType,
    formatStageType,
    languageName,
  });
  const type2Document = film.FilmDocuments.find((doc) => doc.type === 8);

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
                <h6>Basic Information {film.id}</h6>
              </div>

              <table className="table table-striped table-sm">
                <tbody>
                  {languageName && (
                    <tr>
                      <th scope="row">Languages :</th>
                      <td>{languageName}</td>
                    </tr>
                  )}
                  {videography && (
                    <tr>
                      <th scope="row">Videography :</th>
                      <td>{videography}</td>
                    </tr>
                  )}
                  {segment && (
                    <tr>
                      <th scope="row">Segment :</th>
                      <td>{segment}</td>
                    </tr>
                  )}
                  {formatType && (
                    <tr>
                      <th scope="row">Format Type :</th>
                      <td>{formatType}</td>
                    </tr>
                  )}
                  {formatStageType && (
                    <tr>
                      <th scope="row">Stage Type :</th>
                      <td>{formatStageType}</td>
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
                  {film.english_title && (
                    <tr>
                      <th scope="row">English Title :</th>
                      <td>{film.english_title}</td>
                    </tr>
                  )}

                  {film.series_logline && (
                    <tr>
                      <th scope="row">Series Logline:</th>
                      <td>{film.series_logline}</td>
                    </tr>
                  )}
                  {film.synopsis && (
                    <tr>
                      <th scope="row">Synopsis:</th>
                      <td>{film.synopsis}</td>
                    </tr>
                  )}
                  {film.writer_statement && (
                    <tr>
                      <th scope="row">Writer's Statement :</th>
                      <td>{film.writer_statement}</td>
                    </tr>
                  )}
                  {film.is_direct_your_script !== undefined && (
                    <tr>
                      <th scope="row">Do you want to direct your script?</th>
                      <td>{film.is_direct_your_script ? "Yes" : "No"}</td>
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

export default ScriptView;
