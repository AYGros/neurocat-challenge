import React, {useState} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container, Card, Form, Button } from "react-bootstrap";
import Select from 'react-select';

const Contact = () => {
const history= useHistory();
const [clientInfo, setClientInfo]=useState({
  
});
const [validated,setValidated]=useState(false);
// const [formDemandsInfo, setFormDemandsInfo] = useState(false);
// const [formComplete, setFormComplete]= useState(false);



const handleChangeForm=(e)=>{

  setClientInfo(
    (prevState)=>{
      return{
        ...prevState, [e.target.name]: e.target.value
      }            
    }

  )
  
      
 }

const methods = [
  {value:"method1",
  label: "method1"},
  {value:"method2",
  label: "method2"},
  {value:"method3",
  label: "method3"}
]

const handleMethods = (e) => {
  setClientInfo((prevState) => ({ ...prevState, method: e }));
};


const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  setValidated(true);

};


  return (
    <div>
      <Navbar expand="md" bg="light" fixed="top" className="navbar py-3 " variant="light">
        <Container>
          <NavLink className="navbar-brand"  to="/">
          <img src={Logo} alt="neurocat logo" />
          </NavLink>
          
          </Container>
      </Navbar>
      {/* -----------------Form section-------------------------------- */}
      <div className="main-container">
        <div className="form-background">
          <div className="contact-form container justify-content-center">
            <Card className="text-left contact-card">
              <Card.Body>
              <Card.Title>Contact us for more information</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder="Enter first Name" 
                  name="firstName" 
                  value={clientInfo.firstName} 
                  onChange={handleChangeForm}
                  required
                  />
                  <Form.Text>required</Form.Text>
                  <Form.Control.Feedback type="invalid">please enter your first name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                 <Form.Control 
                 type="text" 
                 placeholder="Enter last Name" 
                 name="lastName"
                 value={clientInfo.lastName} 
                 onChange={handleChangeForm}
                 required
                 />
                 <Form.Text>required</Form.Text>
                  <Form.Control.Feedback type="invalid">please enter your last name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  name="email"
                  value={clientInfo.email}
                  onChange={handleChangeForm}
                  required
                  />
                  <Form.Text>required</Form.Text>
                  <Form.Control.Feedback >please enter your last name</Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="phone" >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder="Enter phone number" 
                  name="phone"
                  value={clientInfo.phone}
                  onChange={handleChangeForm}
                  />
                </Form.Group>
                <Form.Group controlId="role">
                  <Form.Label>Your Role</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder="Enter current role" 
                  name="role"
                  value={clientInfo.role}
                  onChange={handleChangeForm}
                  required
                  />
                  <Form.Text>required</Form.Text>
                  <Form.Control.Feedback type="invalid">please enter your last name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="interest">
                  <Form.Label>You are interested in:</Form.Label>
                  
                  <Form.Control
                   as="select" 
                   name="interest" 
                   selected={clientInfo.interest}
                   onChange={handleChangeForm}
                   required
                   >
                  <option value="">select an option ...</option>
                  <option value="Option1">Option 1</option>
                  <option value="Option2">Option 2</option>
                  <option value="Option3">Option 3</option>
                  <option value="Option4">Option 4</option>
                 </Form.Control>
                 <Form.Text>required</Form.Text>
                  <Form.Control.Feedback type="invalid">please enter your last name</Form.Control.Feedback>
                </Form.Group>
                  {clientInfo.interest && (
                   <div>
                    <Form.Group controlId="modeltesting-method">
                        <Form.Label>How are you currently testing your models?</Form.Label>
                        <Select options={methods}
                          onChange={handleMethods}
                          placeholder="select method"
                          isMulti
                          id="method"
                          name="method"
                          type="method"
                          />
                    </Form.Group>
                    <Form.Group controlId="modeltesting-frequency">
                    <Form.Label>How often do you test your models?</Form.Label>
                    <div key="inline-radio">
                    <Form.Check 
                    inline label="frequency1" 
                    name="testFrequency" 
                    type="radio" 
                    id="radio-1" 
                    value="testFrequency1"
                    checked={clientInfo.testFrequency === "testFrequency1"}
                    onChange={handleChangeForm}
                    />
                    <Form.Check 
                    inline label="frequency2" 
                    name="testFrequency" 
                    type="radio" 
                    id="radio-2" 
                    value="testFrequency2"
                    checked={clientInfo.testFrequency === "testFrequency2"}
                    onChange={handleChangeForm}
                    />
                    <Form.Check 
                    inline label="frequency2" 
                    name="testFrequency" 
                    type="radio" 
                    id="radio-3" 
                    value="testFrequency3"
                    checked={clientInfo.testFrequency === "testFrequency3"}
                    onChange={handleChangeForm}
                    />
                    </div>
                </Form.Group>
                </div>
                  )}
              <Button type="submit">Submit Form</Button>
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
