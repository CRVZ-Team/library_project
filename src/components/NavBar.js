import { GiOwl } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import './NavBar.css';
import { useUser } from "../auth/useUser";
import { useEffect } from "react";

const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold'
}

const NavBar = () => {
    const user = useUser();
    const navigate = useNavigate();

    const onLogoutClicked = () => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload(false);
    }

    console.log(user);
    return(
    <nav className="navbar menu">
        <h3 className="logo"><GiOwl size={70}/>Mrs. Who`s Library</h3>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/catalog">Catalog</Link>
        <Link style={linkStyle} to="/events">Events</Link>
        <Link style={linkStyle} to="/about">About Us</Link>
        <Link style={linkStyle} to="/contact">Contact Us</Link>
        {user == null ? <Link style={linkStyle} to="/login">Login</Link> : <Link onClick={onLogoutClicked} style={linkStyle} to="/">Log out</Link>}
        <a style={linkStyle} href="/cart"><BsBookmarkHeartFill size={45}/>Cart</a>
    </nav>
)};

export default NavBar;