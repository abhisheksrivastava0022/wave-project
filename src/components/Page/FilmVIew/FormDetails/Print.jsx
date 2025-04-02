import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const Print = ({
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

  const printingServiceTypes = [
    { id: 1, name: "Newspaper" },
    { id: 2, name: "Magazines" },
    { id: 3, name: "Flayers" },
    { id: 4, name: "Books" },
    { id: 5, name: "Others" },
  ];
  const productioSupportTypes = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
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
                <h6>Project Information </h6>
              </div>

              <table className="table table-striped table-sm">
                <tbody>
                  {film?.other_details?.printing_service_type && (
                    <tr>
                      <th scope="row">Type of Printing Services:</th>
                      <td>
                        {film?.other_details.printing_service_type === 5
                          ? `Others: ${
                              film?.other_details.printing_service_other_reason?.trim() ||
                              "Not specified"
                            }`
                          : fetchBy(
                              printingServiceTypes,
                              "name",
                              film?.other_details.printing_service_type
                            )}
                      </td>
                    </tr>
                  )}
                  {film?.other_details?.printing_capability_type && (
                    <tr>
                      <th scope="row">Printing Capabilities :</th>
                      <td>
                        {film?.other_details.printing_capability_type === 5
                          ? `Others: ${
                              film?.other_details.printing_capability_other_reason?.trim() ||
                              "Not specified"
                            }`
                          : fetchBy(
                              printingServiceTypes,
                              "name",
                              film?.other_details.printing_capability_type
                            )}
                      </td>
                    </tr>
                  )}

                  {film?.other_details.production_support_type && (
                    <tr>
                      <th scope="row"> Editing & Post- Production Support :</th>

                      <td>
                        {" "}
                        {fetchBy(
                          productioSupportTypes,
                          "name",
                          film?.other_details?.production_support_type
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

export default Print;
