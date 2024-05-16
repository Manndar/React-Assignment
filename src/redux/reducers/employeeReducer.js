// reducers.js

import { combineReducers } from "redux";
import {
  ADD_OR_UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_FETCHED_EMPLOYEES,
  GET_EMPLOYEES,
} from "../actions/typesConstants";

const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return state;
    case ADD_OR_UPDATE_EMPLOYEE:
      const employee = action.payload;
      console.log("employee to be added :", employee);
      const existingEmployeeIndex = state.findIndex(
        (emp) => emp.empid === employee.empid
      );
      if (existingEmployeeIndex !== -1) {
        return state.map((emp, index) => {
          if (index === existingEmployeeIndex) {
            return employee;
          } else {
            return emp;
          }
        });
      } else {
        return [...state, employee];
      }
    case DELETE_EMPLOYEE:
      return state.filter((emp) => emp.empid !== action.payload);
    default:
      return state;
  }
};

const fetchedUsersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FETCHED_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};

const selectedEmpReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_SELECTED_EMP":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  employees: employeesReducer,
  fetchedUsers: fetchedUsersReducer,
  selectedEmp: selectedEmpReducer,
});

export default rootReducer;

// const employees = [{
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// },]
