import React from "react";
import "./home.css";
import { Welcome } from "./components/welcome/Welcome";
import Reminder from "./components/reminder/reminder";
import Patients from "./components/patients/patients";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enroll from "./components/enroll/enroll";
import ReminderComponent from "./components/enroll/ReminderComponent";
import { DataProvider } from '@dhis2/app-runtime';

const config = {
  baseUrl: 'https://play.dhis2.org/2.38.5/api/',
};

const query = {
  me: {
    resource: "me",
  },
};

const MyApp = () => (
  <BrowserRouter className="app">
    <DataProvider config={config}>
      <div className="homeContainer">
        <Sidebar />
        <div className="contentWrapper">
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/enroll-patients" element={<Enroll />} />
            <Route path="/enroll-demo" element={<ReminderComponent />} />
          </Routes>
        </div>
      </div>
    </DataProvider>
  </BrowserRouter>
);

export default MyApp;
