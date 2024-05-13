// import React, {useEffect, useState } from 'react'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import CustomButton from './customComp/CustomButton';
import { useNavigate } from 'react-router-dom';



function FetchedEmployeesList({fetchedUsers, setSelectedFetchedEmployee}) {
  const navigate = useNavigate();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Full name', width: 200 },  
    { field: 'username', headerName: 'User name', width: 200 },  
    { field: 'website', headerName: 'Website', width: 200 },  
    { field: 'phone', headerName: 'Phone', width: 200 },  
    {
      field: 'email',
      headerName: 'Email',
      sortable:true,
      width: 200,
    }
  ];

  const rows = fetchedUsers;

  const handleRowClick = (event) => {
    const newEmp = event.row; 
    console.log(newEmp);   
    setSelectedFetchedEmployee(newEmp)
    navigate('/show-selected-employees', {state : {newEmp}}) 
  };
 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <CustomButton onClick={() => navigate(-1)}>Home</CustomButton>
      </div>
      <div style={{ width: '80%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
          onRowClick={handleRowClick}
          // checkboxSelection
        />
      </div>
    </div>
  )
}

export default FetchedEmployeesList