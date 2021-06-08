import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/neurocat_website_logo.png";
import { Navbar, Nav, Container, Row, Col, Image, Card } from "react-bootstrap";
import DownloadLink from './DownloadLink';

const DINStandards = () => {
  return (
    <div>
      <Navbar expand="md" bg="light" fixed="top" className=" navbar py-3 " variant="light">
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
        {/* ----------------DIN intro section-------------------------------- */}
        <section id="DIN-overview">
          <div className="header-container container">
          <Row className="justify-content-center">
            <h1 className="display-5">Overview on DIN</h1>
          </Row>
          <Row className="text-left">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere voluptatibus sint tempora, minima saepe quis aperiam maiores porro, tempore nesciunt tenetur officia praesentium rem quisquam, voluptatum perferendis laborum. Cumque a at nam repellendus amet voluptatum nesciunt sunt culpa, blanditiis hic aspernatur doloremque voluptates ex, similique maxime voluptatem deserunt, eius ipsam aliquid quisquam quas quae. Minus nisi velit ullam. Asperiores totam blanditiis quam iure quisquam iusto voluptas similique quas deserunt saepe nesciunt sequi labore neque sint illum facilis recusandae, eius possimus dicta? Ab eveniet debitis non nesciunt repellendus. Provident fugiat odit esse dolores quibusdam voluptas quos nostrum. Culpa, at inventore?</p>
          </Row>
          </div>
        </section>
        {/* -----------DIN92001-1 standards section */}
        <section id="DIN92001-1">
          <div className="DIN-container container text-left py-4">
          <Row>
            <Col md={2} className="pb-3 pt-2">
              
              <Image className="DIN-image" rounded src="https://www.neurocat.ai/wp-content/uploads/2018/05/admin-ajax.jpg" ></Image>
            </Col>
            <Col md={10}>
             <h4>Overview on DIN 92001-1</h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam doloribus iste non consequuntur cupiditate reprehenderit perferendis ipsam labore laudantium? Blanditiis deserunt, fuga facere autem mollitia minima? A quis pariatur, voluptates numquam accusantium facilis laboriosam, atque molestiae voluptatibus quibusdam eos! Architecto dicta, commodi cum sint eaque reprehenderit incidunt qui iste.</p>
             <DownloadLink />
            </Col>
          </Row>
          </div>
        </section>
        {/* -------------DIN92001-2 standards section---------------------------------- */}
        <section id="DIN92001-2">
          <div className="DIN-container container text-right py-4">
          <Row className="flex-wrap-reverse">
            <Col md={10} className="pb-2">
             <h4>Overview on DIN 92001-2</h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur fugit eius ipsa reprehenderit, at qui quisquam quibusdam! Sed sunt magnam maxime expedita dolorum explicabo adipisci asperiores accusamus, suscipit doloribus illum debitis aliquid impedit iste cum quod voluptates consectetur? Sint culpa odit, laudantium consequatur quidem distinctio laboriosam vel quisquam placeat.</p>
             <DownloadLink />
            </Col>
            <Col md={2} className="pb-3">
              
              <Image className="DIN-image" rounded src="https://www.neurocat.ai/wp-content/uploads/2018/05/admin-ajax.jpg" ></Image>
            </Col>
          </Row>
          </div>
        </section>
        {/* -----------------what next section-------------------- */}
        <section id="what-next">
          <div className="what-next-container container">
          <Row className="justify-content-center">
            <h1 className="display-5">What's next?</h1>
          </Row>
          <div className="text-left">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quos ad distinctio reiciendis nisi, alias libero commodi itaque ratione voluptates quisquam architecto expedita minus provident, quam eveniet aut dolorum, nesciunt fuga quibusdam soluta accusamus obcaecati eum ab. Dolorem ab ut, dolorum velit nesciunt facilis eius nobis et numquam quo laborum voluptatum expedita quae perspiciatis omnis ea sed fuga dolores accusantium adipisci iste. Inventore ea reiciendis laboriosam est voluptate odio, id repudiandae illo velit excepturi. Tenetur soluta nulla at temporibus officia consequatur provident unde, ut cupiditate quos non facilis dolore dicta, eius rem. Explicabo nemo quo repellendus neque dolor repudiandae aliquid?</p>
          </div>
          </div>
        </section>
        {/* ------------DIN partners section------------------------------------ */}
        <section id="DIN-partners">
          <Row className="justify-content-center">
            <h1 className="display-5">
              DIN Partners
            </h1>
          </Row>
          <div class="DIN-partners-container container">
          <Row className="justify-content-around">
            <Col md={6} lg={3} className="p-4 ">
            <Card className="partner-card" style={{ width: 'auto' }}>
              <Card.Img variant="top" src="https://www.neurocat.ai/wp-content/uploads/2018/05/admin-ajax.jpg" />
              <Card.Body>
                <Card.Title>Partner 1</Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta.
                </Card.Text>
                <a href="#" class="stretched-link"></a>
              </Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={3} className="p-4">
            <Card className="partner-card" style={{ width: 'auto' }}>
              <Card.Img variant="top" src="https://www.neurocat.ai/wp-content/uploads/2018/05/admin-ajax.jpg" />
              <Card.Body>
                <Card.Title>Partner 2</Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta.
                </Card.Text>
                <a href="#" class="stretched-link"></a>
              </Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={3} className="p-4">
            <Card className="partner-card" style={{ width: 'auto' }}>
              <Card.Img variant="top" src="https://www.neurocat.ai/wp-content/uploads/2018/05/admin-ajax.jpg" />
              <Card.Body>
                <Card.Title>Partner 3</Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta.
                </Card.Text>
                <a href="#" class="stretched-link"></a>
              </Card.Body>
            </Card>
            </Col>
            <Col md={6} lg={3} className="p-4">
            <Card className="partner-card" style={{ width: 'auto' }}>
              <Card.Img variant="top" src="https://www.neurocat.ai/wp-content/uploads/2018/05/admin-ajax.jpg" />
              <Card.Body>
                <Card.Title>Partner 4</Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta.
                </Card.Text>
                <a href="#" class="stretched-link"></a>
              </Card.Body>
            </Card>
            </Col>
          </Row> 
          </div>
        </section>
      </div>
    </div>
  )
}

export default DINStandards
