import React from "react";
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory} from 'react-router-dom';

const Header: React.FC<{}> = () => {
    const history = useHistory();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container style={{margin:'1rem'}}>
                <Col><Navbar.Brand className="AppName" onClick={()=>{history.push('/')}}>
                크립토그래퍼
                    </Navbar.Brand></Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Col ><Nav className="me-auto">
                    <Form className="d-flex">
                        <FormControl
                            style={{marginLeft:'10rem', width:'30rem'}}
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" onClick={()=>{history.push('/search')}}>Search</Button>
                    </Form>
                    </Nav>
                    </Col>
                    <Nav>
                    <Nav.Link onClick= {()=>{history.push("/login")}}>Login</Nav.Link>
                    <Nav.Link eventKey={2} onClick= {()=>{history.push("/registerAccount")}}>
                        RegisterAccount
                    </Nav.Link>
              
                 
                    </Nav>
                 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
