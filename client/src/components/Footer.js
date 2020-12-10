import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container d-flex flex-column">
                    <div className="d-flex align-items-center my-3">
                        <div className="logo mr-4"><a href="./">SB</a></div>
                        <div>The world's #1 website sharing stories</div>
                    </div>
                    <div>Copyright &copy; <a href="https://iqboljon.uz">Iqboljon.uz</a> 2020</div>
                </div>
            </footer>
        );
    }
}

export default Footer;