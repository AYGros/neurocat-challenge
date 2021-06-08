import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap";
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
      <section id="services-overview">
          <div className="services-overview container">
          <Row className="justify-content-center">
            <h1 className="display-5">Overview on neurocat labs</h1>
          </Row>
          <Row className="justify-content-around">
            <Col md={4}>
              <Row className="justify-content-center">
              <Image src="https://www.neurocat.ai/wp-content/uploads/2018/11/Research.png"></Image>
              </Row>
              <Row className="justify-content-center">
                <h4>Research</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda ipsum. Officiis consequatur accusantium beatae, libero totam autem blanditiis est.</p>
              </Row>
            </Col>
            <Col md={4}>
            <Row className="justify-content-center">
              <Image src="https://www.neurocat.ai/wp-content/uploads/2018/11/Consulting.png"></Image>
              </Row>
              <Row className="justify-content-center">
              <h4>Consulting</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda ipsum. Officiis consequatur accusantium beatae, libero totam autem blanditiis est.</p>
              </Row>
            </Col>
            <Col md={4}>
            <Row className="justify-content-center">
              <Image src="https://www.neurocat.ai/wp-content/uploads/2018/11/Analysis.png"></Image>
              </Row>
              <Row className="justify-content-center">
              <h4>Analysis</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda ipsum. Officiis consequatur accusantium beatae, libero totam autem blanditiis est.</p>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-around">
            <Col md={4}>
              <Row className="justify-content-center">
              <Image src="https://www.neurocat.ai/wp-content/uploads/2018/11/Debugging.png"></Image>
              </Row>
              <Row className="justify-content-center">
              <h4>Optimization</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda ipsum. Officiis consequatur accusantium beatae, libero totam autem blanditiis est.</p>
              </Row>
            </Col>
            <Col md={4}>
            <Row className="justify-content-center">
            <Image src="https://www.neurocat.ai/wp-content/uploads/2018/11/Improvement.png"></Image>
              </Row>
              <Row className="justify-content-center">
              <h4>Governance</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda ipsum. Officiis consequatur accusantium beatae, libero totam autem blanditiis est.</p>
              </Row>
            </Col>
            <Col md={4}>
            <Row className="justify-content-center">
              <Image src="https://www.neurocat.ai/wp-content/uploads/2018/11/DevOps.png"></Image>
              </Row>
              <Row className="justify-content-center">
              <h4>DevOps</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda ipsum. Officiis consequatur accusantium beatae, libero totam autem blanditiis est.</p>
              </Row>
            </Col>
          </Row>

          </div>
        </section>
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
