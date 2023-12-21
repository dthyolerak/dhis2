import React, { useState } from 'react';

const EnrollPatientForm = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
  });

  const handleChange = (e) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnroll = async () => {
    try {
      const response = await fetch('https://play.dhis2.org/40.2.0/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('admin:district'), //DHIS2 credentials
        },
        body: JSON.stringify({
          orgUnit: "LaXbhbvq6Xi",
          trackedEntity: "avwL0LGlWAN",
          attributes: [
            { attribute: 'email', value: patientData.name },
            // { attribute: 'age', value: patientData.age },
            { attribute: 'gender', value: patientData.gender },
            // { attribute: 'address', value: patientData.address },
          ],
        }),
      });
      // console.log(response);
      if (response.ok) {
        console.log('Patient enrolled successfully!');
        //other actions upon successful enrollment.
      } else {
        console.error('Error enrolling patient:', response.status, response.statusText);
        const responseBody = await response.json();
        console.error('Response body:', responseBody);

        // console.error('Error enrolling patient:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Enroll Patient</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={patientData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={patientData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" name="gender" value={patientData.gender} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={patientData.address} onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleEnroll}>
          Enroll Patient
        </button>
      </form>
    </div>
  );
};

export default EnrollPatientForm;
