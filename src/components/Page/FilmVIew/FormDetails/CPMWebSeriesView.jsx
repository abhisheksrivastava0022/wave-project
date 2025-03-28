

import { Grid } from "@mui/material";

const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;
const CPMWebSeriesView = ({ film }) => {
  console.log({ film });
  alert("cpm");
  const type2Document = film.FilmDocuments.find(
    (doc) => doc.type === 8
  );
  return (
    <>
     {film ? (
  <>
    {(film.title ||
      film.country ||
      film.language ||
      film.anticipated_duration_per_episode ||
      film.number_of_episode ||
      film.series_based_on ||
      film.shooting_format ||
      film.shoot_location ||
      film.target_audience ||
      film.duration_and_market_strategy ||
      film.series_logline ||
      film.short_synopsis ||
      film.director_comment ||
      film.producer_note ||
      film.is_part_of ||
      film.is_part_of_details ||
      film.screenplay) && (
        <div className="shadow-sm white-bg mb-3">
          <div className="information-get">
            <h6>Project Information</h6>
            <div className="table-responsive mt-3">
              <table className="table mb-0">
                <tbody>
                  
                {type2Document ? (
                        <img
                          src={`${dataurl}/file/read/${type2Document.url}`}
                          alt={type2Document.name}
                        />
                      ) : (
                        <div className="defaultimagecontainer text-center">
                          <img
                            src={`/img/category_${film.category}.jpg`}
                            alt="user"
                            className="defualtImage"
                          />
                        </div>
                      )}
                  {film.title && (
                    <tr>
                      <th scope="row">Title :</th>
                      <td>{film.title}</td>
                    </tr>
                  )}
                  {/* {film.country && (
                    <tr>
                      <th scope="row">Countries :</th>
                      <td>{getCountryNames(film.country)}</td>
                    </tr>
                  )} */}
                  {/* {film.language && (
                    <tr>
                      <th scope="row">Original Language :</th>
                      <td>{getLanguageNames(film.language)}</td>
                    </tr>
                  )} */}
                  {film.anticipated_duration_per_episode && (
                    <tr>
                      <th scope="row">
                        Anticipated Duration per episode :
                      </th>
                      <td>{film.anticipated_duration_per_episode} Mins</td>
                    </tr>
                  )}
                  {film.number_of_episode && (
                    <tr>
                      <th scope="row">Number of Episodes :</th>
                      <td>{film.number_of_episode}</td>
                    </tr>
                  )}
                  {/* {film.series_based_on && (
                        <tr>
                          <th scope="row">Series based on :</th>
                          <td>{film.series_based_on}</td>
                        </tr>
                      )} */}
                  {film.shooting_format && (
                    <tr>
                      <th scope="row">Shooting format :</th>
                      <td>{film.shooting_format}</td>
                    </tr>
                  )}
                  {film.shoot_location && (
                    <tr>
                      <th scope="row">Shoot Locations/s :</th>
                      <td>{film.shoot_location}</td>
                    </tr>
                  )}
                  {film.target_audience && (
                    <tr>
                      <th scope="row">Target Audience :</th>
                      <td>{film.target_audience}</td>
                    </tr>
                  )}
                  {film.duration_and_market_strategy && (
                    <tr>
                      <th scope="row">
                        Distribution and Marketing Strategy :
                      </th>
                      <td>{film.duration_and_market_strategy}</td>
                    </tr>
                  )}
                  {film.series_logline && (
                    <tr>
                      <th scope="row">Logline :</th>
                      <td>{film.series_logline}</td>
                    </tr>
                  )}
                  {film.short_synopsis && (
                    <tr>
                      <th scope="row">Short Synopsis :</th>
                      <td>{film.short_synopsis}</td>
                    </tr>
                  )}
                  {film.director_comment && (
                    <tr>
                      <th scope="row">Director's Statement:</th>
                      <td>{film.director_comment}</td>
                    </tr>
                  )}
                  {film.producer_note && (
                    <tr>
                      <th scope="row">Producer's Note :</th>
                      <td>{film.producer_note}</td>
                    </tr>
                  )}
                  {film.is_part_of && (
                    <tr>
                      <th scope="row">
                        Please mention if your project has been a part of :
                      </th>
                      <td>{PartOfProjectDetails(film.is_part_of)}</td>
                    </tr>
                  )}
                  {film.is_part_of_details && (
                    <tr>
                      <th scope="row">Please Specify Details:</th>
                      <td>{film.is_part_of_details}</td>
                    </tr>
                  )}
                  {/* {(String(film.screenplay) === "1" ||
                        String(film.screenplay) === "2") && (
                        <tr>
                          <th scope="row">Screenplay :</th>
                          <td>
                            {String(film.screenplay) === "1"
                              ? "Original"
                              : "Adapted"}
                          </td>
                        </tr>
                      )} */}
                  {(String(film.screenplay) === "1" ||
                    String(film.screenplay) === "2") && (
                      <>
                        <tr>
                          <th scope="row">Screenplay Based on :</th>
                          <td>
                            {String(film.screenplay) === "1"
                              ? "Original"
                              : "Adapted"}
                          </td>
                        </tr>
                        {String(film.screenplay) === "1" &&
                          film.screenplay_description && (
                            <tr>
                              <th scope="row">Screenplay Description :</th>
                              <td>{film.screenplay_description}</td>
                            </tr>
                          )}
                        {String(film.screenplay) === "2" &&
                          film.series_based_on && (
                            <tr>
                              <th scope="row">Series Based on :</th>
                              <td>{film.series_based_on}</td>
                            </tr>
                          )}
                      </>
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

  </>
) : (
  <></>
)}
    </>
  );
};

export default CPMWebSeriesView;
