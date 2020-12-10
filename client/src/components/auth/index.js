import React, { Component } from 'react';
import Login from './Login'
import Register from './Register'

class Auth extends Component {
    state = {
        authorized: false
    }
    render() {
        return (
            <section id="auth" className="">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="auth-cont ">
                        <h3>If you log in, You will be able to</h3>
                        <ul>
                            <li>Write your own stories</li>
                            <li>Subscribe</li>
                            <li>Like</li>
                        </ul>
                    </div>
                    <div className="auth-type d-flex flex-column p-3">
                        {
                            this.state.authorized
                            ? <Login />
                            : <Register />
                        }
                    </div>

                </div>
                 {/* onClick={() => this.setState({isOpen: !this.state.isOpen})} */}
            </section>
        );
    }
}

export default Auth;
