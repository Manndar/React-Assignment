import React, {useState, useEffect} from "react";
import { Grid, Typography} from '@mui/material';
import { useNavigate , useParams } from "react-router-dom";
import CustomButton from "../customComp/CustomButton";
import CustomTextField from "../customComp/CustomTextField";



const EmployeeForm = ({addOrUpdateEmployee, employees}) => {   
    const navigate = useNavigate();
    const {id} = useParams(); 
    console.log("type id", typeof id);   
    console.log("id", id);   
    const [formData, setFormData] = useState({
        empid:  Math.floor(Math.random() * 100) + 1,
        firstName:  '',
        lastName:'',
        email:  '',
        phoneNumber:  '',
        department: '',
    })

  useEffect(() => {
    if (typeof id === 'string' && id !== ':id') {
      const employee = employees.find((employee) => employee.empid === parseInt(id));
      // console.log('employee', employee);
      setFormData({
        empid:employee.empid,
        firstName:employee.firstName,
        lastName:employee.lastName,
        email:employee.email,
        phoneNumber:employee.phoneNumber,
        department:employee.department
      })
    }
  },[id])

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
        {(id !== ':id') ? 'Edit Employee' : 'Employee Registration Form'}
        </Typography>
        <CustomButton onClick={onHomeClick}>Home</CustomButton>
        <form >
          <CustomTextField            
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}            
          />
          <CustomTextField            
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
          />
          <CustomTextField            
           
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleOnChange}
          />
          <CustomTextField
            
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleOnChange}
          />
          <CustomTextField
            
            required
            fullWidth
            id="department"
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleOnChange}
          />
          <CustomButton
            onClick={handleSubmit}     
            color='#007bff'
          >
            {(id !== ':id') ? 'Update' : 'Register'}
          </CustomButton>
          <hr />
        <CustomButton onClick={() => {
            navigate(-1);
        }}>
        Back
        </CustomButton>
        </form>
      </Grid>
    </Grid>
  )
}

export default EmployeeForm

