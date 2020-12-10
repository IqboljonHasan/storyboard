import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';

class Search extends Component {
    state = {
        isSearching: false,
        searchValue: ''
    }


    handleSearch = (e) => {
        this.setState({isSearching: true, searchValue: e.target.value})
    }
    render() {
        return (
            <section id="search" className="">
                <div className="container d-flex flex-column align-items-center">
                    <div className={`search ${this.state.isSearching ? 'search-sm' : 'search-lg'}`}>
                        <input
                            type="text"
                            placeholder="Search for stories"
                            value={this.state.searchValue}
                            onChange={e => this.handleSearch(e)}
                        />
                        {
                            this.state.searchValue === '' ?
                                <BiSearch 
                                    style={{fontSize:'2rem'}}
                                    onClick={this.handleSearch}
                                />
                                :
                                <BiX 
                                    style={{fontSize:'2rem'}}
                                    onClick={() => this.setState({searchValue:''})}
                                />
                        }
                    </div>
                    <div className="search-list">
                        {
                            this.state.isSearching && this.state.searchValue && [1,2,3,4,5,6,7,8,9,10].map(i => {
                                return (
                                    <div key={i} className="d-flex">
                                        <h3 className="mr-2">Story Title Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ipsum.</h3>
                                        <div>
                                            <h4 className="mr-2">{i} Story Author</h4> 
                                            <p className="mr-2">Category</p>
                                        </div>
                                    </div>

                                )
                            }
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Search;
