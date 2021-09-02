import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Navbar className="navbar">
    <Container>
    <Navbar.Brand href="#home" id="title">RACHEL IS READING</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/" id="blog">blog</Nav.Link>
        <Nav.Link href="books" id="books">books</Nav.Link>
        <Nav.Link href="about" id="about">about</Nav.Link>      
    </Nav>
    </Container>
  </Navbar>
    )
}

export default App;
