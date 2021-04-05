import React from 'react';

import { NavLink } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Routing from './routes'
import Search from './search';



//class App extends Component {
// render() 

function App() {

  return (
    //  <div className="container">

    <div className="App">


      <Navbar collapseOnSelect expand="md" bg="light" variant="white"
        fixed="top" className="nopadding">
        <Navbar.Brand href="/home">
          <img
            src="cg.png"
            width="70"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="/MTL">MTL</Nav.Link>
            <Nav.Link href="/AZAY">AZAY</Nav.Link>
            <Nav.Link href="/TSLI">TSLI</Nav.Link>
            <Nav.Link href="/KTAXA">KTAXA</Nav.Link>
            <Nav.Link href="/THAIL">THAIL</Nav.Link>
            </Nav>
            <Search />
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
        </Navbar.Collapse>
        
      </Navbar>
      
      <Routing />
      
    </div>
  );
}


export default App;
