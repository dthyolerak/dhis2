// Patients.js
import React, { useState } from "react";
import { DataQuery } from "@dhis2/app-runtime";
import { Select } from "@dhis2/ui-core";

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

const ReminderApp = () => {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [message, setMessage] = useState("");

  const sendSMS = async (selectedPatient, message) => {
    // Replace this with actual SMS sending logic
    console.log(`Sending SMS to ${selectedPatient}: ${message}`);
  };

  const onClick = async () => {
    // Check if a patient is selected and a message is provided
    if (selectedPatient && message) {
      // Assuming there's an imaginary sendSMS function
      try {
        await sendSMS(selectedPatient, message);
        alert("SMS sent successfully!");
      } catch (error) {
        console.error("Error sending SMS:", error);
        alert("Failed to send SMS. Please try again.");
      }
    } else {
      alert("Please select a patient and write a message.");
    }
  };

  return (
    <div className="patients-cont">
      <h1 className="title">Patients</h1>
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
            <div>
              <Select
                label="Select Patient"
                onChange={(selectedOption) =>
                  setSelectedPatient(selectedOption.value)
                }
                options={patientsInProgram.map((patient) => ({
                  label: patient.attributes.find(
                    (attr) => attr.displayName === "Patient Name"
                  )?.value,
                  value: patient.trackedEntityInstance,
                }))}
              />
              <input
                type="text"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={onClick}>Send SMS</button>
            </div>
          );
        }}
      </DataQuery>
    </div>
  );
};

export default ReminderApp;

export default PatientSelector;
