import { Grid } from "@mui/material";
const dataurl = import.meta.env.VITE_REACT_APP_BASE_API;

const InfluencerMarketing = ({
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

  const targetAudience = [
    { id: 1, name: "Teens" },
    { id: 2, name: "Young Adults" },
    { id: 3, name: "Adults" },
    { id: 4, name: "Industry Professionals" },
    { id: 5, name: "Global Audience" },
    { id: 6, name: "Other (Specify)" },
  ];

  const subscriberCount = [
    { id: 1, name: "Nono (1K - 10K)" },
    { id: 2, name: "Micro (10K - 100K)" },
    { id: 3, name: "Macro (100K - 1M)" },
    { id: 4, name: "Mega (1M+)" },
  ];

  const selectIndustry = [
    { id: 1, name: "Film & Entertainment" },
    { id: 2, name: "OTT & Digital Content" },
    { id: 3, name: "Gaming & Esports" },
    { id: 4, name: "Music & Podcasts" },
    { id: 5, name: "Travel & Lifestyle" },
    { id: 6, name: "Fashion & Beauty" },
    { id: 7, name: "Tech & Gadgets" },
    { id: 8, name: "Political Analyst" },
    { id: 9, name: "Other (Specify)" },
  ];

  const selectPlatform = [
    { id: 1, name: "Youtube" },
    { id: 2, name: "Instagram" },
    { id: 3, name: "Twitter" },
    { id: 4, name: "Facebook" },
    { id: 5, name: "Tik Tok" },
    { id: 6, name: "LinkedIn" },
    { id: 7, name: "Blogs" },
    { id: 8, name: "Podcasts" },
    { id: 9, name: "Other (Specify)" },
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
                  {film?.other_details.language_content?.includes(3) ? (
                    <>
                      {film?.other_details.please_specify_lang && (
                        <tr>
                          <th scope="row"> Please Specify Language(s) :</th>
                          <td> {film?.other_details.please_specify_lang}</td>
                        </tr>
                      )}
                    </>
                  ) : (
                    <></>
                  )}

                  {film?.other_details?.primary_industry && (
                    <tr>
                      <th scope="row">Primary Industry / Niche :</th>
                      <td>
                        {(() => {
                          const targetAudienceList =
                            film.other_details.primary_industry.map((id) =>
                              id === 9
                                ? `Other: ${
                                    film.other_details
                                      .please_specify_primary_industry ||
                                    "Not specified"
                                  }`
                                : fetchBy(selectIndustry, "name", id)
                            );

                          // Move "Other" to the end
                          const sortedPlatforms = targetAudienceList.sort(
                            (a, b) => (a.includes("Other:") ? 1 : -1)
                          );

                          return sortedPlatforms.join(", ");
                        })()}
                      </td>
                    </tr>
                  )}

                  {film?.other_details?.primary_platform && (
                    <tr>
                      <th scope="row">Primary Platform:</th>
                      <td>
                        {(() => {
                          const selectedPlatforms =
                            film.other_details.primary_platform.map((id) =>
                              id === 9
                                ? `Other: ${
                                    film.other_details
                                      .please_specify_primary_platform ||
                                    "Not specified"
                                  }`
                                : fetchBy(selectPlatform, "name", id)
                            );

                          // Move "Other" to the end
                          const sortedPlatforms = selectedPlatforms.sort(
                            (a, b) => (a.includes("Other:") ? 1 : -1)
                          );

                          return sortedPlatforms.join(", ");
                        })()}
                      </td>
                    </tr>
                  )}

                  {film?.other_details && (
                    <tr>
                      <th scope="row"> Follower/Subscriber Count :</th>
                      <td>
                        {fetchBy(
                          subscriberCount,
                          "name",
                          film.other_details?.subscriber_count
                        )}
                      </td>
                    </tr>
                  )}

                  {film?.other_details?.target_audience && (
                    <tr>
                      <th scope="row">Target Audience:</th>
                      <td>
                        {(() => {
                          const targetAudienceList =
                            film.other_details.target_audience.map((id) =>
                              id === 9
                                ? `Other: ${
                                    film.other_details
                                      .please_specify_target_audience ||
                                    "Not specified"
                                  }`
                                : fetchBy(targetAudience, "name", id)
                            );

                          // Move "Other" to the end
                          const sortedPlatforms = targetAudienceList.sort(
                            (a, b) => (a.includes("Other:") ? 1 : -1)
                          );

                          return sortedPlatforms.join(", ");
                        })()}
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

export default InfluencerMarketing;
