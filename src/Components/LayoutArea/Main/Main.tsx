import About from "../../MainArea/About/About";
import Education from "../../MainArea/Education/Education";
import Landing from "../../MainArea/Landing/Landing";
import Projects from "../../MainArea/Projects/Projects";
import Skills from "../../MainArea/Skills/Skills";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Landing/>
            <About/>
            <Skills/>
            <Education/>
            <Projects/>
            
        </div>
    );
}

export default Main;
