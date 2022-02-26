import { GiOwl } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './NavBar.css';

const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold'
}

const NavBar = () => (
    <nav className="navbar menu">
        <h3 className="logo"><GiOwl size={70}/>Mrs. Who`s Library</h3>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/catalog">Catalog</Link>
        <Link style={linkStyle} to="/events">Events</Link>
        <Link style={linkStyle} to="/about">About Us</Link>
        <Link style={linkStyle} to="/contact">Contact Us</Link>
        <Link style={linkStyle} to="/login">Login</Link>
        <a style={linkStyle} href="/"><BsBookmarkHeartFill size={45}/>Cart</a>
    </nav>
);

export default NavBar;