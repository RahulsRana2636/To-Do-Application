// src/components/Logout.js

import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions/authActions';

const Logout = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout} className="btn btn-outline-danger">
      Logout
    </button>
   
  );
};

export default connect(null, { logout })(Logout);
