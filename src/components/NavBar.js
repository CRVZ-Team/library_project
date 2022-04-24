import { GiOwl } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import './NavBar.css';
import { useUser } from "../auth/useUser";

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
        <h3 className="logo"><GiOwl size={65}/>Mrs. Who`s Library</h3>
        <Link style={linkStyle} to="/">HOME</Link>
        <Link style={linkStyle} to="/catalog">CATALOG</Link>
        <Link style={linkStyle} to="/events">EVENTS</Link>
        <Link style={linkStyle} to="/about">ABOUT US</Link>
        <Link style={linkStyle} to="/contact">CONTACT US</Link>
        <Link style={linkStyle} to="/your-books">YOUR BOOKS</Link>
        {user == null ? <Link style={linkStyle} to="/login">LOG IN</Link> : <Link onClick={onLogoutClicked} style={linkStyle} to="/">LOG OUT</Link>}
        <a style={linkStyle} href="/cart"><AiOutlineShoppingCart size={45}/></a>
    </nav>
)};



//vercel
export default NavBar;