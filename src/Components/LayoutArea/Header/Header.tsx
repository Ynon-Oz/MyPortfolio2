import { NavLink } from "react-router-dom";
import Menu from "../../HeaderArea/Menu/Menu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header" id="main-header">
			<NavLink className="HeaderName" to="/"><h1 >Ynon Oz</h1></NavLink>
            <div className="Menu"><Menu /></div>
            <a className="ContactLink" href="#contact">Contact</a>
        </div>
    );
}

export default Header;
