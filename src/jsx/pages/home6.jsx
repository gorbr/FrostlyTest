import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-1.css';

class Index6 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />

                <div class="dez-coming-soon style-6 wow fadeIn" data-wow-duration="0.80s" data-wow-delay="0.50s" style={{"backgroundImage":"url(images/background/bg5.jpg)"}}>
                    <div class="parallax">
                        <div class="water water-layer6"></div>
                        <div class="water water-layer5"></div>
                        <div class="water water-layer4"></div>
                        <div class="water water-layer3"></div>
                        <div class="water water-layer2"></div>
                        <div class="water water-layer1"></div>
                    </div>
                    <div class="clearfix dez-coming-bx">
                        <div class="dez-content top-left">
                            <div class="logo wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                <a href="#"><img src="images/logo3.png" alt="" /></a>
                            </div>
                        </div>
                        <div class="countdown-timer countdown-container posi-center">
                            <div class="clock">
                                <div class="clock-item clock-days countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                    <div id="canvas-days" class="clock-canvas"></div>
                                    <div class="text">
                                        <p class="val">0</p>
                                        <p class="type-days type-time" data-border-color="#5362ff">DAYS</p>
                                    </div>
                                </div>
                                <div class="clock-item clock-hours countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.3s">
                                    <div id="canvas-hours" class="clock-canvas"></div>
                                    <div class="text">
                                        <p class="val">0</p>
                                        <p class="type-hours type-time" data-border-color="#5362ff">HOURS</p>
                                    </div>
                                </div>
                                <div class="clock-item clock-minutes countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                                    <div id="canvas-minutes" class="clock-canvas"></div>
                                    <div class="text">
                                        <p class="val">0</p>
                                        <p class="type-minutes type-time" data-border-color="#5362ff">MINUTES</p>
                                    </div>
                                </div>
                                <div class="clock-item clock-seconds countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                    <div id="canvas-seconds" class="clock-canvas"></div>
                                    <div class="text">
                                        <p class="val">0</p>
                                        <p class="type-seconds type-time" data-border-color="#5362ff">SECONDS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="top-right">
                            <ul class="dez-social-icon">
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.0s"><a class="fa fa-facebook" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.3s"><a class="fa fa-twitter" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.6s"><a class="fa fa-linkedin" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.9s"><a class="fa fa-google-plus" href="#" ></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Popup />
            </>
        )
    }
}

export default Index6;