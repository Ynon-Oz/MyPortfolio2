import "./GraduateProject.css";



import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";



function getModalStyle() {
    const top = 50 ;
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
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

export default function SimpleModal() {
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
                The system was built in 3 phases: system core (JAVA),
                API and client side using Spring, JPA, and Angular 8 (SPA).
                During the project, migration was done from JDBC to JPA

            </p>
            <Button variant="outlined" color="primary" onClick={history.goBack}>Back</Button>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}