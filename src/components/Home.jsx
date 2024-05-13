import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Home({handleEmployeeFormNavigation}) {
  return (
    <div>
      <h2 style={{ color: "black" }}>Hello World</h2>
      <Link to="/employee-form" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" onClick={handleEmployeeFormNavigation}>
          Employee Form
        </Button>
      </Link>
      {' '}
      <Link to="/display-list" style={{ textDecoration: 'none' }}>
        <Button variant="outlined">
          Display List
        </Button>
      </Link>
    </div>
  );
}

export default Home;
