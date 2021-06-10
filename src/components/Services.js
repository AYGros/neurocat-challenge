import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container, Row, Col, Image, Figure } from "react-bootstrap";
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
                  <NavHashLink to="/services/#services-overview" className="link" scroll={el => scrollWithOffset(el)}>Offerings</NavHashLink>
                </Nav.Link>
                <Nav.Link>
                  <NavHashLink  to="/services/#service-projects" scroll={el => scrollWithOffset(el)}className="link">Service Projects</NavHashLink>
                </Nav.Link>
                <Nav.Link >
                  <NavHashLink to="/services/#non-profit" scroll={el => scrollWithOffset(el)}className="link">Non-profit Projects</NavHashLink>
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
        {/* -----------------------offerings section----------------------------- */}
        <section id="offerings">
          <div className="offerings-container container-fluid justify-content-center text-center">
          <h1 className="display-5 pb-3">What do neurocat labs provide?</h1>
          <Row className="align-items-center ">
            <Col lg={9}>
              <Row>
            <Col sm={6} lg={2}>
            <Row className="justify-content-center align-items-center">
              <Col sm={9}>
            <Figure>
              <Figure.Image className="labsinfo-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/05/icon-11-1.png"/>   
              <Figure.Caption className="labsinfo-caption text-center">Research</Figure.Caption>
            </Figure>
            </Col>
            <Col sm={3}>
            <i class="fas fa-ellipsis-h"></i>
            </Col>
            </Row>
            </Col>
            <Col sm={6} lg={2} >
            <Row className="justify-content-center align-items-center">
              <Col sm={9} >
            <Figure>
              <Figure.Image className="labsinfo-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/05/icon-10-1.png" />   
              <Figure.Caption className="labsinfo-caption text-center">Consult</Figure.Caption>
            </Figure>
            </Col>
            <Col sm={3}>
            <i class="fas fa-ellipsis-h"></i>
            </Col>
            </Row>
            </Col>
            <Col sm={6} lg={2} >
            <Row className="justify-content-center align-items-center">
              <Col sm={9}>
            <Figure>
              <Figure.Image className="labsinfo-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/05/icon-10_1.png" />   
              <Figure.Caption className="labsinfo-caption text-center">Analyze</Figure.Caption>
            </Figure>
            </Col>
            <Col sm={3}>
            <i class="fas fa-ellipsis-h"></i>
            </Col>
            </Row>
            </Col>
            <Col sm={6} lg={2}>
            <Row className="justify-content-center align-items-center">
              <Col sm={9}>
            <Figure>
              <Figure.Image className="labsinfo-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/05/icon-12-1.png"/>   
              <Figure.Caption className="labsinfo-caption text-center">Monitor</Figure.Caption>
            </Figure>
            </Col>
            <Col sm={3}>
            <i class="fas fa-ellipsis-h"></i>
            </Col>
            </Row>
            </Col>
            <Col sm={6} lg={2} >
             <Row className="justify-content-center align-items-center">
            <Col sm={9}>
              
            <Figure>
              <Figure.Image className="labsinfo-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/05/icon-13_1.png"/>   
              <Figure.Caption className="labsinfo-caption text-center">Improve</Figure.Caption>
            </Figure>
            </Col>
            <Col sm={3}>
            <i class="fas fa-ellipsis-h"></i>
            </Col>
            </Row> 
            </Col>
            <Col sm={6}  lg={2}>
            <Row className="justify-content-center align-items-center">
              <Col sm={9}>
            <Figure>
              <Figure.Image className="labsinfo-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/05/icon-03-1.png"/>   
              <Figure.Caption className="labsinfo-caption text-center">Governance</Figure.Caption>
            </Figure>
            </Col>
            <Col sm={3} >
            <i class="fas fa-ellipsis-h"></i>
            </Col>
            </Row>
            </Col>
            </Row>
            </Col>
            <Col  lg={2}>
            
            <img className="wordcat lg-full-width" src="https://www.neurocat.ai/wp-content/uploads/2018/06/finalcordcloud.png" />
            
            </Col>
          </Row>
          </div>
        </section>
        {/* --------------------service projects section-------------------------- */}
        <section id="service-projects">
        <div className="service-projects-container container text-center">
            <h1 className="display-5">neurocat labs past industry projects / service projects</h1>
            <Row>
            <Col md={6}>
              <div className="past-service-item">
              <i class="far fa-check-circle"></i>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ducimus nostrum possimus perspiciatis, soluta debitis?</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="past-service-item">
              <i class="far fa-check-circle"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vero fugiat accusantium veniam natus ratione!</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="past-service-item">
                <div></div>
                <i class="far fa-check-circle"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vero fugiat accusantium veniam natus ratione!</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="past-service-item">
                <i class="far fa-check-circle"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vero fugiat accusantium veniam natus ratione!</p>
              </div>
            </Col>
          </Row>
          <Row>
           <Col md={6}>
            <div className="past-service-item">
            <i class="far fa-check-circle"></i>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vero fugiat accusantium veniam natus ratione!</p>
            </div>
           </Col>
          </Row>

          </div>
        </section>
        {/* ---------------------------non-profit section-------------------------- */}
        <section id="non-profit">
          <div className="non-profit-container container text-center">
            <h1 className="display-5">Our Non-Profit Projects</h1>
          <Row>
            <Col md={6}>
              <div className="non-profit-item">
                <Image className="cat-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/11/cat.png"/>
                <p>Open Source Analysis, Optimization and Debugging Framework #aidkit.ai</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="non-profit-item">
                <Image className="cat-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/11/cat.png"/>
                <p>Chairman Germany DIN/ISO/IEEE/IEC JTC1 SC42 – Artificial Intelligence</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="non-profit-item">
                <Image className="cat-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/11/cat.png"/>
                <p>Initiator DIN SPEC (PAS) 92001-1/-2 Requirements Life Cycle Artificial intelligence</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="non-profit-item">
                <Image className="cat-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/11/cat.png"/>
                <p>VDA Leitinitiative “Protection of AI-based computer vision modules”</p>
              </div>
            </Col>
          </Row>
          <Row>
           <Col md={6}>
            <div className="non-profit-item">
              <Image className="cat-icon" src="https://www.neurocat.ai/wp-content/uploads/2018/11/cat.png"/>
              <p>SAE/DIN SPEC (PAS) “Taxonomy Autonomous Driving”</p>
            </div>
           </Col>
          </Row>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
