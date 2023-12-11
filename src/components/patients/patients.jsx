import React from "react";
import "./patients.css";

const Patients = () => {
  return <div className="patients-cont">
    <h1 className="title">Patients Details</h1>
    <form className="search-patients">
      <input type="search" name="" id="" />
      <button>Search</button>
    </form>
    <div className="patients-container">
      <table>
        <thead>
          <tr>
            <th>Message</th>
            <th>Recipients</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr >
              <td>Hello there</td>
              <td>0993585213</td>
              <td>27 May 2015: 8:30AM</td>
              <td className="missed">Missed</td>
              <td className="viewDetails">View Details</td>
            </tr>
            <tr >
              <td>Hello there</td>
              <td>0993585213</td>
              <td>27 May 2015: 8:30AM</td>
              <td className="attend">attend</td>
              <td className="viewDetails">View Details</td>
            </tr>
            <tr >
              <td>Hello there</td>
              <td>0993585213</td>
              <td>27 May 2015: 8:30AM</td>
              <td className="attend">attend</td>
              <td className="viewDetails">View Details</td>
            </tr>
            <tr >
              <td>Hello there</td>
              <td>0993585213</td>
              <td>27 May 2015: 8:30AM</td>
              <td className="attend">attend</td>
              <td className="viewDetails">View Details</td>
            </tr>
            <tr >
              <td>Hello there</td>
              <td>0993585213</td>
              <td>27 May 2015: 8:30AM</td>
              <td className="missed">Missed</td>
              <td className="viewDetails">View Details</td>
            </tr>
            <tr >
              <td>Hello there</td>
              <td>0993585213</td>
              <td>27 May 2015: 8:30AM</td>
              <td className="attend">attend</td>
              <td className="viewDetails">View Details</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>;
};

export default Patients;
