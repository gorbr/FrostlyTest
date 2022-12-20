import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Modal, Button } from 'react-bootstrap'



class Popup extends Component {

    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
    }
    render() {
        return (
            <>
                <div class="modal fade subscribe-box" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <form action="script/mailchamp.php" class="dzSubscribe modal-content" method="post">
                            <div class="modal-header">
                                <img src="images/bell.png" alt="" />
                                <h5 class="modal-title" id="exampleModalLabel">Subscribe Newsletter</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore
							dolore.</p>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <input name="dzEmail" required="required" class="form-control"
                                        placeholder="Your Email Address" type="email" />
                                    <div class="dzSubscribeMsg"></div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="site-button gradient radius-md button-lg shadow">Subcribe
							Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Popup;



