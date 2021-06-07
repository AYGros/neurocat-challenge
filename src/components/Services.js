import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <Navbar expand="md" bg="light" fixed="top" className="navbar py-3 " variant="light">
        <Container>
          <NavLink className="navbar-brand"  to="/">
          <img src={Logo} alt="neurocat logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">          
                <Nav.Link >
                  <NavLink to="/" className="link">Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Products</NavLink>
                </Nav.Link>
                <Nav.Link >
                  <NavLink to="resources" className="link">Resources</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Team</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Careers</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/contact" className="link">Contact</NavLink>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      <div className="main-container">
        <section id="services-header">
          <div className="info container">
          <h1 className="display-1">you are in the services-header section</h1>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
