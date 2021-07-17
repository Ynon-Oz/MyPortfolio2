import Menu from "../../HeaderArea/Menu/Menu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header" id="main-header">
			<h1>Ynon Oz</h1>
            <Menu/>
            <a href="#contact">Contact</a>
        </div>
    );
}

export default Header;
