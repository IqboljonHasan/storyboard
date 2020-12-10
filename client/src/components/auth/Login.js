import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <>
                <div className="auth-title">Log in</div>
                <form action="login">
                    <div>
                        <label htmlFor="login-login">Email: </label>
                        <input type="text" id="login-login" placeholder="iqboljonr@umail.uz"/>
                    </div>
                    <div>
                        <label htmlFor="password-login">Password: </label>
                        <input type="password" id="password-login" placeholder="password"/>
                    </div>
                    <div>
                        <div>
                        <input type="checkbox" name="Rememberme" id="rememberme"/><label htmlFor="rememberme" className="ml-3">Remember me for a week</label>
                        </div>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                    <p>
                        No account? Please, <a href="">Register</a>
                    </p>
                </form>
            </>
        );
    }
}

export default Login;
