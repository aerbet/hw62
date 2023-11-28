import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <span className="navbar-brand">Pentium Store</span>

        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Delivery" className="nav-link">Delivery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-link">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Cart" className="nav-link">Cart</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Toolbar;