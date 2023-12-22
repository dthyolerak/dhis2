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
  //  instance configuration here
  baseUrl: 'https://play.dhis2.org/40.2.0',
};
const query = {
  me: {
    resource: "me",
  },
};

const MyApp = () => (
  <BrowserRouter className="app">
     <DataProvider config={config}>
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
          <Route path="/patients" element={<Patients/>} />
          <Route path="/enroll-patients" element={<Enroll/>} />
          <Route path="/enroll-demo" element={<ReminderComponent/>} />
        </Routes>
      </div>
    </div>
    </DataProvider>
  </BrowserRouter>
);

export default MyApp;
