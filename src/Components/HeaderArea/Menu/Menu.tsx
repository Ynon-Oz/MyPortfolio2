import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Education</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
