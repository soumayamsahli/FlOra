import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';





const NaVbar = () => {
  return ( 


    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        
            <Link to="/Login" style={{marginRight: "15px",color:"black",textDecoration:"none"}}>Login</Link>
            <Link to="/Register" style={{marginRight: "15px",color:"black",textDecoration:"none"}}>Register</Link>
            <Link to="/Home" style={{marginRight: "15px",color:"black",textDecoration:"none"}}>Home</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  )
 
}



export default NaVbar
