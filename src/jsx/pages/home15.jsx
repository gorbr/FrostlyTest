import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-11.css';

class Index15 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />

                <div class="dez-coming-soon style-1 wow fadeIn ripples-water water-ripples-bx" data-wow-duration="0.80s" data-wow-delay="0.50s" style={{"backgroundImage":"url(images/background/bg12.jpg)"}}>
                    <div class="clearfix dez-coming-bx">
                        <div class="dez-content top-left">
                            <div class="logo wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                <a href="#"><img src="images/logo3.png" alt="" /></a>
                            </div>
                            <div class="center-md">
                                <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">We Are Doing Great,<br />Allmost Done...</h2>
                                <div class="countdown bottom-left">
                                    <div class="date wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                        <span class="days time"></span>
                                        <span>Days</span>
                                    </div>
                                    <div class="date wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.3s">
                                        <span class="hours time"></span>
                                        <span>Hours</span>
                                    </div>
                                    <div class="date wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                                        <span class="mins time"></span>
                                        <span>Minutes</span>
                                    </div>
                                    <div class="date wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <span class="secs time"></span>
                                        <span>Second</span>
                                    </div>
                                </div>
                                <div class="dez-coming-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.2s">
                                    <a href="javascript:void(0);" class="site-button gradient openbtn button-lg radius-md m-r10">Get In Touch</a>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline radius-md white">Subscribe Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="text-right bottom-right">
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

export default Index15;