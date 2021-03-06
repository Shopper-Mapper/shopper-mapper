import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
    constructor() {
        super();
        this.state = {
            userInputlocation: '',
            userInputQuery: '',
        }
    }

    handleChangeLocation = (e) => {
        this.setState({
            userInputlocation: e.target.value,
        })
    }

    handleChangeQuery = (e) => {
        this.setState({
            userInputQuery: e.target.value,
        })
    }

    render() {
        const { userInputlocation, userInputQuery } = this.state;
        const { handleClick } = this.props;

        return (
            <header className="header">
                <form className="row" action="">
                    <div className="header-search col-35">
                        <div>
                            <div>
                                <label className="sr-only" htmlFor="searchLocation">Enter location:</label>
                                <input
                                    className="input input-location"
                                    onChange={this.handleChangeLocation}
                                    type="text"
                                    name="searchLocation"
                                    id="searchLocation"
                                    placeholder="551 King St W Toronto, ON" />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="searchQuery">Enter query:</label>
                                <input
                                    className="input input-query"
                                    onChange={this.handleChangeQuery}
                                    type="text"
                                    name="searchQuery"
                                    id="searchQuery"
                                    placeholder="restaurant" />
                            </div>
                        </div>
                    </div>
                    <div className="col-auto header-search-btn">
                        <button
                            className="button"
                            onClick={(event) => handleClick(event, userInputlocation, userInputQuery,)}
                            type='submit'>
                            <FontAwesomeIcon
                                className="search-icon"
                                icon={faSearch}
                            />
                        </button>
                    </div>
                    <div className="sm-logo">
                        <h1>Shopper Mapper</h1>
                        <img className="sm-icon" src={require("./assets/shopper-mapper-icon.png")} alt="Shopper Mapper Logo" />
                    </div>
                </form>
            </header>
        )
    }
}

export default Header;