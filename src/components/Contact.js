import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container, Card, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Navbar expand="md" bg="light" fixed="top" className="navbar py-3 " variant="light">
        <Container>
          <NavLink className="navbar-brand"  to="/">
          <img src={Logo} alt="neurocat logo" />
          </NavLink>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">          
                <Nav.Link >
                  <NavLink to="/" className="link">Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Products</NavLink>
                </Nav.Link>
                <Nav.Link >
                  <NavLink to="resources" className="link">Resources</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Team</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink  to="/construction" className="link">Careers</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/contact" className="link">Contact</NavLink>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
          </Container>
      </Navbar>
      <div className="main-container">
        <div className="background-banner ">
          <div className="container justify-content-center">
            <Card className="text-center contact-card">
              <Card.Body>
              <Card.Title>Contact us for more information</Card.Title>
              <Form>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first Name" />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                 <Form.Control type="text" placeholder="Enter last Name" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
      We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group controlId="role">
                  <Form.Label>Your Role</Form.Label>
                  <Form.Control type="text" placeholder="Enter current role" />
                </Form.Group>
                <Form.Group controlId="interest">
                  <Form.Label>You are interested in:</Form.Label>
                  <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                 </Form.Control>
                </Form.Group>
              </Form>
              
              </Card.Body>
            </Card>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
