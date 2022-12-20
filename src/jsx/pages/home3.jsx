import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-3.css';
import '../../plugins/kenbern/slippry.css';

class Index3 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />
                <div class="dez-coming-soon style-3 wow fadeIn" data-wow-duration="0.80s" data-wow-delay="0.50s">
                    <ul id="kenburn">
                        <li><img src="images/main-slider/slide1.jpg" alt="" /></li>
                        <li><img src="images/main-slider/slide2.jpg" alt="" /></li>
                        <li><img src="images/main-slider/slide3.jpg" alt="" /></li>
                    </ul>
                    <div class="clearfix dez-coming-bx">
                        <div class="dez-content top-left">
                            <div class="logo wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                <a href="#"><img src="images/logo3.png" alt="" /></a>
                            </div>
                            <div class="center-md">
                                <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">We Are Doing Great,<br />Allmost Done...</h2>
                                <div class="bottom-right">
                                    <div class="countdown-timer countdown-container">
                                        <div class="clock">
                                            <div class="clock-item clock-days countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                                <div id="canvas-days" class="clock-canvas"></div>
                                                <div class="text">
                                                    <p class="val">0</p>
                                                    <p class="type-days type-time" data-border-color="#fff">DAYS</p>
                                                </div>
                                            </div>
                                            <div class="clock-item clock-hours countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.3s">
                                                <div id="canvas-hours" class="clock-canvas"></div>
                                                <div class="text">
                                                    <p class="val">0</p>
                                                    <p class="type-hours type-time" data-border-color="#fff">HOURS</p>
                                                </div>
                                            </div>
                                            <div class="clock-item clock-minutes countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                                                <div id="canvas-minutes" class="clock-canvas"></div>
                                                <div class="text">
                                                    <p class="val">0</p>
                                                    <p class="type-minutes type-time" data-border-color="#fff">MINUTES</p>
                                                </div>
                                            </div>
                                            <div class="clock-item clock-seconds countdown-time-value wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                                <div id="canvas-seconds" class="clock-canvas"></div>
                                                <div class="text">
                                                    <p class="val">0</p>
                                                    <p class="type-seconds type-time" data-border-color="#fff">SECONDS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dez-coming-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.2s">
                                    <a href="javascript:void(0);" class="site-button openbtn button-lg radius-md m-r10 white">Get In Touch</a>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline white radius-md">Subscribe Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-left">
                            <ul class="dez-social-icon">
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.0s"><a class="fa fa-facebook" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.3s"><a class="fa fa-twitter" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.6s"><a class="fa fa-linkedin" href="#" ></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.9s"><a class="fa fa-google-plus" href="#" ></a></li>
                            </ul>
                            <p class="copyright-text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">© 2020 - Made with <i class="fa fa-heart"></i> By <a href="#" class="made-by">DexignZone</a></p>
                        </div>
                    </div>
                </div>

                <Popup />
            </>
        )
    }
}

export default Index3;