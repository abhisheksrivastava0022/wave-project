import { Grid } from "@mui/material";

const CPMFeatureView = ({ film }) => {
  console.log({ film });
  alert("cpm");
  return (
    <>
      {film ? (
        <>
          {film.title ||
          film.language ||
          film.series_logline ||
          film.synopsis ||
          film.writer_statement ||
          film.is_direct_your_script ? (
            <>
              <div className="shadow-sm white-bg mb-3">
                <div className="information-get">
                  <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                    <div>
                      <div>
                        <h6>Project Information</h6>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          {film.title && (
                            <tr>
                              <th scope="row">Title :</th>
                              <td>{film.title}</td>
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
                              <th scope="row">
                                Do you want to direct your script?
                              </th>
                              <td>
                                {film.is_direct_your_script ? "Yes" : "No"}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </Grid>
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CPMFeatureView;
