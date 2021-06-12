import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container, Row, Col, Image, Button } from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";
import TeamModal from './TeamModal';

const Home = ({scrollWithOffset}) => {

const [modalShow, setModalShow]=useState(false);  

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
        {/* -----------------info section---------------------------------- */}
        <section id="who">
          <div className="who-container container text-center">
          <h1 className="display-4">Who/What is neurocat?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facere impedit voluptate maiores aspernatur placeat nesciunt facilis minima delectus molestias odit natus numquam quisquam dolorem perferendis blanditiis tenetur assumenda beatae, obcaecati incidunt provident ea iure a. Tempora nihil, culpa explicabo, ipsam, deleniti totam distinctio consequatur nobis possimus iure eius ea?</p>
          </div>
        </section>
        {/* -------------------------statements section-------------------------- */}
        <section id="statements">
          <div className="statements-container container py-4 text-left">
          <Row className="justify-content-around">
            <Col md={6} className="d-flex justify-content-center">
              <Row className="justify-content-start">
                <Col lg={4} className="py-3">
                  <Image className="statementImage" src="https://www.neurocat.ai/wp-content/uploads/2018/05/about.jpg" fluid rounded></Image>
                </Col>
                <Col lg={8} className="p-3">
                  <h4 >Our Mission</h4>
                  <p>The neurocat GmbH was founded in 2017 with the goal of shaping our modern world through the use of AI safety & security technologies. Today, we help companies to implement modern AI systems that are safe & secure with respect to functionality, comprehensibility and robustness. With the help of our quality tools we can also help you to develop reliable AI solutions for your business.</p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
            <Row className="justify-content-start">
                <Col lg={4} className="py-3" >
                  <Image className="statementImage" src="https://images.unsplash.com/photo-1533497197926-c9e810dcea9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGFpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" fluid rounded style={{objectFit: 'cover'}}></Image>
                </Col>
                <Col lg={8} className="p-3">
                  <h4 >Our Vision</h4>
                  <blockquote className="blockquote text-left">
                   <p>„We are drowning in information but starved for knowledge“ </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">John Naisbitt</cite>
                    </footer>
                  </blockquote>
                  <p>Neurocat strives to live in an explainable digital world, where society benefits from safe, accessible and transparent AI technologies. Our goal is to build up trust and confidence for AI solutions by integrating innovative AI Quality applications.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          </div>
        </section>
        {/*  ------------------------products section----------------------------- */}
        <section id="products">
          <div className="products-container container my-4">
            <Row className="justify-content-between text-center">
              <Col md={4} className="p-3">
                <Row className="justify-content-center pt-3">
                  <Link to="/services">
                    <Image className="product-image" src="https://www.neurocat.ai/wp-content/uploads/2018/11/cat.png"></Image>
                  </Link>
                </Row>
                <h4>AI Quality Services</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, debitis.</p>
              </Col>
              <Col md={4} className="p-3">
              <Row className="justify-content-center pt-3">
                <Link to="/aidkit">
                  <Image className="product-image" src="https://www.neurocat.ai/wp-content/uploads/2018/11/aidkit.png"></Image>
                </Link> 
              </Row>
                <h4>aidkit</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, debitis.</p>
              </Col>
              <Col md={4} className="p-3">
              <Row className="justify-content-center pt-3">
                <Link to="/deeptrust">
                  <Image className="product-image" src="https://www.neurocat.ai/wp-content/uploads/2018/11/deeptrust_siegel.png"></Image>
                </Link>
              </Row>
                <h4>DeepTrust</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, debitis.</p>
              </Col>
            </Row>
          </div>
        </section>
        {/* --------------------infografik section----------------------------- */}
        <section id="infografik">
          <div className="grafik-container container text-center justify-content around">
          <h1 className="display-4 py-3">Why does AI matter?</h1>
          <Row className="justify-content-around">
            <Col className="pb-3" sm={4} md={2}>
              <Row className="justify-content-center">
                <Col xs={2} sm={12}>
                  <Image src="https://www.neurocat.ai/wp-content/uploads/2018/05/tick.png"></Image>  
                </Col>
                <Col className="py-3" xs={6} sm={12}>
                  <p>More Trust for Customers</p>
                </Col>
              </Row>
            </Col>
            <Col className="pb-3" sm={4} md={2}>
            <Row className="justify-content-center">
                <Col xs={2} sm={12}>
                  <Image src="https://www.neurocat.ai/wp-content/uploads/2018/05/tick.png"></Image>  
                </Col>
                <Col className="py-3" xs={6} sm={12}>
                  <p>Unique AI Quality IP</p></Col>
              </Row>
            </Col>
            <Col className="pb-3" sm={4} md={2}>
            <Row className="justify-content-center">
                <Col xs={2} sm={12}>
                  <Image src="https://www.neurocat.ai/wp-content/uploads/2018/05/tick.png"></Image>  
                </Col>
                <Col className="py-3" xs={6} sm={12}>
                  <p>Save Time & Iteration Costs</p></Col>
              </Row>
            </Col>
            <Col className="pb-3" sm={4} md={2}>
            <Row className="justify-content-center">
                <Col xs={2} sm={12}>
                  <Image src="https://www.neurocat.ai/wp-content/uploads/2018/05/tick.png"></Image>  
                </Col>
                <Col className="py-3" xs={6} sm={12}>
                  <p>Cpmptetitive Advantage</p>
                  </Col>
              </Row>
            </Col>
            <Col className="pb-3" sm={4} md={2}>
            <Row className="justify-content-center">
                <Col xs={2} sm={12}>
                  <Image src="https://www.neurocat.ai/wp-content/uploads/2018/05/tick.png"></Image>  
                </Col>
                <Col className="py-3" xs={6} sm={12}>
                  <p>Reduce Risk</p>
                  </Col>
              </Row>
            </Col>

          </Row>
          </div>
        </section>
        {/*  ------------------------------projects section----------------------------- */}
        <section id="projects">
          <div className="projects-container container text-left py-4">
          <Row >
            <Col md={4}>
              <Image className="projects-image" rounded src="https://www.neurocat.ai/wp-content/uploads/2018/06/our-vision.jpg" ></Image>
            </Col>
            <Col md={8}>
             <h4>neurocat's past industry <Link to="/services">projects</Link> / outcomes / <Link to="/deeptrust#partners">partners</Link></h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus iusto reprehenderit fugiat ullam voluptatibus! Ut sint odit recusandae molestiae?</p>
            </Col>
          </Row>
          </div>
        </section>
        <section id="DINstandards">
          <div className="DIN-container container text-right py-4">
          <Row className="flex-wrap-reverse" >
            <Col md={10}>
             <h4>neurocat's work with <Link to="/DINstandards">DIN Standard</Link></h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus iusto reprehenderit fugiat ullam voluptatibus! Ut sint odit recusandae molestiae?</p>
            </Col>
            <Col md={2}>
              <Link to="/DINstandards">
              <Image className="DIN-image" rounded src="https://www.neurocat.ai/wp-content/uploads/2018/05/admin-ajax.jpg" ></Image></Link>
            </Col>
          </Row>
          </div>
        </section>
        {/* --------------------customer voice section----------------------------- */}
        <section id="customer-voice" className="py-4">
          <div className="voices-container container text-center py-4">
            <h4 className="display-5">This is what our costumers say</h4>
            <blockquote class="blockquote text-center">
                   <h1 className="display-4">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum fuga ipsam unde libero ratione quisquam sit vero. Eveniet, corrupti! "</h1>
                    <footer class="blockquote-footer">
                      <h6 title="Source Title">Customer Name</h6>
                    </footer>
                  </blockquote>
          </div>
        </section>
        {/* -------------------------team section------------------------------------- */}
        <section id="team">
          <div className="team-container container text-center">
          <div className="row justify-content-center py-2">
            <Button className="btn btn-primary btn-lg text-light" onClick={() => setModalShow(true)} >Our Team</Button>
            <TeamModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            </div>
          <img src="https://www.neurocat.ai/wp-content/uploads/2018/05/our-team.jpg" alt="team picture" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
