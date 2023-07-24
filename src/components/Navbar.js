import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/3.png';
import { UserContext } from '../App';
const Navbar = () => {
  const { state} = useContext(UserContext)
  console.log(state)
  if (state) {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bgc">
          <NavLink className="navbar-brand " to="#"><span><img src={logo} alt="logo" /></span> <strong>Rahul Saini</strong></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutme">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
  else {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bgc">
          <NavLink className="navbar-brand" to="#"><span><img src={logo} alt="logo" /></span> <strong>SainiTech</strong></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutme">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">LogIn</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;