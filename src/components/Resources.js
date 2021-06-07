import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";

const Resources = ({scrollWithOffset}) => {
  return (
    <div>
      <Navbar expand="md" bg="light" fixed="top" className="navbar py-3" variant="light">
        <Container>
          <NavLink className="navbar-brand"  to="/">
          <img src={Logo} alt="neurocat logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">          
                <Nav.Link >
                  <NavHashLink smooth to="/resources/#use-cases" className="link" scroll={el => scrollWithOffset(el)}>Use Cases</NavHashLink>
                </Nav.Link>
                <Nav.Link>
                  <NavHashLink  smooth to="/resources/#publications" className="link" scroll={el => scrollWithOffset(el)}>Publications</NavHashLink>
                </Nav.Link>
                <Nav.Link >
                  <NavHashLink smooth to="/resources/#paper-cuts" scroll={el => scrollWithOffset(el)}className="link">Paper Cuts</NavHashLink>
                </Nav.Link>
                <Nav.Link>
                  <NavHashLink smooth to="/resources/#news" scroll={el => scrollWithOffset(el)}className="link">News</NavHashLink>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      <div className="main-container">
          <section id="use-cases">
            <div className="info container">
            <h1 className="display-1">you are in the use cases section</h1>
            </div>
          </section>
          <section id="publications">
            <div className="info container">
            <h1 className="display-1">you are in the publications section</h1>
            </div>
          </section>
          <section id="paper-cuts">
            <div className="info container">
            <h1 className="display-1">you are in the paper-cuts section</h1>
            </div>
          </section>
          <section id="news">
            <div className="info container">
            <h1 className="display-1">you are in the news section</h1>
            </div>
          </section>
      </div>
    </div>
  )
}

export default Resources
