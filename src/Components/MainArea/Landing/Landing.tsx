import "./Landing.css";

function Landing(): JSX.Element {
    return (
        <div className="Landing">
            <section className='myGrid'>
                <div className='header'>
                    <p className="font-effect-outline">
                        Hi, my name is Ynon. <br></br> I am a Full-Stack Developer and certified <br></br>Mechanical practical engineer
                    </p>

                </div>
                <div className='body'>
                    <span className="material-icons-outlined">
                        expand_more
                    </span>

                </div>
            </section>
        </div>
    );
}

export default Landing;
