import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-primary text-white py-3 shadow">
            <Navbar >
                 <Container> <Nav className="me-auto"> 
                    <Link to="/" className="nav-link">HOME</Link> 
                    <Link to="/form" className="nav-link">CADASTRO</Link> 
                    </Nav> 
                    </Container> 
                    </Navbar>
        </header>
    );
}

export default Header;
