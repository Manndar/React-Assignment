// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Button } from "@mui/material";
import "./App.css";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home";

function App() {
  const [employees, setEmployees] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
 
  
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    console.log('storedEmployees',storedEmployees);
    if (storedEmployees !== null ) {
      setEmployees(storedEmployees);
    }
   
  }, []);
  
  const handleEmployeeFormNavigation = () => {
    setEmployeeToEdit(null);
  };

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addOrUpdateEmployee = (employee) => {    
    const existingEmployeeIndex = employees.findIndex(emp => emp.empid === employee.empid);
    if (existingEmployeeIndex !== -1) {
      const updatedEmployees = [...employees];
      updatedEmployees[existingEmployeeIndex] = employee;
      setEmployees(updatedEmployees);
    } else {     
      setEmployees([...employees, employee]);
    }
  };

  const deleteEmployee = (empid) => {
    setEmployees(employees.filter((emp) => emp.empid !== empid));
  }

  const setNewEmployeeToEdit = (employee) =>{
    setEmployeeToEdit(employee);
    
  }

  return (
    <Router>
      <div className="App">        
        <Routes>
          <Route path="/" element={<Home handleEmployeeFormNavigation={handleEmployeeFormNavigation}/>}/>
          <Route path="/employee-form" element={<EmployeeForm addOrUpdateEmployee={addOrUpdateEmployee} employeeToEdit={employeeToEdit} />} />
          <Route path="/display-list" element={<EmployeeList employees={employees} setNewEmployeeToEdit={setNewEmployeeToEdit} deleteEmployee={deleteEmployee}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
