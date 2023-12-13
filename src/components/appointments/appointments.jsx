import React from "react";
import "./appointment.css";
import BasicTable from "./basicTable";

const Appointment = () => {
  return (
    <div className="appointmentWrapper">
      <h1 className="title">Appointments</h1>
      <form className="searchForm" action="">
        <input type="text" placeholder="Patient ID"/>
        <button>Search</button>
      </form>
      <div className="table">
        <BasicTable />
      </div>
      <p>Modify Appointment Status</p>
      <form className="modifyForm" action="">
        <div className="modifyFormCol1">
        <input type="text" placeholder="Patients ID" />
        <select className="statusBtn" name="" id="">
          <option className="statusOptionP" value="">Pending</option>
          <option className="statusOptionM" value="">Missed</option>
          <option className="statusOptionA" value="">Attended</option>
        </select>
        </div>
        <div className="modifyFormCol2">
          <input className="modifyBtn" type="submit" value="Modify" />
        </div>
        
      </form>
    </div>
  );
};

export default Appointment;
