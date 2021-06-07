import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";

const Home = ({scrollWithOffset}) => {

//   const scrollWithOffset = (el) => {
//     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//     const yOffset = -80; 
//     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
// }
  return (
    <div >
      <Navbar expand="md" bg="light" fixed="top" className="navbar py-3 " variant="light">
        <Container>
          <NavHashLink className="navbar-brand" smooth to="/#top">
          <img src={Logo} alt="neurocat logo" />
          </NavHashLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">          
                <Nav.Link >
                  <NavHashLink smooth to="/#top" className="link">Home</NavHashLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Products</NavLink>
                </Nav.Link>
                <Nav.Link >
                  <NavLink to="resources" className="link">Resources</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavHashLink  smooth to="/#team" scroll={el => scrollWithOffset(el)} className="link">Team</NavHashLink>
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
        <section id="who">
          <div className="info container">
          <h1 className="display-1">you are in the who section</h1>
          </div>
        </section>
        <section id="statements">
          <div className="info container">
          <h1 className="display-1">you are in the statements section</h1>
          </div>
        </section>
        <section id="products">
          <div className="info container">
          <h1 className="display-1">you are in the products section</h1>
          </div>
        </section>
        <section id="infografik">
          <div className="info container">
          <h1 className="display-1">you are in the infografik section</h1>
          </div>
        </section>
        <section id="projects">
          <div className="info container">
          <h1 className="display-1">you are in the statements section</h1>
          </div>
        </section>
        <section id="DINstandards">
          <div className="info container">
          <h1 className="display-1">you are in the DINstandards section</h1>
          </div>
        </section>
        <section id="customer-voice">
          <div className="info container">
          <h1 className="display-1">you are in the customer voice section</h1>
          </div>
        </section>
        <section id="team">
          <div className="info container">
          <h1 className="display-1">you are in the team section</h1>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
