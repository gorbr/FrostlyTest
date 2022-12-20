import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SideBox from '../element/sidebox';
import Popup from '../element/popup';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import '../../css/skin/skin-7.css';

class Index7 extends Component {
    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }

    render() {

        return (
            <>
                <SideBox />

                <div class="dez-coming-soon style-7 wow fadeIn" data-wow-duration="0.80s" data-wow-delay="0.50s" style={{ "backgroundImage": "url(images/background/bg4.jpg)" }}>
                    <div class="bg-move-box">
                        <div class="water para-layer1"></div>
                        <div class="water para-layer2"></div>
                    </div>
                    <div class="clearfix dez-coming-bx">
                        <div class="dez-content top-center posi-center">
                            <div class="logo wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                <a href="#"><img src="images/logo7.png" alt="" /></a>
                            </div>
                            <h2 class="dez-title ml2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">Coming Soon</h2>
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
                                <a href="javascript:void(0);" class="site-button gradient openbtn button-lg radius-md m-r10">Get In Touch</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" class="site-button button-lg outline radius-md">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Popup />
            </>
        )
    }
}

export default Index7;