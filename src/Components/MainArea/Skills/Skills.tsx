import "./Skills.css";

function Skills(): JSX.Element {
    return (
        <div className="Skills" id="skills">
            <h3>Skills</h3>

            <div className="balloons">
                <div id="Skill1"><p >Java <br></br>TypeScript <br></br> JavaScript</p></div>
                <div id="Skill2"><p>Spring Boot applications <br></br> Hibernate (JPA) <br></br> REST APIs</p></div>
                <div id="Skill3"><p>React <br></br> Angular <br></br> HTML <br></br> CSS</p></div>
                <div id="Skill4"><p>MySQL<br/>Design Patterns<br/>Cloud Microservices<br/>Reflection API<br/>Docker</p></div>
            </div>


        </div>
    );
}

export default Skills;
