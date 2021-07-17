import "./Footer.css";
import mail from '../../../Assets/Images/email.png';
import git from '../../../Assets/Images/github.png';
import linkedin from '../../../Assets/Images/linkedinlogo.png';
function Footer(): JSX.Element {
    return (
        <div className="Footer" id="contact">
			<h2>Contact</h2>
            <div className="contact">
            <a href="mailto:ynonoz@gmail.com" target="_blank"><img src={mail} alt="Email" /></a>
            <a href="https://github.com/Ynon-Oz" target="_blank"><img src={git} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/ynon-oz/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
            </div>
        </div>
    );
}

export default Footer;
