
const FilmNotCompletedView = ({ loadFormatTypes }) => {

  const getMonthName = (monthId) => {
    if (!monthId) return ""; // Return an empty string if no month is selected

    const monthNames = [
      "", // Placeholder for 0 or undefined
      "January", // 1
      "February", // 2
      "March", // 3
      "April", // 4
      "May", // 5
      "June", // 6
      "July", // 7
      "August", // 8
      "September", // 9
      "October", // 10
      "November", // 11
      "December", // 12
    ];

    return monthNames[monthId] || ""; // Return the corresponding month name or empty string
  };

  const monthName = getMonthName(film?.month_of_completion);

  return (
    <>
      {film ? (
        <>
          {(film.english_title ||
            film.country ||
            film.language ||
            film.type ||
            film.has_rough_cut ||
            film.post_production_work ||
            film.will_be_complete_by ||
            film.rough_cut_duration ||
            film.duration ||
            film.year_of_completion) && (
              <>
                <div className="shadow-sm white-bg mb-3">
                  <div className="information-get">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="mt-4">
                      <div>
                        <div>
                          <h6>Film Information</h6>
                        </div>
                      </div>
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
                            {film.country && (
                              <tr>
                                <th scope="row">Countries of production :</th>
                                <td>{getCountryNames(film.country)}</td>
                              </tr>
                            )}
                            {film.language && (
                              <tr>
                                <th scope="row">Original Language :</th>
                                <td>{getLanguageNames(film.language)}</td>
                              </tr>
                            )}
                            {film.type && (
                              <tr>
                                <th scope="row">Film Type:</th>
                                <td>{getFilmNames(film.type)}</td>
                              </tr>
                            )}
                            <tr>
                              <th scope="row">
                                Do you have a rough cut of your film?:
                              </th>
                              <td>{film.has_rough_cut ? "Yes" : "No"}</td>
                            </tr>
                            {film.post_production_work && (
                              <tr>
                                <th scope="row">
                                  Post-production work remaining on the film:
                                </th>
                                <td>{film.post_production_work}</td>
                              </tr>
                            )}
                            <tr>
                              <th scope="row">
                                Will your film be complete by November 20, 2025? :
                              </th>
                              <td>{film.will_be_complete_by ? "Yes" : "No"}</td>
                            </tr>
                            {film.rough_cut_duration && (
                              <tr>
                                <th scope="row">
                                  Duration of the Rough Cut (Mins) :
                                </th>
                                <td>{film.rough_cut_duration} Mins</td>
                              </tr>
                            )}
                            {film.duration && (
                              <tr>
                                <th scope="row">Final Duration (Mins) :</th>
                                <td>{film.duration} Mins</td>
                              </tr>
                            )}
                            <tr>
                              <th scope="row">Month of Completion :</th>
                              <td>{monthName}</td>
                            </tr>
                            {film.year_of_completion && (
                              <tr>
                                <th scope="row">Year of Completion :</th>
                                <td>{film.year_of_completion}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </Grid>
                  </div>
                </div>
              </>
            )}

          {film?.owner ? (
            <>
              {(film.synopsis || film.director_comment || film.screenplay) && (
                <>
                  <div className="shadow-sm white-bg mb-3">
                    <div className="information-get">
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="mt-4"
                      >
                        <div>
                          <div>
                            <h6>Other Project Details</h6>
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              {film.synopsis && (
                                <tr>
                                  <th scope="row">Synopsis of Film :</th>
                                  <td>{film.synopsis}</td>
                                </tr>
                              )}
                              {film.director_comment && (
                                <tr>
                                  <th scope="row">Director's Note :</th>
                                  <td>{film.director_comment}</td>
                                </tr>
                              )}
                              {film.series_logline && (
                                <tr>
                                  <th scope="row">Logline :</th>
                                  <td>{film.series_logline}</td>
                                </tr>
                              )}
                              {(String(film.screenplay) === "1" ||
                                String(film.screenplay) === "2") && (
                                  <tr>
                                    <th scope="row">Screenplay :</th>
                                    <td>
                                      {String(film.screenplay) === "1"
                                        ? "Original"
                                        : "Adapted"}
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
              )}

              {(film.genre ||
                film.print_format ||
                film.aspect_ratio ||
                film.sound_format) && (
                  <>
                    <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          className="mt-4"
                        >
                          <div>
                            <div>
                              <h6>Genre</h6>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                {film.genre && film.genre.length > 0 && (
                                  <tr>
                                    <th scope="row">Select Genres :</th>
                                    <td>
                                      {film.genre
                                        .map((id) => {
                                          const genre = genreOptions.find(
                                            (option) => option.id === id
                                          );
                                          return genre ? genre.name : " ";
                                        })
                                        .join(", ")}
                                    </td>
                                  </tr>
                                )}
                                {film.print_format && (
                                  <tr>
                                    <th scope="row">Print Format :</th>
                                    <td>{getPrintFormat(film.print_format)}</td>
                                  </tr>
                                )}
                                {film.aspect_ratio && (
                                  <tr>
                                    <th scope="row">Aspect ratio :</th>
                                    <td>{getAspectRatio(film.aspect_ratio)}</td>
                                  </tr>
                                )}
                                {film.sound_format && (
                                  <tr>
                                    <th scope="row">Sound Format :</th>
                                    <td>{getSoundFormat(film.sound_format)}</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </>
                )}

              {/* Contacts */}
              {/* <ContactDetails formData={film} /> */}

              {(film.lead_cast ||
                film.writer ||
                film.director_of_photography ||
                film.editor ||
                film.editor_filmography ||
                film.sound ||
                film.music ||
                film.production_design ||
                film.costume ||
                film.additional_crew) && (
                  <>
                    <div className="shadow-sm white-bg mb-3">
                      <div className="information-get">
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          className="mt-4"
                        >
                          <div>
                            <div>
                              <h6>Crew Information</h6>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                {film.lead_cast && (
                                  <tr>
                                    <th scope="row">Lead Cast :</th>
                                    <td>{film.lead_cast}</td>
                                  </tr>
                                )}
                                {film.writer && (
                                  <tr>
                                    <th scope="row">Writer :</th>
                                    <td>{film.writer}</td>
                                  </tr>
                                )}
                                {film.director_of_photography && (
                                  <tr>
                                    <th scope="row">Director of Photography :</th>
                                    <td>{film.director_of_photography}</td>
                                  </tr>
                                )}
                                {film.editor && (
                                  <tr>
                                    <th scope="row">Editor :</th>
                                    <td>{film.editor}</td>
                                  </tr>
                                )}
                                {film.editor_filmography && (
                                  <tr>
                                    <th scope="row">Editor’s Filmography :</th>
                                    <td>{film.editor_filmography}</td>
                                  </tr>
                                )}
                                {film.sound && (
                                  <tr>
                                    <th scope="row">Sound :</th>
                                    <td>{film.sound}</td>
                                  </tr>
                                )}
                                {film.music && (
                                  <tr>
                                    <th scope="row">Music :</th>
                                    <td>{film.music}</td>
                                  </tr>
                                )}
                                {film.production_design && (
                                  <tr>
                                    <th scope="row">Production Designer:</th>
                                    <td>{film.production_design}</td>
                                  </tr>
                                )}
                                {film.costume && (
                                  <tr>
                                    <th scope="row">Costume :</th>
                                    <td>{film.costume}</td>
                                  </tr>
                                )}
                                {film.additional_crew && (
                                  <tr>
                                    <th scope="row">Additional Crew :</th>
                                    <td>{film.additional_crew}</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </>
                )}


            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <p>No film data available.</p>
      )}
    </>
  );
};

export default FilmNotCompletedView;
