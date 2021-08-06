import { Redirect, Route, Switch } from "react-router-dom";
import About from "../../MainArea/About/About";
import Education from "../../MainArea/Education/Education";
import GraduateProject from "../../MainArea/GraduateProject/GraduateProject";
import Landing from "../../MainArea/Landing/Landing";
import Projects from "../../MainArea/Projects/Projects";
import Main from "../Main/Main";
import Page404 from "../Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/" component={Main} exact />
                <Route path="/graduate" component={GraduateProject} exact />
                {/* <Route path="/education" component={Education} exact />
                <Route path="/about" component={About} exact />
                <Route path="/projects" component={Projects} exact /> */}
                {/* <Redirect from="/" to="/home" exact/> */}
                <Route component={Page404}/> {/* Last */}
            </Switch>
        </div>
    );
}

export default Routing;
