import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Education</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
