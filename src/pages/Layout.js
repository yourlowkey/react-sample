import React from 'react';

import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Layout = () => {
  return (
    <>
      <Navbar>
        <Nav>
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
         
          <Nav.Link as={NavLink} to="/user/101">
            User
          </Nav.Link>
        </Nav>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
