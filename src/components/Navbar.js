// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">To Do App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link to="/tasklist" className="nav-link active">Task List</Link>
                </li>
                <li className="nav-item">
                  <Link to="/addtask" className="nav-link active">Add Task</Link>
                </li>
                <li className="nav-item ">
                  <Logout />
                </li>
              </>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link to="/" className="nav-link">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Navbar);
