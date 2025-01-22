import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import './MiniNavbar.css';
const Nutrienets_MiniNavbar = () => {
  return (
    <Navbar className='container' id='navbar'>
      <Container>
        <Nav className="me-auto" id='navbar_div'>
          <Nav.Link as={Link} to="/cal-calories"><span className='navbar_text'>Calculate Calories</span></Nav.Link>
          <Nav.Link as={Link} to="/view-calories"><span className='navbar_text'>View Calories</span></Nav.Link>
         
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Nutrienets_MiniNavbar;
