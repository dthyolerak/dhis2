import React from "react";
import "./home.css";
import { Welcome } from "./components/welcome/Welcome";
import Reminder from "./components/reminder/reminder";
import Appointment from "./components/appointments/appointments";
import Patients from "./components/patients/patients";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const query = {
  me: {
    resource: "me",
  },
};

const MyApp = () => (
  <BrowserRouter className="app">
    {/* <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                        <h1>
                            {i18n.t('Hello {{name}}', { name: data.me.name })}
                        </h1>
                        <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                    </>
                )
            }}
        </DataQuery> */}
    {/* <Header /> */}
    <div className="homeContainer">
      <Sidebar />
      <div className="contentWrapper">
        <Routes>
          <Route index element={<Welcome/> } />
          <Route path="/reminder" element={<Reminder/>} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/patients" element={<Patients/>} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default MyApp;
