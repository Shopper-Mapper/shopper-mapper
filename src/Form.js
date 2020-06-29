import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";



class Header extends Component {

    constructor() {
        super();

        this.state = {
            userInputlocation: '',
            userInputQuery: '',
        }
    }

    handleChangeLocation = (e) => {
        console.log(e.target.value);
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
        return (
            <header className="header">
                <form className="row" action="">
                    <div className="header-search col-auto">
                        <div>
                            <label className="sr-only" htmlFor="searchLocation">Enter location:</label>
                            <input className="input input-location" onChange={this.handleChangeLocation} type="text" name="searchLocation" id="searchLocation" placeholder="Your location" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="searchQuery">Enter query:</label>
                            <input className="input input-query" onChange={this.handleChangeQuery} type="text" name="searchQuery" id="searchQuery" placeholder="Your query" />
                        </div>
                    </div>

                    <div className="col-auto">
                        <button className="button" onClick={(event) => this.props.handleClick(event, this.state.userInputlocation, this.state.userInputQuery,)} type='submit'><FontAwesomeIcon icon={faGlobeAmericas} size="2x" /></button>
                    </div>
                </form>
            </header>
        )
    }
}

export default Header;