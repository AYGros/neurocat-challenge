import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";

const Aidkit = ({scrollWithOffset}) => {
  return (
    <div>
      <Navbar expand="md" bg="light" fixed="top" className="navbar py-3 " variant="light">
        <Container>
          <NavLink className="navbar-brand"  to="/" >
          <img src={Logo} alt="neurocat logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">          
                <Nav.Link >
                  <NavHashLink to="/aidkit/#aidkit-about" className="link" scroll={el => scrollWithOffset(el)}>What is aidkit?</NavHashLink>
                </Nav.Link>
                <Nav.Link>
                  <NavHashLink  to="/aidkit/#approach" scroll={el => scrollWithOffset(el)}className="link">Approach</NavHashLink>
                </Nav.Link>
                <Nav.Link >
                  <NavHashLink to="/aidkit/#pricing" scroll={el => scrollWithOffset(el)}className="link">Pricing</NavHashLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Login</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavHashLink  to="/aidkit/#faqs" scroll={el => scrollWithOffset(el)} className="link">FAQs</NavHashLink>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      <div className="main-container">
        <section id="aidkit-about">
          <div className="info container">
          <h1 className="display-1">you are in the waht is aidkit section</h1>
          </div>
        </section>
        <section id="approach">
          <div className="info container">
          <h1 className="display-1">you are in the waht is approach section</h1>
          </div>
        </section>
        <section id="pricing">
          <div className="info container">
          <h1 className="display-1">you are in the pricing section</h1>
          </div>
        </section>
        <section id="faqs">
          <div className="info container">
          <h1 className="display-1">you are in the FAQs section</h1>
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default Aidkit
