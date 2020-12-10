import React, { Component } from 'react';
import { BsPencilSquare } from 'react-icons/bs' 
import { FaUsers } from 'react-icons/fa' 
import { BiCommentDetail } from 'react-icons/bi'

class About extends Component {
    render() {
        return (
            <section id='about'>
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="about-title">
                        Welcome to the best platform ever for reading and sharing stories
                    </div>
                    <div className="about-items d-flex justify-content-between align-items-center">
                        <div>
                            <BsPencilSquare style={{fontSize:'4em'}} />
                            <b>120,634,187</b>
                            <p>Stories</p>
                        </div>
                        <div>
                        <FaUsers style={{fontSize:'4em'}} />
                            <b>1,059</b>
                            <p>Users</p>
                        </div>
                        <div>
                        <BiCommentDetail style={{fontSize:'4em'}} />
                            <b>744,230,008</b>
                            <p>Cool Feedbacks</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
