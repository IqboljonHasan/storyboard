import React, { Component } from 'react'
import { BiUser } from 'react-icons/bi'
import { navigations } from '../helper'
// import Auth from './auth'



class Header extends Component {
    state = {
        isAuthorized: this.props.isAuthorized,
    }

    render() {
        return (
            <div className='header'>
                <div className="inner-header container-fluid d-flex flex-column">
                    <div className="navigation row">
                        <div className="container d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <a href="./">SB</a>
                            </div>
                            <div className="navbar d-flex justify-content-between align-items-center">
                                {
                                    navigations.map(nav => {
                                        return(
                                            <a href={`#${nav.link}`} className="">
                                                {nav.title}
                                            </a>
                                        )
                                    })
                                }
                                <div className="login-nav d-flex align-items-start">
                                    {this.state.isAuthorized
                                        ? <a href='/dashboard'><BiUser /> user_12331</a>
                                        : <a href="#auth">log in</a>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="numberone mb-4">
                            The world's number one website of stories
                        </div>
                        <div>
                            <a href="#random" className="primary-btn mx-2">Start reading</a>
                            <a href={this.state.isAuthorized ? '/dashboard' : '#auth'} className="primary-btn-inverse mx-2">Write a story</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
