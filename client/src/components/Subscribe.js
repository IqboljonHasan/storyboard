import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <section id="subscribe">
                <div>
                    <div className="container d-flex flex-column align-items-center justify-content-center">
                        <form action="">
                            <h1>Subscription Form</h1>
                            <p>Please, subscribe to get new stories</p>
                            <div>
                                <label htmlFor="subscribe-name">Your Name*</label>
                                <input type="text" name="fname" id="subscribe-name" placeholder="Write your name" required/>
                            </div>
                            <div>
                                <label htmlFor="subscribe-name">Your Email*</label>
                                <input type="email" name="fmail" id="subscribe-mail" placeholder="Your email" required/>
                            </div>
                            <div className="subscribe-submit">
                                <input type="submit" name="" id="sb-submit" value="Submit a subscription"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Subscribe;
