import './App.css';
import React from 'react'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import StoreList from './components/StoreListing'
import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  const [show, setShow] = useState(false)
  const target = useRef(null)
  return (
     <div className="App">
      <Navbar bg="light" expand="lg" >
  
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2022/
instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png" alt="Instacart Logo" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
    </Navbar>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
      <Image src="https://images.unsplash.com/photo-1527627774631-e826665283ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxmcmVlJTIwaW1hZ2VzJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D" fluid />
     
     <StoreList />

   </div>
  );
}

export default App;
