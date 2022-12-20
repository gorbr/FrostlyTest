import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-1.css';

class Index17 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />

                <div class="menuleft">
                    <span class="close-btn">×</span>
                    <ul class="nav">
                        <li><a href="javascript:void(0);">Home</a></li>
                        <li><a href="javascript:void(0);">About</a></li>
                        <li><a href="javascript:void(0);">Portfolio</a></li>
                        <li><a href="javascript:void(0);">Contact</a></li>
                    </ul>
                </div>

                <div class="dez-coming-soon style-2 wow fadeIn galaxy-box" id="particles-star" data-wow-duration="0.80s" data-wow-delay="0.50s" style={{ "backgroundImage": "url(images/background/bg13.jpg)" }}>
                    <div class="clearfix dez-coming-bx">
                        <div class="dez-content top-center posi-center">
                            <div class="logo wow fadeInUp top-md" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                <a href="#"><img src="images/logo11.png" alt="" /></a>
                            </div>
                            <div class="center-md">
                                <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">We Are Coming Soon</h2>
                                <p class="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.7s">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur adipisicing</p>
                                <div class="countdown count-1">
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
                                    <a href="javascript:void(0);" class="site-button gradient openbtn button-lg radius-md m-r10 shadow">Get In Touch</a>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline radius-md shadow">Subscribe Now</a>
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
                        <div class="menu-btn bottom-right">
                            <a href="javascript:void(0);">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>

                <Popup />
            </>
        )
    }
}

export default Index17;