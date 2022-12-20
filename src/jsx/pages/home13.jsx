import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-9.css';

class Index13 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.viddeo();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />

                <div class="dez-coming-soon style-4 wow fadeIn youtube-video" data-wow-duration="0.80s" data-wow-delay="0.50s">

                    <div class="sidenav-menu">
                        <div class="logo">
                            <a href="#"><img src="images/logo4.png" alt="" /></a>
                        </div>
                        <ul class="dez-social-icon social-2">
                            <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.0s"><a href="#"><span>Facebook</span></a></li>
                            <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.3s"><a href="#"><span>Twitter</span></a></li>
                            <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.6s"><a href="#"><span>Linkedin</span></a></li>
                        </ul>
                        <div class="menu-btn">
                            <a href="javascript:void(0);">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>
                    <div class="clearfix dez-coming-bx">
                        <div class="dez-content">
                            <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">We Are Doing Great,<br />Allmost Done...</h2>
                            <div class="countdown">
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
                                <a href="javascript:void(0);" class="site-button openbtn button-lg m-r10 black">Get In Touch</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="slider-box">

                        <div id="videoWithJs" class="videoWrapper">
                            <iframe src="https://www.youtube.com/embed/ja8pA2B0RR4?modestbranding=0&showinfo=0&controls=0&autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" allowfullscreen="1" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>

                <Popup />
            </>
        )
    }
}

export default Index13;