import logo from './logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './App.css';


function App() {
  return (
    <>
    <Navbar className="navigationbar">
    <Container>
    <Navbar.Brand href="#home" id="title">RACHEL IS READING</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Blog" id="blog">blog</Nav.Link>
      <Nav.Link href="#Books" id="books">books</Nav.Link>
      <Nav.Link href="#About" id="pages">about</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default App;
