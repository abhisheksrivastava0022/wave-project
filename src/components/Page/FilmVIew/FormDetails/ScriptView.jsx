import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const ScriptView = ({
  film,
  // segment,
  // videography,
  // formatType,
  // formatStageType,
}) => {
  const type2Document = film.FilmDocuments.find((doc) => doc.type === 8);

  return (
    <>
      {film ? (
        <>
          <Grid container spacing={2}>
            <Grid item md={2}>
              {type2Document ? (
                <img
                  src={`${dataurl}/file/read/${type2Document.url}`}
                  alt={type2Document.name || "Film document"}
                  className="document-image"
                  loading="lazy"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              ) : (
                <></>
              )}
            </Grid>

            <Grid item md={10}>
              <div className="view-heading">
                <h6>Basic Information</h6>
              </div>
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Videography :</th>
                      {/* <td>{Videography}</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
            <Grid item md={12}>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {film.language && (
                      <tr>
                        <th scope="row">Original Language :</th>
                        {/* <td>{getLanguageNames(film.language)}</td> */}
                      </tr>
                    )}
                    {film.series_logline && (
                      <tr>
                        <th scope="row">Series Logline :</th>
                        <td>{film.series_logline}</td>
                      </tr>
                    )}
                    {film.synopsis && (
                      <tr>
                        <th scope="row">Synopsis :</th>
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
              </div>
            </Grid>
            <Grid item md={12}>
              <h6>Project Information</h6>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {film.english_title && (
                      <tr>
                        <th scope="row">English Title :</th>
                        <td>{film.english_title}</td>
                      </tr>
                    )}
                    {film.language && (
                      <tr>
                        <th scope="row">Original Language :</th>
                        {/* <td>{getLanguageNames(film.language)}</td> */}
                      </tr>
                    )}
                    {film.series_logline && (
                      <tr>
                        <th scope="row">Series Logline :</th>
                        <td>{film.series_logline}</td>
                      </tr>
                    )}
                    {film.synopsis && (
                      <tr>
                        <th scope="row">Synopsis :</th>
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
              </div>
            </Grid>
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default ScriptView;
