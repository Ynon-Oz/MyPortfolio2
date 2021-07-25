import "./Projects.css";
// import Iframe from 'react-iframe'
// import React, {useState} from "react";
// import ReactCardFlip from 'react-card-flip';

import burgers from "../../../Assets/Images/burgers.png"
import business from "../../../Assets/Images/business page.png"
import currency from "../../../Assets/Images/currency.png"
import messi from "../../../Assets/Images/messi.png"
import construction from "../../../Assets/Images/under-construction-page.jpg"
// import { useState } from "react";

function Projects(): JSX.Element {


    return (
        <div className="Projects" id="projects">
            <h2>Projects</h2>

            <section className="Grid">

                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={construction} alt="" />

                            <h3>
                                Coupon System
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Coupon System</h4>
                            <p>
                                A Fullstack project contains - backend core built using Java with spring boot technologies and frontend using React library
                            </p>
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
                            <a href="#" className="project-link-icon"><span className="material-icons-outlined">
                                launch
                            </span></a>
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
                            <h4>Back Side</h4>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={currency} alt="" />

                            <h3>
                                Currency Exchange
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Back Side</h4>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src="..." alt="" />

                            <h3>
                                Empty
                            </h3>
                        </div>
                        <div className="flip-box-back">
                            <h4>Empty</h4>
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
