import "./Projects.css";
import Iframe from 'react-iframe'

function Projects(): JSX.Element {
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <section className="Grid">

                <div className="mdc-card">
                    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                        id="myId" />
                    <h4>
                        Coupon System
                    </h4>
                </div>
                <div className="mdc-card">
                    <Iframe url=""
                        id="myId" />
                    <h4>
                        Burger Shop
                    </h4>
                </div>
                <div className="mdc-card">
                    <Iframe url=""
                        id="myId" />
                    <h4>
                        Business Web
                    </h4>
                </div>
                <div className="mdc-card">
                    <Iframe url=""
                        id="myId" />
                    <h4>
                        Fan Site
                    </h4>
                </div>
                <div className="mdc-card">
                <Iframe url="https://www.google.com"
                        id="myId" />
                    <h4>
                        Currency Exchange
                    </h4>
                </div>
                <div className="mdc-card">
                <Iframe url=""
                        id="myId" />
                    <h4>
                        Empty
                    </h4>
                </div>

            </section>
        </div>
    );
}

export default Projects;
