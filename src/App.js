import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from 'react-router-dom'; 
import About from './components/About';
import Blogs from './components/Blogs';
import Books from './components/Books';


function App() {
  return (
    <BrowserRouter>

      <Route exact path="/" component={Blogs} />
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />

    <Navbar className="navbar">
    <Container>
    <Navbar.Brand href="#home" id="title">RACHEL IS READING</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/" id="blog">blog</Nav.Link>
        <Nav.Link href="books" id="books">books</Nav.Link>
        <Nav.Link href="/about" id="about">about</Nav.Link>      
    </Nav>
    </Container>
  </Navbar>
  </BrowserRouter>
    )
}

export default App;
