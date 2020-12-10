import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <>
                <div className="auth-title">Register</div>
                <form action="auth">
                    <div>
                        <label htmlFor="login-register">Email: </label>
                        <input type="text" id="login-register" placeholder="iqboljonr@umail.uz"/>
                    </div>
                    <div>
                        <label htmlFor="password-register">Password: </label>
                        <input type="password" id="password-register" placeholder="password"/>
                    </div>
                    <div>
                        <label htmlFor="password2-register">Confirm Password: </label>
                        <input type="password" id="password2-register" placeholder="password"/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                    <p>
                        Already have account? <a href="">Login</a>
                    </p>
                </form>
            </>
        )
    }
}
