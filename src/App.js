// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";
import FetchedEmployeesList from "./pages/FetchedEmployeesList";
import ShowEmployeeDetails from "./pages/ShowEmployeeDetails";

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form/:id" element={<EmployeeForm />} />
          <Route path="/display-list" element={<EmployeeList />} />
          <Route path="/fetched-employees" element={<FetchedEmployeesList />} />
          <Route
            path="/show-selected-employees"
            element={<ShowEmployeeDetails  />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
