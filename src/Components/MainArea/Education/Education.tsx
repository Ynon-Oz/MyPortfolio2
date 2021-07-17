import "./Education.css";

function Education(): JSX.Element {
    return (
        <div className="Education">
            <h2 >Education</h2>
            <div className="course">
            <h4>John Bryce Academy, Java full-stack Course</h4>
                    <h5>Jan 2019 - Dec 2020</h5>
            <a href="#" className="graduation">Graduation Project</a><br></br>

            </div>
            <span className="material-icons-outlined">
                horizontal_rule
            </span>

            <div className="course">
            <h4>Afeka College (“Hakirya”) , Mechanical Practical Engineer (magna cum laude)</h4>
                    <h5>Oct 2013 - Sep 2016</h5>

            </div>

        </div>
    );
}

export default Education;
