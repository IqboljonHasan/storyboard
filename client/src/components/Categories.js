import React, { Component } from 'react';
import { categories } from '../helper'
class Categories extends Component {
    render() {
        return (
            <section id='categories'className=" d-flex align-items-center">
                <div className="categ">
                    <div className="sub-categ">
                        <div className="container">
                                {
                                    categories.map(categ => {
                                        return (
                                            <div className="itemss">{categ}</div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Categories;
