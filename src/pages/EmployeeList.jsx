import React, { useState } from "react";
import { Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomButton from "../customComp/CustomButton";
import ConfirmationBox from "../customComp/ConfirmationBox";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/actions/actions";


const EmployeeList = () => {
    const navigate = useNavigate();
    const [confirmation, setConfirmation] = useState(false);
    const [idToDlt, setIdToDlt] = useState(0);
    const dispatch = useDispatch();

    const employees = useSelector(state => state.employees)
    // console.log(employees);

    const handleConfirm = () => {
        console.log('idtodelete', idToDlt);
        dispatch(deleteEmployee(idToDlt));
        setConfirmation(false);
    }

    const handleCancel = () => {
        setConfirmation(false);
    }
    function onHomeClick() {
        navigate('/');
    }

    const handleEdit = (employeeId) => {
         navigate(`/employee-form/${employeeId}`)
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
                            secondary={`Id: ${employee.empid} Email: ${employee.email}, Phone Number: ${employee.phoneNumber}, Department: ${employee.department}`}
                        />
                        <IconButton onClick={() => handleEdit(employee.empid)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => {setIdToDlt(employee.empid); setConfirmation(true); }}>
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
