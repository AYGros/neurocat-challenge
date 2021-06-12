import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import AidKitLogo from "../images/aidkit_logo.png";
import TestMonitor from "../images/testbed_monitor.png";
import AddOn from "../images/add_on.png";
import { Navbar, Nav, Container, Row, Col, Image, Card, Accordion, Button, ListGroup, Figure } from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";
import currentCustomers from "../assets/currentCustomers.json";
import CustomerFigure from "./CustomerFigure";
import VideoEmbed from "./VideoEmbed";
import FAQCard from './FAQCard';
import faqs from "../assets/faqs.json"

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
                  <NavHashLink  to="/aidkit/#video" scroll={el => scrollWithOffset(el)}className="link">Approach</NavHashLink>
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
        {/* ---------------header section----------------------------------- */}
        <section id="aidkit-about">
          <div className="header-container container">
            <Row className="text-left align-items-center">
              <Col md={4}>
              <Image src="https://www.neurocat.ai/wp-content/uploads/2018/11/addkit-hori.png" fluid/>
              </Col>
              <Col md={8}>
                <h6>aidkit and how it can help companies</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis velit dignissimos, perspiciatis quibusdam voluptates soluta quis numquam illo magnam iste.</p>
              </Col>
            </Row>
          </div>
        </section>
        {/* -------------------approach/video section------------------------------ */}
        <section id="video">
          <div className="video-container container text-center">
          <h4>Watch the video of our TechAcademy talk</h4>
            <VideoEmbed embedId="yieJPzkshww"/>
          </div>
        </section>
        {/* -----------------testbed and monitor section----------------- */}
        <section id="test-and-monitor">
          <div className="test-monitor-container container text-left">
            <Row className="align-items-center">
              <Col md={5}>
              <Image className="aidkit-image" src={TestMonitor} fluid/>
              </Col>
              <Col md={7}>
              <h4>Testbed & Monitor</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam alias assumenda eveniet tempora, maxime laborum iusto quibusdam officiis. Velit distinctio blanditiis mollitia voluptate eos labore saepe sed ducimus nostrum expedita reiciendis inventore perferendis vitae necessitatibus quos, dignissimos, soluta officia! Modi placeat nulla nemo sed sint voluptates quo! Deleniti, ducimus.</p>
              </Col>
            </Row>
          </div>
        </section>
        {/* ------------------- AddOn section----------------------------*/}
        <section id="addOn">
          <div className="addOn-container container text-right">
          <Row className="flex-wrap-reverse align-items-center">
            <Col md={7}>
              <h4>AddOn Protect & Explain</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis harum aliquid necessitatibus porro rerum sed voluptate nostrum consectetur dolores ipsum veritatis suscipit repellat, libero fugiat minima dolorem. Ipsam cumque repellat facere porro. Vero dicta praesentium voluptas ipsum explicabo dolorum soluta, error voluptatum, natus enim ad possimus. Totam, quaerat quo.</p>
            </Col>
            <Col md={5}>
              <Image className="aidkit-image" src={AddOn} fluid/>
            </Col>
          </Row>
          </div>
        </section>
        {/* ----------------features section----------------------------- */}
        <section id="features">
          <div className="features-container container">
          <Row > 
            <Col md={4}>
              <Row className="align-items-center justify-content-center">
                <Col xs="auto">
                <i className="far fa-check-circle"></i>
                </Col>
                <Col >
                <h4>Robustness</h4>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
            <Row className="align-items-center justify-content-center">
                <Col xs="auto">
                <i className="far fa-check-circle"></i>
                </Col>
                <Col>
                <h4>Explainability</h4>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
            <Row className="align-items-center justify-content-center">
                <Col xs="auto">
                <i className="far fa-check-circle"></i>
                </Col>
                <Col >
                <h4>Functionality</h4>
                </Col>
              </Row>
            </Col>
          </Row>
          </div>
        </section>
        {/* -----------------why aidkit section----------------------- */}
        <section id="why-aidkit">
          <div className="why-container container py-3">
          <Row className="justify-content-center py-2">
            <h1 className="display-4">Why choose aidkit?</h1>
          </Row>
          <Row className="py-2">
            <Col md={6}>
              <Row>
              <Col xs="auto">
                <Image src={AidKitLogo} className="aidkit-logo fluid"/>
              </Col>
              <Col >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae architecto reprehenderit quas ab vero maiores deleniti sint totam odio!</p>
              </Col>
              </Row>
            </Col>
            
            <Col md={6}>
              <Row>
              <Col xs="auto">
                <Image src={AidKitLogo} className="aidkit-logo fluid"/>
              </Col>
              <Col >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae architecto reprehenderit quas ab vero maiores deleniti sint totam odio!</p>
              </Col>
              </Row>
            </Col>

          </Row>
          <Row className="py-2">
            <Col md={6}>
              <Row>
              <Col xs="auto">
                <Image src={AidKitLogo} className="aidkit-logo fluid"/>
              </Col>
              <Col >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae architecto reprehenderit quas ab vero maiores deleniti sint totam odio!</p>
              </Col>
              </Row>
            </Col>
            
            <Col md={6}>
              <Row>
              <Col xs="auto">
                <Image src={AidKitLogo} className="aidkit-logo fluid"/>
              </Col>
              <Col >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae architecto reprehenderit quas ab vero maiores deleniti sint totam odio!</p>
              </Col>
              </Row>
            </Col>

          </Row>
          <Row className="py-2">
            <Col md={6}>
              <Row>
              <Col xs="auto">
                <Image src={AidKitLogo} className="aidkit-logo fluid"/>
              </Col>
              <Col >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae architecto reprehenderit quas ab vero maiores deleniti sint totam odio!</p>
              </Col>
              </Row>
            </Col>
            
            <Col md={6}>
              <Row>
              <Col xs="auto">
                <Image src={AidKitLogo} className="aidkit-logo fluid"/>
              </Col>
              <Col >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae architecto reprehenderit quas ab vero maiores deleniti sint totam odio!</p>
              </Col>
              </Row>
            </Col>

          </Row>

          </div>
        </section>
        {/* ------------------------How aidkit works section--------------- */}
        <section id="works-how">
          <div className="works-how-container container text-center">
          <h1 className="display-5">How does it work?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam quas nobis dolorem labore minus aliquid sunt facilis? Necessitatibus id possimus eius praesentium facere molestiae doloremque quibusdam, quasi itaque eveniet blanditiis modi cupiditate animi laborum. Incidunt, rerum illum, quam nostrum enim molestiae, eaque eos veritatis repellendus animi excepturi quas aspernatur fugiat fugit labore accusamus cumque. Tempore voluptatibus sit nesciunt dolore.</p>
          </div>
        </section>
        {/* ---------------------------current customers section----------- */}
        <section id="current-customers">
          <div className="curr-customers-container container text-center">
          <h1 className="display-5">Our current customers</h1>
          <Row className="justify-content-around">
          {currentCustomers.customers.map( customer=>{
            return (
              <Fragment key={customer.id}>
                <CustomerFigure  customer={customer}/>
              </Fragment>
              )
          } )}
          </Row>
          </div>
        </section>
        {/* -----------------pricing section-------------- */}
        <section id="pricing">
          <div className="pricing-container container text-center">
          <h1 className="display-5">Pricing</h1>
          <h4><Link to="/contact"><Button  variant="info"><h4 className="price-button">Contact us</h4></Button></Link> to discuss pricing</h4>
          </div>
        </section>
        {/* -------------FAQ section------------------------ */}
        <section id="faqs">
          <div className="faq-container container p-5">
            <Row className="justify-content-center">
              <h1 className="display-5"> FAQ </h1>
            </Row>
            <Accordion className="accordion" >
              {
                faqs.questions.map(
                  (questions => {
                    return (
                      <Fragment>
                        <FAQCard questions={questions}/>
                      </Fragment>
                    )
                  })
                )
              }
            </Accordion>
         
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default Aidkit
