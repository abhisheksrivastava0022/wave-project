import React from "react";
import { toRoman } from "../../utils/helpers";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";

const ContactDetails = ({ formData }) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const countries = useSelector((state) => state.films.countries.data);

  const getCountryNames = (countryIds) => {
    if (!countryIds) return "";

    // Check if countryIds is an array; if not, treat it as a single ID
    const idsArray = Array.isArray(countryIds) ? countryIds : [countryIds];

    return idsArray
      .map(
        (id) => countries?.find((country) => country.id === id)?.name || "  "
      )
      .join(", ");
  };
  // if (!loadFormatTypes?.owner) return <></>;

  const designationOptions = [
    { id: 1, name: "Primary Contact Person" },
    { id: 2, name: "Screen Writer" },
    { id: 3, name: "Co-Screen Writer" },
    { id: 4, name: "Director" },
    { id: 5, name: "Co-Director" },
    { id: 6, name: "Producer" },
    { id: 7, name: "Co-Producer" },
    { id: 8, name: "Attendee" },
  ];
  return (
    <>
      {/* Neww Component */}
      {formData?.film_contact?.length > 0 ? (
  formData.film_contact.map((contact, index) => (
    <React.Fragment key={contact.id || index}>
      <Grid item xs={12}>
        <div className="shadow-sm white-bg mb-3">
          <div className="information-get">
            <div className="table-responsive">
              <div className="header-title-bg mb-4">
                <h6>Contacts : {toRoman(index + 1)}</h6>
              </div>
              <table className="table mb-0">
                <tbody>
                  <tr>
                    <th scope="row">Designation / Roles</th>
                    <td>
                      {designationOptions.find(
                        (option) => option.id === contact?.type
                      )?.name || "Not Defined"}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Full Name</th>
                    <td>{`${contact?.first_name || "N/A"} ${contact?.last_name || ""}`.trim()}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{contact?.email || "N/A"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone Number</th>
                    <td>{contact?.phone || "N/A"}</td>
                  </tr>
                  
                  {contact?.company && (
                    <tr>
                      <th scope="row">Company Name</th>
                      <td>{contact.company}</td>
                    </tr>
                  )}

                  <tr>
                    <th scope="row">Country</th>
                    <td>{getCountryNames(contact?.country) || "N/A"}</td>
                  </tr>
                  <tr>
                    <th scope="row">State</th>
                    <td>{contact?.state || "N/A"}</td>
                  </tr>
                  <tr>
                    <th scope="row">City</th>
                    <td>{contact?.city || "N/A"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>{contact?.address || "N/A"}</td>
                  </tr>

                  {contact?.website && (
                    <tr>
                      <th scope="row">Website</th>
                      <td>{contact.website}</td>
                    </tr>
                  )}

                  {contact?.facebook && (
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>{contact.facebook}</td>
                    </tr>
                  )}

                  {contact?.twitter && (
                    <tr>
                      <th scope="row">Twitter</th>
                      <td>{contact.twitter}</td>
                    </tr>
                  )}

                  {contact?.instagram && (
                    <tr>
                      <th scope="row">Instagram</th>
                      <td>{contact.instagram}</td>
                    </tr>
                  )}

                  <tr>
                    <th scope="row">Biography</th>
                    <td>{contact?.biography || "N/A"}</td>
                  </tr>

                  {contact?.filmography && (
                    <tr>
                      <th scope="row">Filmography</th>
                      <td>{contact.filmography}</td>
                    </tr>
                  )}

                  <tr>
                    <th scope="row">Profile Image</th>
                    <td>
                      {contact?.image_temp?.url ? (
                        <img
                          src={`${BASE_URL}/file/read/${contact.image_temp.url}`}
                          alt={contact.image_temp.name || "Uploaded"}
                          style={{ width: "80px", height: "50px", objectFit: "cover" }}
                        />
                      ) : (
                        "No Image Available"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Grid>
    </React.Fragment>
  ))
) : (
  <></>
)}

    </>
  );
};

export default ContactDetails;
