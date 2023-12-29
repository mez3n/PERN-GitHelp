import React, { useEffect, useState } from "react";
import "./css/admin.css";

function Admin() {
  const [organizations, setOrganizations] = useState([]);
  console.log(organizations);
  useEffect(() => {
    fetch(`http://localhost:8080/organization/unapproved`)
      .then((res) => res.json())
      .then((data) => setOrganizations(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAccept = (organizationId) => {
    // Implement logic for accepting the organization with the given ID
    console.log(`Accepted organization with ID: ${organizationId}`);
  };

  if (!Array.isArray(organizations)) {
    setOrganizations([organizations]);
  }

  return (
    <div className="admin-wrapper">
      <h1>Organizations waiting for your acceptance:</h1>
      <div className="organization-list">
        {organizations.map((organization) => (
          <div className="organization" key={organization.id}>
            <h2>{organization.name}</h2>
            <p>Location: {organization.location}</p>
            <button onClick={() => handleAccept(organization.id)}>
              Accept
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
