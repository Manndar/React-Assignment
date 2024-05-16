
import { ADD_OR_UPDATE_EMPLOYEE, DELETE_EMPLOYEE, SET_FETCHED_EMPLOYEES,GET_EMPLOYEES,SET_SELECTED_EMP } from '../actions/typesConstants';

export const addOrUpdateEmployee = (employee) => ({
    type: ADD_OR_UPDATE_EMPLOYEE,
    payload: employee
  });
  
  export const deleteEmployee = (empid) => ({
    type: DELETE_EMPLOYEE,
    payload: empid
  });
  
  export const setFetchedUsers = (users) => ({
    type: SET_FETCHED_EMPLOYEES,
    payload: users
  });
  
  export const setSelectedEmp = (emp) => ({
    type: SET_SELECTED_EMP,
    payload: emp
  });

  export const getEmployees = () => ({
    type: GET_EMPLOYEES,

  })
  