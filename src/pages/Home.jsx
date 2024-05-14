import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../customComp/CustomButton';

function Home({ handleEmployeeFormNavigation }) {
  return (
    <div>
      <h2 style={{ color: "black" }}>Hello World</h2>
      <div style={{marginTop:'10vh'}}>

      <Link to="/employee-form" >
        <CustomButton onClick={handleEmployeeFormNavigation} >
          Employee Form
        </CustomButton>
      </Link>
      {' '}
      <Link to="/display-list" >
        <CustomButton >
          Display List
        </CustomButton>
      </Link>
      {' '}
      <Link to="/fetched-employees">
        <CustomButton >
          Fetched employees
        </CustomButton>
      </Link>
      </div>
      {' '}
      {/* <CustomButton onClick={() => console.log("Button Clicked")} color='black' disabled={false}>
        Custom Button
      </CustomButton> */}
    </div>
  );
}


export default Home;
