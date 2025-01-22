import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import './MiniNavbar.css';
const MiniNavbar = () => {
  return (
    <Navbar className='container' id='navbar'>
      <Container>
        <Nav className="me-auto" id='navbar_div'>
          <Nav.Link as={Link} to="/book-appointment"><span className='navbar_text'>Book Appointment</span></Nav.Link>
          <Nav.Link as={Link} to="/view-appointment"><span className='navbar_text'>View Appointments</span></Nav.Link>
         
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MiniNavbar;
