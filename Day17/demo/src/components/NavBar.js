import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <nav>
                <Link to="/"> Home</Link>
            </nav>
            <nav>
                <Link to="/contact"> Contact Us</Link>
            </nav>

        </>
    )
}

export default NavBar;