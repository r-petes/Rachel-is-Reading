import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from 'react-router-dom'; 
import About from './components/About';
import Projects from './components/Projects';
import Books from './components/Books';


function App() {
  return (
    <BrowserRouter>

    <Navbar className="navbar py-5">
    <Container>
    <Navbar.Brand href="#home" id="title">rachel peterson</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/" id="projects">projects</Nav.Link>
        <Nav.Link href="books" id="books">book recs</Nav.Link>
        <Nav.Link href="/about" id="about">about/contact</Nav.Link>      
    </Nav>
    </Container>
  </Navbar>

        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />

  </BrowserRouter>
    )
}

export default App;
