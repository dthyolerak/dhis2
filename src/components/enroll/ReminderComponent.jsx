import React, { useState, useEffect } from "react";
import { DataQuery } from "@dhis2/app-runtime";
import { SingleSelect } from "@dhis2/ui-core";

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

const ReminderComponent = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [message, setMessage] = useState("");
  const [patientsInProgram, setPatientsInProgram] = useState([]); // Initialize state for patients

  // Fetch patients when the component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await dataQuery({ query });
        setPatientsInProgram(response.patientsInProgram.trackedEntityInstances);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

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
      <SingleSelect
        label="Select Patient"
        onChange={(selectedOption) => setSelectedPatient(selectedOption)}
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
};

// Using DataQuery to fetch data
const ReminderComponentWithData = () => (
  <DataQuery query={query}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      return <ReminderComponent dataQuery={data} />;
    }}
  </DataQuery>
);

export default ReminderComponentWithData;
