import {NavLink} from "react-router";
import  logo from "../../assets/logo.webp";
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo"/>
            <nav className="nav">
                <NavLink to="/" >홈</NavLink>
                <NavLink to="/roulette">룰렛</NavLink>
                <NavLink to="/todo">할일</NavLink>
            </nav>
        </header>
    );
}

export default Header;