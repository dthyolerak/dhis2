import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useDataQuery } from "@dhis2/app-runtime";


const myQuery = {
  results: {
    resource: 'programs',
    params: {
      fields: ['id', 'displayName'],
    }
  }
}
const Sidebar = () => {
  const { loading, error, data } = useDataQuery(myQuery)

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }
  // const options = ["Option 1", "Option 2", "Option 3", "Option 4"]; // List of options

  return (
    <div className="sidebar">
      <section>
      <h2 className="sidebarHeader">Main Menu</h2>
        <ul>
          <NavLink className="listItem menuItem" to="./patients">Patient</NavLink>
          <NavLink className="listItem menuItem"  to="./reminder">Reminder</NavLink>
          {/* <NavLink className="listItem menuItem"  to="./appointment">Appointment</NavLink> */}
          <NavLink className="listItem menuItem"  to="./enroll-patients">Enroll Patients</NavLink>
          
        </ul>
      </section>

    </div>
  );
};

export default Sidebar;


