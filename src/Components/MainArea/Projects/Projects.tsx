import "./Projects.css";

import React from 'react';
import { makeStyles, Theme, withStyles, createStyles } from '@material-ui/core/styles';
import { grey, purple } from '@material-ui/core/colors';
import ModalUI from '@material-ui/core/Modal';
import { Button, Fab } from "@material-ui/core";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import burgers from "../../../Assets/Images/burgers.png"
import business from "../../../Assets/Images/business page.png"
import currency from "../../../Assets/Images/currency.png"
import coupons from "../../../Assets/Images/shopping-shannon-springs-2.jpg"
import messi from "../../../Assets/Images/messi.png"
import construction from "../../../Assets/Images/under-construction-page.jpg"
import microservices from "../../../Assets/Images/Global cloud microservices market.jpg"
import Modal from "../../SharedArea/Modal/Modal";
import GitHubIcon from '@material-ui/icons/GitHub';
function Projects(): JSX.Element {


    const MyModal = { Modal }
    const ColorFab = withStyles((theme: Theme) => ({
        root: {
            color: theme.palette.getContrastText(grey[800]),
            backgroundColor: grey[800],
            '&:hover': {
                backgroundColor: grey[900],
            },
        },
    }))(Fab);

    return (
        <div className="Projects" id="projects">
            <h2>Projects</h2>
            <Modal />
            <section className="Grid">

                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={coupons} alt="" />

                            <h3>
                                Coupon System
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Coupon System</h4>
                            <p>
                                A Fullstack project contains - backend core built using Java with spring boot technologies and frontend using React library
                            </p>
                            <ColorFab size="small" variant="extended" color="primary" aria-label="add" >
                                <DescriptionOutlinedIcon /> Info
                            </ColorFab>
                            {/* <a href="https://github.com/Ynon-Oz/couponation-ui" target="_blank" className="project-link-icon CBTN-dark">GitHub(ReactUI)</a>
                            <a href="https://github.com/Ynon-Oz/CouponsMavenProject" target="_blank" className="project-link-icon CBTN-dark">GitHub(Java)</a> */}

                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={microservices} alt="" />

                            <h3>
                                Cloud Microservices
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Cloud Microservices</h4>
                            <p>Microservices ecosystem</p>
                            <ColorFab size="small" variant="circular" color="primary" aria-label="add" href="https://github.com/Ynon-Oz/spring-cloud-microservices">
                                <GitHubIcon /> 
                            </ColorFab>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={construction} alt="" />

                            <h3>
                                Currency Exchange
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Currency Exchange</h4>
                            <p>
                                Currency Exchange REST & REST Template API
                            </p>
                            <ColorFab disabled size="small" variant="extended" color="primary" aria-label="add" >
                                <DescriptionOutlinedIcon />Info 
                            </ColorFab>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={burgers} alt="" />

                            <h3>
                                Burger Shop
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Burger Shop</h4>
                            <p>
                                Burger Builder and draw on screen using DOM manipulation
                            </p>
                            <ColorFab size="small" variant="circular" color="primary" aria-label="add" href="https://github.com/Ynon-Oz/YnonBurger/tree/main/lab5" >
                                <GitHubIcon /> 
                            </ColorFab>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={business} alt="" />

                            <h3>
                                Business Web
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Business Web</h4>
                            <p>
                                a vanilla stack of business web styling
                            </p>
                            {/* <a href="https://github.com/Ynon-Oz/MorexSite2" target="_blank" className="project-link-icon CBTN-dark">GitHub</a> */}
                            <ColorFab size="small" variant="circular" color="primary" aria-label="add" href="https://github.com/Ynon-Oz/MorexSite2">
                                <GitHubIcon /> 
                            </ColorFab>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={messi} alt="" />

                            <h3>
                                Fan Site
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Leo Mesi Fan Site</h4>
                            <p>Currently under construction</p>
                            <ColorFab  disabled size="small" variant="extended" color="primary" aria-label="add" >
                                <DescriptionOutlinedIcon />Info 
                            </ColorFab>
                        </div>
                    </div>
                </div>
            
                
            </section>

            <a href="#main-header"><span className="material-icons-outlined">
                expand_less
            </span></a>
        </div>
    );
}

export default Projects;
