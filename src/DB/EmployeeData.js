// EmployeeData.js
import { useState } from "react";

const useEmployeeData = () => {
    const [employees, setEmployees] = useState([]);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };

    return { employees, addEmployee };
};

export default useEmployeeData;
