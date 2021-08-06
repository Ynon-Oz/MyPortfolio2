import { Redirect, Route, Switch } from "react-router-dom";
import GraduateProject from "../../MainArea/GraduateProject/GraduateProject";
import Main from "../Main/Main";
import Page404 from "../Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/MyPortfolio2/home" component={Main} exact />
                <Route path="/MyPortfolio2/graduate" component={GraduateProject} exact />
                
                <Redirect from="/" to="/MyPortfolio2" exact/>
                <Redirect from="/MyPortfolio2" to="/MyPortfolio2/home" exact/>
                <Route component={Page404}/> {/* Last */}
            </Switch>
        </div>
    );
}

export default Routing;
