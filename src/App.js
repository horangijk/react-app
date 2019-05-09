import React, { Component } from 'react';
import './App.css';

import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

// class App extends Component {
//  render() {
//    return (
//      <div className='App container'>
//            <Navbar fluid collapseOnSelect> 
//             <Navbar className="header">
//             <Router>
//               <Route>
//                 <NavLink to='/home' component={Home}>Home</NavLink><br/>
//                 <NavLink to='/login' component={LoginForm}>Login</NavLink><br/>
//                 <NavLink to='/signup' component={SignupForm}>Signup</NavLink>
//               </Route>
//             </Router>
//             </Navbar> 
            
//           </Navbar>
//      </div>
//    );
//  }
//}
          
class App extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <Nav>
          <NavItem>
            <NavLink href="/home" component={Home}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login" component={LoginForm}>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup" component={SignupForm}>Signup</NavLink>
          </NavItem>
        </Nav>
        
        
      </div>
    );
  }
}



export default App;
