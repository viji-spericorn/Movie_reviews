import React from 'react';
import '../../../css/dashboard.css';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
const Dashboard = () => {
  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          flexFlow: 'column',
          height: '100vh',
          overflowY: 'hidden',
        }}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
