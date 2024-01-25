import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const styles = {
    color: '#BF5353'
  }

  return (
    <Navbar bg="body-secondary" expand="lg" className="ps-5 py-3 sticky-top">
      <Navbar.Brand href="#" className="fs-4 fw-bold ps-5" style={styles}>
        JobsCenter
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end pe-5">
        <Nav className="px-4 gap-3">
          <Nav.Link as={Link} to="/" className="fw-medium d-flex align-items-center">
            <i className="bi bi-house-fill pe-1 fs-5"></i>Home
          </Nav.Link>
          <Nav.Link as={Link} to="/favourites" className="fw-medium d-flex align-items-center">
            <i className="bi bi-arrow-up-right-square-fill pe-1 fs-5"></i>Favourites
          </Nav.Link>
          <Nav.Link href="#" className="fw-medium d-flex align-items-center">
            <i className="bi bi-envelope-fill pe-1 fs-5"></i>Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
