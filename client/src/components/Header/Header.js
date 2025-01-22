import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe(); 
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    auth.signOut();
    navigate('/'); 
  };

  const handleProfileClick = () => {
    navigate('/profile'); 
  };

  return (
    <header>
      <div className='header'>
        <p className='wordsInHeader'>
          <img src='images/Header/img1.png' alt="Header"  />
          Privacy Policy | Disclaimer | Contact
        </p>
      </div>

      <div className='headerFlexBox'>
        <div>
          <a href='/'>
          <img className='img' src='images/Header/logo.jpeg' alt='Logo' />
          </a>
        </div>

        <div className='search'>
          <InputGroup>
            <Form.Control
              placeholder="Explore Doctor Options..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              🔎
            </Button>
          </InputGroup>
        </div>

        <div>
          {!user ? (
            
            <p>
              Emergency: <Button className='header_but' variant="light"> ☎ 108</Button>
              Contact US: <Button className='header_but' variant="light"> ☎ 1-800-266-2443</Button>
              <Button className='header_but' variant="light" onClick={handleLoginClick}>Login</Button>
            </p>
          ) : (

              
            
            <NavDropdown
              title={<img src={user.photoURL} alt="Profile" className="profile-icon" />}
              id="collasible-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item onClick={handleProfileClick}>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogoutClick}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
