import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-10.css';

class Index16 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />

                <div class="dez-coming-soon style-9 wow fadeIn" data-wow-duration="0.80s" data-wow-delay="0.50s">
                    <div class="rain-bg">
                        <canvas width="1" height="1" id="container" style={{"position":"absolute"}}></canvas>
                    </div>
                    <div class="clearfix dez-coming-bx">
                        <div class="logo wow fadeInUp bottom-left" data-wow-duration="1.5s" data-wow-delay="1.0s">
                            <a href="#"><img src="images/logo9.png" alt="" /></a>
                        </div>
                        <div class="dez-content top-left center-md">
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
                            <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">We are launching soon please <br />reload after minutes</h2>
                            <div class="dez-coming-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.2s">
                                <a href="javascript:void(0);" class="site-button openbtn button-lg m-r10">Get In Touch</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline white">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="text-right bottom-right">
                            <ul class="dez-social-icon social-2">
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.0s"><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.3s"><a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
                                <li class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.6s"><a href="#"><i class="fa fa-linkedin"></i><span>Linkedin</span></a></li>
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

export default Index16;