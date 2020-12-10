import React, { Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Random from '../components/Random'
import Search from '../components/Search'
import Subscribe from '../components/Subscribe'
import About from '../components/About'
import Categories from '../components/Categories'
import Auth from '../components/auth'
import { BiArrowToTop } from 'react-icons/bi'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false,
            isAuthorized: true
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 400) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

   
    render() {
        const { is_visible, isAuthorized } = this.state;
        return (
            <> 
                <Header 
                    isAuthorized={this.state.isAuthorized}
                />
                <About />
                {isAuthorized || (
                    <Auth>
                        Login
                    </Auth>
                )}
                <Random />
                <Search />
                <Categories />
                <Subscribe />
                <Footer />
                
                {is_visible && (
                    <div className="scroll-to-top" onClick={() => this.scrollToTop()}>
                        <BiArrowToTop />
                    </div>
                )}
            </>
        )
    }
}

export default Home;
