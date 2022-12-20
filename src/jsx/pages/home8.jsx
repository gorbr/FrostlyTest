import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-8.css';

class Index8 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />
                <div class="dez-coming-soon style-8 wow fadeIn" data-wow-duration="0.80s" data-wow-delay="0.50s" style={{ "backgroundImage": "url(images/background/bg3.jpg)" }}>
                    <div class="clearfix dez-coming-bx">
                        <div class="dez-content posi-center">
                            <div class="ribbon-box wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                                <img src="images/ribbon.png" alt="" />
                                <span>We Are Comign Soon</span>
                            </div>
                            <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">Food is Ready</h2>
                            <div class="countdown-timer countdown-container">
                                <div class="clock">
                                    <div class="clock-item clock-days countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                        <div id="canvas-days" class="clock-canvas"></div>
                                        <div class="text">
                                            <p class="val">0</p>
                                            <p class="type-days type-time" data-border-color="#c90103" >DAYS</p>
                                        </div>
                                    </div>
                                    <div class="clock-item clock-hours countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.3s">
                                        <div id="canvas-hours" class="clock-canvas"></div>
                                        <div class="text">
                                            <p class="val">0</p>
                                            <p class="type-hours type-time" data-border-color="#c90103">HOURS</p>
                                        </div>
                                    </div>
                                    <div class="clock-item clock-minutes countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                                        <div id="canvas-minutes" class="clock-canvas"></div>
                                        <div class="text">
                                            <p class="val">0</p>
                                            <p class="type-minutes type-time" data-border-color="#c90103">MINUTES</p>
                                        </div>
                                    </div>
                                    <div class="clock-item clock-seconds countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <div id="canvas-seconds" class="clock-canvas"></div>
                                        <div class="text">
                                            <p class="val">0</p>
                                            <p class="type-seconds type-time" data-border-color="#c90103">SECONDS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dez-coming-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.2s">
                                <a href="javascript:void(0);" class="site-button gradient openbtn button-lg m-r10">Get In Touch</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline">Subscribe Now</a>
                            </div>
                            <img src="images/rounded.png" class="food-bg" alt="" />
                        </div>

                    </div>
                </div>

                <Popup />
            </>
        )
    }
}

export default Index8;