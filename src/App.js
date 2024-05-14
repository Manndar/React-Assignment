// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Button } from "@mui/material";
import "./App.css";

import EmployeeForm from "./pages/EmployeeForm";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";
import axios from "axios";
import FetchedEmployeesList from "./pages/FetchedEmployeesList";
import ShowEmployeeDetails from './pages/ShowEmployeeDetails';

function App() {
  const [employees, setEmployees] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState({});
 
  const [fetchedUsers, setFetchedUsers] =useState([]);
  const [selectedEmp, setSelectedEmp] = useState({});
  useEffect(() => {
   getUsersFromAPI();
  }, []);
  
  const handleEmployeeFormNavigation = () => {
    setEmployeeToEdit(null);
  };

  const getUsersFromAPI = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setFetchedUsers(response.data);
  }


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
    // console.log("fetched employee selected", employee);
    setEmployeeToEdit(employee);    
  }
  const setSelectedFetchedEmployee = (selectedEmployee) => {
    setSelectedEmp(selectedEmployee);
  }

  return (
    <Router>
      <div className="App">        
        <Routes>
          <Route path="/" element={<Home handleEmployeeFormNavigation={handleEmployeeFormNavigation}/>}/>
          <Route path="/employee-form" element={<EmployeeForm addOrUpdateEmployee={addOrUpdateEmployee} employeeToEdit={employeeToEdit} />} />
          <Route path="/display-list" element={<EmployeeList employees={employees} setNewEmployeeToEdit={setNewEmployeeToEdit} deleteEmployee={deleteEmployee}/>} />
          <Route path="/fetched-employees" element={<FetchedEmployeesList fetchedUsers={fetchedUsers} setSelectedFetchedEmployee={setSelectedFetchedEmployee}/>} />
          <Route path="/show-selected-employees" element={<ShowEmployeeDetails employee={selectedEmp}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
