import '../css/NavBar.css';
import { Link } from "react-router-dom";  // ✅ Import Link from react-router-dom

const NavBar = () => {
    return (
        <header>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
                <li><Link to="/signup">Signup</Link></li> 
            </nav>
        </header>
    );
};

export default NavBar;
