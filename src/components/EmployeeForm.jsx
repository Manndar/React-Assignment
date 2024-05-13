import React, {useState, useEffect} from "react";
import { TextField, Button, Grid, Typography} from '@mui/material';
import { useNavigate  } from "react-router-dom";
import CustomButton from "./customComp/CustomButton";
// import useEmployeeData from "../DB/EmployeeData";
// import EmployeeList from "./EmployeeList";



const EmployeeForm = ({addOrUpdateEmployee, employeeToEdit}) => {

    // console.log('addOrUpdateEmployee', addOrUpdateEmployee);
    // console.log('employeeToEdit', employeeToEdit);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        empid: employeeToEdit ? employeeToEdit.empid : Math.floor(Math.random() * 100) + 1,
        firstName: employeeToEdit ? employeeToEdit.firstName : '',
        lastName: employeeToEdit ? employeeToEdit.lastName : '',
        email: employeeToEdit ? employeeToEdit.email : '',
        phoneNumber: employeeToEdit ? employeeToEdit.phoneNumber : '',
        department: employeeToEdit ? employeeToEdit.department : ''
    })

    useEffect(() => {
        if (employeeToEdit) {
          setFormData({
            empid: employeeToEdit.empid,
            firstName: employeeToEdit.firstName,
            lastName: employeeToEdit.lastName,
            email: employeeToEdit.email,
            phoneNumber: employeeToEdit.phoneNumber,
            department: employeeToEdit.department
          });
        }
      }, [employeeToEdit]);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
     
    const handleSubmit = (e) =>{
        e.preventDefault();
        addOrUpdateEmployee(formData);
        setFormData({
            empid:0,
            firstName : '',
            lastName : '',
            email : '',
            phoneNumber: '',
            department: ''
        })
        navigate('/display-list');
    }
    function onHomeClick (){
        navigate('/');
    }
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h5" align="center" gutterBottom>
        {employeeToEdit ? 'Edit Employee' : 'Employee Registration Form'}
        </Typography>
        <CustomButton onClick={onHomeClick}>Home</CustomButton>
        <form onSubmit={handleSubmit} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleOnChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleOnChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="department"
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleOnChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           
          >
            {employeeToEdit ? 'Update' : 'Register'}
          </Button>
          <hr />
        <CustomButton onClick={() => {
            navigate(-1);
        }}>Back</CustomButton>
        </form>
      </Grid>
    </Grid>
  )
}

export default EmployeeForm

