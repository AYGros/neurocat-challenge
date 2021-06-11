import React, { Fragment} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";
import useCases from "../assets/useCases.json";
import ownPublications from "../assets/ownPublications.json";
import SlideCard from './SlideCard';


//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  autoplay: false,
  loop:true,
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 3,
      }
  },
};



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
                  <NavHashLink smooth to="/resources/#paper-cuts" scroll={el => scrollWithOffset(el)}className="link">PaperCats</NavHashLink>
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
            <div className="use-cases-container container text-center">
              <h1  className="pb-2 display-5">Use Cases</h1>
                <Row className="justify-content-center">
                  {console.log("hello")}
                  <OwlCarousel  className="owl-theme" {...options}>
                      {
                      useCases.cases.map( (cases) => {
  
                        return (
                          <Fragment key={cases.id}>
                            <SlideCard cases={cases}/>
                          </Fragment>
                        )
                      })}
                 </OwlCarousel>
               </Row> 
            </div>
          </section>
          <section id="publications">
            <div className="info container">
            <h1  className="pb-2 display-5">Own Publications</h1>
                <Row className="justify-content-center">
                  {console.log("hello")}
                  <OwlCarousel  className="owl-theme" {...options}>
                      {
                      ownPublications.cases.map( (cases) => {
                        return (
                          <Fragment key={cases.id}>
                            <SlideCard cases={cases}/>
                          </Fragment>
                        )
                      })}
                 </OwlCarousel>
               </Row> 

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
