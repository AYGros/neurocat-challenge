import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <div>
      
      <Navbar expand="md" bg="light" fixed="top" className="py-3 "className="navbar py-3" variant="light">
        <Container>
          <NavLink className="navbar-brand"  to="/">
          <img src={Logo} alt="neurocat logo" />
          </NavLink>
         </Container>
      </Navbar>
      
      <div className="main-container">
        <section id="construction-message">
          <div className="simple-background">
          <div className="info container">
            <h1 className="display-1" style={{
              color:"tomato"
            }}>404 ERROR</h1>
          <h1 className="display-1">Sorry, what you are looking for does not seem to exist</h1>
          </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default PageNotFound
