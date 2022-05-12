import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
// import Container from "react-bootstrap/Container"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
    return (
        <>
            {/* <nav>
                <Link to="/"> Home</Link>
                <Link to="favRecipes"> Favorite Recipes</Link>
            </nav> */}
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Yummy</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favRecipes">Fav Recipes</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar;



