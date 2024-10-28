import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Test from "./Components/Test";
import About from "./Components/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import DemographicPage from "./Components/Dashboard/DemographicPage.js";
import AppointmentSchedulingPage from "./Components/Dashboard/AppointmentSchedulingPage.js";
import SummaryPage from "./Components/Dashboard/SummaryPage.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/demographicdetails" element={<DemographicPage />} />
          <Route path="/appointmentscheduling" element={<AppointmentSchedulingPage />} />
          <Route path="/summarydetails" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
