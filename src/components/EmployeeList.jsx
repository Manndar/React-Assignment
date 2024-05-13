import React from "react";
import { Typography, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EmployeeList = ({ employees , setNewEmployeeToEdit, deleteEmployee}) => {
    const navigate = useNavigate();

    function onHomeClick() {
        navigate('/');
    }

    const handleEdit = (employeeId) => {
        const employeeToEdit = employees.find((employee) => employee.empid === employeeId);       
        setNewEmployeeToEdit(employeeToEdit);
        navigate('/employee-form', {state : {employeeToEdit}});
    };

    const handleDelete = (employeeId) => {
        deleteEmployee(employeeId);
        // console.log(`Delete employee with ID: ${employeeId}`);
    };

    return (
        <div>
            <Typography variant="h5" align="center" gutterBottom>
                Registered Employees
            </Typography>
            <Button onClick={onHomeClick}>Home</Button>
            <List>
                {employees.map((employee, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`${employee.firstName} ${employee.lastName}`}
                            secondary={`Email: ${employee.email}, Phone Number: ${employee.phoneNumber}, Department: ${employee.department}`}
                        />
                        <IconButton onClick={() => handleEdit(employee.empid)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(employee.empid)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default EmployeeList;
