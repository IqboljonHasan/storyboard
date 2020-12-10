import React, { Component } from 'react';
import { BiLike } from 'react-icons/bi'
import covimg from '../assets/img/o.jpg';
class Random extends Component {
    render() {
        return (
            <section id="random" className="random container d-flex flex-column justify-content-center align-items-center">
                <div className="random-title mb-4">
                   Most read and liked story of today
                </div>
                <div className="paper d-flex justify-content-between align-items-start">
                    <div className="d-flex flex-column align-items-center mr-4">
                        <div className="img" style={{ backgroundImage: `url(${covimg})`}}></div>
                        <div className="d-flex align-items-center mt-2">
                            <BiLike style={{fontSize: '2em'}}/>
                            <div className="" style={{fontSize: '1.5em'}}>23</div>
                        </div>
                    </div>
                    <div>
                        <h2 className="story-title">Title Lorem ipsum dolor sit.</h2>
                        <div className="d-flex align-items-center my-2">
                            <h3 className="story-author mr-4">John Simon</h3>
                            <i>10-12-2020</i>
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam fugiat quia quaerat quam maiores explicabo aut quibusdam officia eligendi autem distinctio beatae! Fugit at corporis saepe ut suscipit dicta in voluptate ipsam mollitia. Consequatur, error in. Quam sequi enim a dolores architecto, cumque deserunt saepe repudiandae fuga rem! Provident nobis beatae officia ipsum corporis! Autem excepturi omnis odio labore et commodi officiis veritatis molestiae maiores dolorum ut ipsum magnam vitae, temporibus nostrum quia animi voluptatibus reprehenderit fugit nobis quas quo repellendus ipsa. Amet ipsam placeat, officia debitis a error sequi dignissimos, saepe dolores reiciendis alias corrupti repellat blanditiis tempora.
                        </div>
                        <a href="/stories">Read more</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Random;
