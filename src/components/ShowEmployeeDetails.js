import React from 'react';
import CustomButton from './customComp/CustomButton';
import { useNavigate } from 'react-router-dom';

function ShowEmployeeDetails({ employee }) {
  const { id, name, username, email, address, phone, website, company } = employee;
  const navigate = useNavigate();

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p>
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>
      <p><strong>Company Name:</strong> {company.name}</p>
      <CustomButton onClick={() => {
            navigate(-1);
        }}>Back</CustomButton>
    </div>
  );
}

export default ShowEmployeeDetails;
