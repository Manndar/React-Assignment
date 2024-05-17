import React, { useEffect, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import CustomButton from "../customComp/CustomButton";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFetchedUsers } from "../redux/actions/actions";
import axios from "axios";

function FetchedEmployeesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUsersFromAPI = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(setFetchedUsers(response.data));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  useEffect(() => {
    fetchUsersFromAPI();
    console.log('useEffect called ...');
  }, [fetchUsersFromAPI]);

  const fetchedUsers = useSelector((state) => state.fetchedUsers);
  

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Full name", width: 200 },
    { field: "username", headerName: "User name", width: 200 },
    { field: "website", headerName: "Website", width: 200 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  const handleRowClick = (event) => {
    const newEmp = event.row;
    navigate("/show-selected-employees", { state: { newEmp } });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "20px" }}>
        <CustomButton onClick={() => navigate(-1)}>Home</CustomButton>
      </div>
      <div style={{ width: "80%" }}>
        <DataGrid
          rows={fetchedUsers}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
}

export default FetchedEmployeesList;
