import React from 'react'

import {Container, Nav,Navbar} from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Buyrr</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/login">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>    
                </Navbar>
            
        </div>
    )
}

export default Header
