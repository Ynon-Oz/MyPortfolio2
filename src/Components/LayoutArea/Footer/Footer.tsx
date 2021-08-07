import "./Footer.css";
import mail from '../../../Assets/Images/email.png';
import git from '../../../Assets/Images/github.png';
import linkedin from '../../../Assets/Images/linkedinlogo.png';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Footer(): JSX.Element {
    return (
        <div className="Footer" id="contact">
			<h2>Contact</h2>
            <div className="contact">
            <a href="mailto:ynonoz@gmail.com" target="_blank"><MailOutlineIcon/></a>
            <a href="https://github.com/Ynon-Oz" target="_blank"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ynon-oz/" target="_blank"><LinkedInIcon/></a>
            <a id="WhatsAppLink" href="https://wa.me/972542388666" target="_blank"><WhatsAppIcon/></a>
            </div>
        </div>
    );
}

export default Footer;
