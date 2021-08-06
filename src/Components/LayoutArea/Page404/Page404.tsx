import "./Page404.css";
import p404Img from "../../../Assets/Images/mike-monsters-inc-2001-RP58A6.jpg";
import { NavLink } from "react-router-dom";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <h1>Page not found 404</h1>
            <img src={p404Img} alt="" /><br />
            <NavLink to="/MyPortfolio2/home">
                <span className="material-icons-outlined BackBTN">
                    undo
                </span>
            </NavLink>
        </div>
    );
}

export default Page404;
