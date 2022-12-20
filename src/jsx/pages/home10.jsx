import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-10.css';

class Index10 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />

                <div class="dez-coming-soon style-10 wow fadeIn" data-wow-duration="0.80s" data-wow-delay="0.50s">
                    <div class="city-box" style={{ "backgroundImage": "url(images/background/bg7.jpg)", "backgroundPosition": "bottom right" }}>
                        <div class="cloud-box"></div>
                        <div class="fly-box box1 wow fadeInRight" data-wow-duration="2.5s" data-wow-delay="1.5s"><img src="images/main-slider/slide-para11.png" alt="" /></div>
                        <div class="fly-box box2 wow fadeInRight" data-wow-duration="2.5s" data-wow-delay="2.0s"><img src="images/main-slider/slide-para10.png" alt="" /></div>
                        <div class="fly-box box3 wow fadeInRight" data-wow-duration="2.5s" data-wow-delay="2.5s"><img src="images/main-slider/slide-para12.png" alt="" /></div>
                    </div>
                    <div class="clearfix dez-coming-bx">
                        <div class="logo wow fadeInUp top-right" data-wow-duration="1.5s" data-wow-delay="1.0s">
                            <a href="#"><img src="images/logo10.png" alt="" /></a>
                        </div>
                        <div class="dez-content top-left center-md">
                            <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">We are launching soon please <br />reload after minutes</h2>
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
                                <a href="javascript:void(0);" class="site-button openbtn button-lg m-r10 gradient">Get In Touch</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="bottom-left">
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

export default Index10;