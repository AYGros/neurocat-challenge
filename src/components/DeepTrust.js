import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";
import PartnerCard from './PartnerCard';

const DeepTrust = () => {

 const dtPartnerImage="https://images.unsplash.com/photo-1482747029550-096ad6aa9caf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZsb3dpbmclMjBpbmZvZ3JhcGhpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

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
                  <NavLink to="/construction" className="link">Login</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Sign Up</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavHashLink  to="/aidkit/#faqs" className="link">FAQs</NavHashLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/contact" className="link">Contact</NavLink>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      <div className="main-container">
        {/* -------------------intro section------------------------------------ */}
        <section id="deeptrust-header">
          <div className="header-container container">
          <Row className="justify-content-center">
            <h1 className="display-5">Why DeepTrust?</h1>
          </Row>
          <Row className="justify-content-around">
            <Col sm={6} md={3}>
              <Row className="justify-content-center">
              <span><i class="fas fa-certificate "></i></span>
              </Row>
              <Row className="justify-content-center">
                <p>Seal of Approval</p>
              </Row>
            </Col>
            <Col sm={6} md={3}>
            <Row className="justify-content-center">
              <span><i class="fas fa-shield-alt"></i></span>
              </Row>
              <Row className="justify-content-center">
                <p>Best Protection</p>
              </Row>
            </Col>
            <Col sm={6} md={3}>
            <Row className="justify-content-center">
              <span><i class="fas fa-chart-line"></i></span>
              </Row>
              <Row className="justify-content-center">
                <p>Competitive Advantage</p>
              </Row>
            </Col>
            <Col sm={6} md={3}>
            <Row className="justify-content-center">
              <span><i class="fas fa-users"></i></span>
              </Row>
              <Row className="justify-content-center">
                <p>Independent Team</p>
              </Row>
            </Col>
          </Row>
          </div>
        </section>
        {/* ---------------------product section-------------------------- */}
        <section id="deeptrust-product">
          <Row className="justify-content-center py-2">
            <h1 className="display-5">The Product</h1>
          </Row>
          <div className="deeptrust-banner">
          <div className="product-container container">
          
            <h1 className="display-4">DeepTrust</h1>
            <p>Is an AI risk, safety, security and privacy framework for all stakeholders. </p>
            <p>The acceptance of AI hinges on trust into the system. Thus, our quality seal and its related frameworks serve to create trust in your AI solutions. Calculate and cover your risks, be insured, monitor and control cyber-critical criteria with this unique platform.</p>
            <Row className="justify-content-end text-end">
              <Link to="/contact">
              <h6>Contact us for further details</h6>
              </Link>
            </Row>
           </div>
           </div>   
        </section>
        {/* --------------partners section------------------------ */}
        <section id="deeptrust-partners">
          <div className="product-container container justify-content-around text-center py-4">
          <h1 className="display-5">Our Partners</h1>
          <Row className="justify-content-around">
            <Col md={6} lg={3} className="p-4 ">
              <PartnerCard partnertype="" number="1" image={dtPartnerImage} />
            </Col>
            <Col md={6} lg={3} className="p-4">
             <PartnerCard partnertype="" number="5" image={dtPartnerImage}/>
            </Col>
            <Col md={6} lg={3} className="p-4">
              <PartnerCard partnertype="" number="3" image={dtPartnerImage}/>
            </Col>
            <Col md={6} lg={3} className="p-4">
              <PartnerCard partnertype="" number="20"image={dtPartnerImage} />
            </Col>
          </Row> 
          <Row className="justify-content-end text-end px-4">
              <Link to="/contact">
              <h6>Contact us for partnering</h6>
              </Link>
            </Row>       
          </div>
        </section>
      </div>
    </div>
  )
}

export default DeepTrust
