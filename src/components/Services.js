import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";

const Services = ({scrollWithOffset}) => {
  return (
    <div>
      <Navbar expand="md" bg="light" fixed="top" className="navbar py-3 " variant="light">
        <Container>
          <NavLink className="navbar-brand"  to="/">
          <img src={Logo} alt="neurocat logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">          
                <Nav.Link >
                  <NavHashLink to="/services/#offerings" className="link" scroll={el => scrollWithOffset(el)}>Offerings</NavHashLink>
                </Nav.Link>
                <Nav.Link>
                  <NavHashLink  to="/services/#service-projects" scroll={el => scrollWithOffset(el)}className="link">Service Projects</NavHashLink>
                </Nav.Link>
                <Nav.Link >
                  <NavHashLink to="/services/non-profit" scroll={el => scrollWithOffset(el)}className="link">Non-profit Projects</NavHashLink>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      <div className="main-container">
        <section id="offerings">
          <div className="info container">
          <h1 className="display-1">you are in the offerings section</h1>
          </div>
        </section>
        <section id="service-projects">
          <div className="info container">
          <h1 className="display-1">you are in the service-projects section</h1>
          </div>
        </section>
        <section id="non-profit">
          <div className="info container">
          <h1 className="display-1">you are in the non-profit section</h1>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
