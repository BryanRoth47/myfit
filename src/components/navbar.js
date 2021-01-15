import { getUserId } from 'api/user';
import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { NavLink } from 'react-router-dom';


const CustomNavBar = ({loggedIn}) => {
    const [userLoggedIn, setuserLoggedIn] = useState(false);

    useEffect(() => {
      getUserId((id) => {
        if (id) setuserLoggedIn(true);
      });
    }, []);

    return (
    <Navbar id='my-navbar' variant="dark" expand="lg" >
      <NavbarBrand>
        <h2>MyFitPlanner</h2>
      </NavbarBrand>
      <NavLink
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/create-plan"
        activeStyle={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Create Plan
      </NavLink>
      <NavLink
        to="/view-plans"
        activeStyle={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        View Plans
      </NavLink>
      <NavLink
        style={{
          marginLeft: "auto",
          color: "rgb(50, 50, 219)"
        }}
        to="/login"
        activeStyle={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        {(loggedIn || userLoggedIn) ? 'Account' : 'Login'}
      </NavLink>
    </Navbar>
    );
  }

  export default CustomNavBar;