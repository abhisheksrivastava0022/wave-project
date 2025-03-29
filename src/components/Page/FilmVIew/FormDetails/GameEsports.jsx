import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const GameEsports = ({
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
    { id: 1, name: "Development" },
    { id: 2, name: "Work In Progress" },
    { id: 3, name: "Ready for Release" },
  ];

  const formatType = [
    { id: 1, name: "Single Player" },
    { id: 2, name: "Multiplayer" },
    { id: 3, name: "Educational" },
    { id: 4, name: "Real-time Strategy" },
  ];

  const platformType = [
    { id: 1, name: "PC" },
    { id: 2, name: "Console" },
    { id: 3, name: "Mobile" },
    { id: 4, name: "AR / VR" },
  ];
  const targetGroup = [
    { id: 1, name: "PreSchool" },
    { id: 2, name: "Kids" },
    { id: 3, name: "PreTeen" },
    { id: 4, name: "Young Adults" },
    { id: 5, name: "Adults" },
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
                  {film.other_details && (
                    <tr>
                      <th scope="row">Format Type :</th>
                      <td>
                        {fetchBy(
                          formatType,
                          "name",
                          film.other_details.type_format
                        )}
                      </td>
                    </tr>
                  )}
                  {film.other_details && (
                    <tr>
                      <th scope="row">Platform :</th>
                      <td>
                        {fetchBy(
                          platformType,
                          "name",
                          film.other_details.type_platform
                        )}
                      </td>
                    </tr>
                  )}
                  {film.other_details && (
                    <tr>
                      <th scope="row">Target Group :</th>
                      <td>
                        {fetchBy(
                          targetGroup,
                          "name",
                          film.other_details.targetGroup
                        )}
                      </td>
                    </tr>
                  )}
                  {countryName && (
                    <tr>
                      <th scope="row">Country :</th>
                      <td>{countryName}</td>
                    </tr>
                  )}
                  {languageName && (
                    <tr>
                      <th scope="row">Language :</th>
                      <td>{languageName}</td>
                    </tr>
                  )}
                  {film.other_details && (
                    <tr>
                      <th scope="row">Date of Completion :</th>
                      <td>{film.other_details.completion_date}</td>
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
                  {/* {film.english_title && (
                    <tr>
                      <td>
                        {selectedGenres.length > 0
                          ? selectedGenres.join(" , ")
                          : "No options selected"}
                      </td>
                    </tr>
                  )} */}

                  {film.synopsis && (
                    <tr>
                      <th scope="row">Synopsis:</th>
                      <td>{film.synopsis}</td>
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

export default GameEsports;
