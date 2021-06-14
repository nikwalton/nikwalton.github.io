import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      title: "Nikolaus Walton",
      header: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'},
        {title: 'Art', path:'/art'},
        {title: 'Contact', path:'/contact'}
      ],
      home: {
        title: 'Technology and Art',
        subtitle: 'Making a difference and telling stories using technology'
      },
      about: {
        title: 'About'
      },
      projects: {
        title: 'Projects'
      },
      art: {
        title: 'Art'
      },
      contact: {
        title: 'Find Me',
        subtitle: 'Let\'s have a chat'
      }
    }
  }

  render()
  {
    return (
      <Router>
        
        <Container className='p-1' fluid={true}>
          <Navbar className='border-bottom' expand='lg' bg='transparent'>
            <Navbar.Brand>Nikolaus Walton</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/> 
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ms-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/art'>Art</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
