
import React, { Component } from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
 render() {
   return (
     <div className='App container'>
          <Navbar fluid collapseOnSelect> 
          <Navbar className="header">
            {/* <Navbar.Brand> */}
              {/* <Link to='/'>Scratch</Link> */}
            {/* </Navbar.Brand> */}
            {/* <Navbar.Toggle /> */}
          </Navbar> 
          {/* <Navbar.Collapse> */}
            {/* <Nav pullRight>  */}
              {/* <LinkContainer to='/signup'>
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to='/login'>
                <NavItem>Login</NavItem>
              </LinkContainer> */}
            {/* </Nav> */}
        {/* </Navbar.Collapse>   */}
        </Navbar>
         
     </div>
   );
 }
}


export default App;
