import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "./Header.scss";

/* Navigation bar using React Bootstrap with Responsive and
   fixed top functionality */

function Header() {
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        className="nav"
      >
        {/* Logo */}
        <Navbar.Brand href="#home" className="logo">
          Portfolio
        </Navbar.Brand>
        {/* Responsive bar */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggler"
        />
        {/* Collapsing navbar options */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#skill">SKILLS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
