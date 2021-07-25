import "./Landing.css";

function Landing(): JSX.Element {
    return (
        <div className="Landing">
            <section className='myGrid'>
                <div className='header'>
                    <p className="font-effect-outline" id="typed">
                        Hi, my name is Ynon. <br></br> I am a Full-Stack Developer && certified <br></br>Mechanical practical engineer
                    </p>

                </div>
                <div className='body'>
                    <a href="#about">
                        <span className="material-icons-outlined">
                            expand_more
                        </span>
                    </a>
                </div>
            </section>
        </div>
    );
}



export default Landing;
