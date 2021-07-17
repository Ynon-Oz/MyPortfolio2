import MyPortrait from "../MyPortrait/MyPortrait";
import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About" id="about">
            <h2>About Me</h2><br></br>
            <p>
                Hi, my name is Ynon and I am a Full-Stack Developer and certified Mechanical practical engineer recently John Bryce
                graduated (Java full-stack) seeking to transfer my passion for technology, analytical problem solving and team player skills
                to Java software development.
            </p>
            <MyPortrait />
            <h3>My Expertise</h3>
            <div className="Expertise">
                <div className="Box1 Server">
                    <h4>Java Server side development</h4>
                    <p>Java development of servers using Spring framework, REST Controller API with all business logic and services. familiar with  design patterns(MVC, Singleton, factory, proxy), MySQL Database, Authentication and security features OOP and more.</p>
                    <span className="material-icons-outlined">
                        cloud
                    </span>
                </div>
                <div className="Box1 Web">
                    <h4>Web Applications development</h4>
                    <p>Dynamic Single Page Applications (SPA) using Angular or React, responsive UI for all digital medias. TypeScript, JavaScript, HTML, CSS, </p>
                    <span className="material-icons-outlined">
                        computer
                    </span>
                </div>
                <div className="Box1 App">
                    <h4>Android Applications development</h4>
                    <p>Android applications development, client side applications supporting http requests sending and quick respond on UI to improve performance and user experience at all Android products.</p>
                    <span className="material-icons-outlined">
                        phone_android
                    </span>
                </div>
            </div>
        </div>
    );
}

export default About;
