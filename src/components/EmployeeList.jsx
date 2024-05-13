import React, { useState } from "react";
import { Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomButton from "./customComp/CustomButton";
import ConfirmationBox from "./customComp/ConfirmationBox";

const EmployeeList = ({ employees , setNewEmployeeToEdit, deleteEmployee}) => {
    const navigate = useNavigate();
    const [confirmation, setConfirmation] = useState(false);
    const [idToDlt, setIdToDlt] = useState(0);

    const handleConfirm = (id) =>{
        
        handleDelete(idToDlt);
        setConfirmation(false);
    }

    const handleCancel = () => {
        setConfirmation(false);
    }
    function onHomeClick() {
        navigate('/');
    }

    const handleEdit = (employeeId) => {
        const employeeToEdit = employees.find((employee) => employee.empid === employeeId);       
        setNewEmployeeToEdit(employeeToEdit);
        navigate('/employee-form', {state : {employeeToEdit}});
    };

    const handleDelete = (idToDlt) => {
        if(idToDlt){
            deleteEmployee(idToDlt);
        }
        // console.log(`Delete employee with ID: ${employeeId}`);
    };

    return (
        <div>
            <Typography variant="h5" align="center" gutterBottom>
                Registered Employees
            </Typography>
            <CustomButton onClick={onHomeClick}>Home</CustomButton>{' '}
            <CustomButton onClick={() => {
            navigate(-1);
        }}>Back</CustomButton>

            <List>
                {employees.map((employee, index) => (
                    <ListItem key={index} sx={{backgroundColor: index % 2 === 0 ?'whitesmoke':'#fff' }}>
                        <ListItemText
                            primary={`${employee.firstName} ${employee.lastName}`}
                            secondary={`Email: ${employee.email}, Phone Number: ${employee.phoneNumber}, Department: ${employee.department}`}
                        />
                        <IconButton onClick={() => handleEdit(employee.empid)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => {setConfirmation(true); setIdToDlt(employee.empid)}}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            {confirmation && (
        <ConfirmationBox
          message="Are you sure you want to proceed?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
        </div>
    );
};

export default EmployeeList;
