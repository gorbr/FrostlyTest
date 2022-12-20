import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-5.css';

class Index5 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />
                <div class="dez-coming-soon style-5 wow fadeIn" data-wow-duration="0.80s" data-wow-delay="0.50s"
                    style={{"backgroundImage":"url(images/background/bg5.jpg)"}}>
                    <div class="clearfix dez-coming-bx">
                        <div class="dez-content top-left">
                            <div class="logo wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                <a href="#"><img src="images/logo5.png" alt="" /></a>
                            </div>
                            <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">We Are Coming
						Soon</h2>
                            <div class="dez-coming-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.2s">
                                <a href="javascript:void(0);" class="site-button gradient openbtn button-lg radius-md m-r10">Get
							In Touch</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal"
                                    class="site-button button-lg outline radius-md">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="countdown-timer countdown-container bottom-left">
                            <div class="clock">
                                <div class="clock-item clock-days countdown-time-value wow fadeInUp" data-wow-duration="1.5s"
                                    data-wow-delay="1.0s">
                                    <div id="canvas-days" class="clock-canvas"></div>
                                    <div class="text">
                                        <p class="val">0</p>
                                        <p class="type-days type-time" data-border-color="#f86954">DAYS</p>
                                    </div>
                                </div>
                                <div class="clock-item clock-hours countdown-time-value wow fadeInUp" data-wow-duration="1.5s"
                                    data-wow-delay="1.3s">
                                    <div id="canvas-hours" class="clock-canvas"></div>
                                    <div class="text">
                                        <p class="val">0</p>
                                        <p class="type-hours type-time" data-border-color="#f86954">HOURS</p>
                                    </div>
                                </div>
                                <div class="clock-item clock-minutes countdown-time-value wow fadeInUp" data-wow-duration="1.5s"
                                    data-wow-delay="1.6s">
                                    <div id="canvas-minutes" class="clock-canvas"></div>
                                    <div class="text">
                                        <p class="val">0</p>
                                        <p class="type-minutes type-time" data-border-color="#f86954">MINUTES</p>
                                    </div>
                                </div>
                                <div class="clock-item clock-seconds countdown-time-value wow fadeInUp" data-wow-duration="1.5s"
                                    data-wow-delay="1.9s">
                                    <div id="canvas-seconds" class="clock-canvas"></div>
                                    <div class="text">
                                        <p class="val">0</p>
                                        <p class="type-seconds type-time" data-border-color="#f86954">SECONDS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Popup />
            </>
        )
    }
}

export default Index5;