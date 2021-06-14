import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProjectsPage'
import ArtPage from './Pages/ArtPage'
import ContactPage from './Pages/ContactPage'

export default class App extends React.Component {

  render()
  {
    return (
      <Router>
        
        <Container className='p-1' fluid={true}>
          <Navbar expand='lg' bg='transparent'>
            <Navbar.Brand>Nikolaus Walton</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/> 
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/art'>Art</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>

   
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
    
          <Route path='/' exact render={HomePage} />
          <Route path='/art' exact render={ArtPage} /> 
          <Route path='/contact' exact render={ContactPage} />
          <Route path='/projects' exact render={ProjectsPage} />
       
        </Container>
      </Router>
    );
  }
}