import { NavLink } from "react-router-dom";
import "./Education.css";
import SchoolIcon from '@material-ui/icons/SchoolRounded';
import React from 'react';
import { makeStyles, Theme, withStyles, createStyles } from '@material-ui/core/styles';
import { grey , purple } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';


function Education(): JSX.Element {
    const ColorButton = withStyles((theme: Theme) => ({
        root: {
            color: theme.palette.getContrastText(grey[800]),
            backgroundColor: grey[800],
            '&:hover': {
                backgroundColor: grey[900],
            },
        },
    }))(Button);

    //    MODAL
    //********************************************* */
    const classes = useStyles();
    const history = useHistory();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Graduation Project</h2>
            <h4>Coupon System Application</h4>
            <p id="simple-modal-description">
                coupon platform that enables suppliers to advertise and sell their coupons,
                including different functionality for companies, clients,
                and site admin; user authentication and authorization.
                The system was built in phases: system core (JAVA),
                API and client side using Spring, JPA, and React (SPA).
                

            </p>
            <ColorButton onClick={goToCouponBackGit}  className="ColorButton" variant="contained" color="primary" startIcon={<GitHubIcon />}   >
                    BackEnd
                </ColorButton>
                <ColorButton onClick={goToCouponFrontGit} className="ColorButton" variant="contained" color="primary" startIcon={<GitHubIcon />}   >
                    FrontEnd
                </ColorButton>
            {/* <Button variant="outlined" color="primary" href="https://github.com/Ynon-Oz/CouponsMavenProject" target="_blank">Graduation Project(Spring Boot)</Button>
            <Button variant="outlined" color="primary" href="https://github.com/Ynon-Oz/couponation-ui" target="_blank">Graduation Project(React)</Button> */}
        </div>
    );

    //********************************************* */


    return (
        <div className="Education">
            <h2 >Education</h2>
            <div className="course">
                <h4>John Bryce Academy, Java full-stack Course</h4>
                <h5>Jan 2019 - Dec 2020</h5>
                <ColorButton variant="contained" color="primary" startIcon={<SchoolIcon />} onClick={handleOpen}>
                    Graduation Project
                </ColorButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
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
const goToCouponBackGit = ( ) => {
    window.open("https://github.com/Ynon-Oz/CouponsMavenProject");
  };
  const goToCouponFrontGit = ( ) => {
    window.open("https://github.com/Ynon-Oz/couponation-ui");
  };

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            borderRadius:'10px',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);



export default Education;
