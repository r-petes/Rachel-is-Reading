import logo from './logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './App.css';


function App() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Rachel is Reading</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Blog">Blog</Nav.Link>
      <Nav.Link href="#Books">Books</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default App;
