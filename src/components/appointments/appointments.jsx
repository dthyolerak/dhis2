import React from "react";
import "./appointment.css";
import BasicTable from "./basicTable";

const Appointment = () => {
  return (
    <div className="appointmentWrapper">
      <p>Appointments</p>

      <form action="">
        <input type="text" />
        <input type="submit" />
      </form>

      <div className="table">
      <BasicTable/>
      </div>
    </div>
  );
};

export default Appointment;
