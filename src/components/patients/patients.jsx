import React from "react";
import "./patients.css";
import { DataQuery } from "@dhis2/app-runtime";

const trackedEntityTypeId = "rGEGchYDTGG";
const orgUnitId = "DiszpKrYNg8";

const query = {
  patientsInProgram: {
    resource: "trackedEntityInstances",
    params: {
      fields: "trackedEntityInstance,attributes[attribute,displayName,value]",
      ou: orgUnitId,
      trackedEntityType: trackedEntityTypeId,
    },
  },
};

const Patients = () => {
  return (
    <div className="patients-cont">
      <DataQuery query={query}>
        {({ error, loading, data }) => {
          if (error) {
            return <span>ERROR: {error.message}</span>;
          }
          if (loading) {
            return <span>Loading...</span>;
          }

          const patientsInProgram =
            data.patientsInProgram?.trackedEntityInstances || []; // Ensure it's an array

          if (!Array.isArray(patientsInProgram)) {
            return <span>Patients data is not in the expected format.</span>;
          }

          return (
            <table className="patients-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Gender</th>
                  <th>Phone Number</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {patientsInProgram.map((patient) => (
                  <tr key={patient.trackedEntityInstance}>
                    <td>{patient.trackedEntityInstance}</td>
                    {patient.attributes.map((attribute) => {
                      switch (attribute.displayName) {
                        case "Gender":
                        case "Phone number":
                        case "First name":
                        case "Last name":
                          return (
                            <td key={attribute.attribute}>
                              {attribute.value}
                            </td>
                          );
                        default:
                          return null;
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      </DataQuery>
    </div>
  );
};

export default Patients;
