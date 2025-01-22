import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './MiniNavbar.css';

import React from 'react';

const MiniNavbar = () => {
  return (
    <Navbar className="container" id="navbar" expand="lg">
      <Container>
        <Nav className="me-auto" id="navbar_div">
          <Nav.Link as={Link} to="/speciality">
            <span className="navbar_text">Specialities</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/procedures">
            <span className="navbar_text">Procedures</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/prohealth">
            <span className="navbar_text">ProHealth</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MiniNavbar;
