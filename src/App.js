import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Directions from './Directions';

class App extends Component {

  constructor() {
    super();

    this.state = {
      queryFromApi: [],
      userInputlocation: '',
    }
  }


  async componentDidMount() {
    //  Pass lat/long from (Geocode Address API) here ↓ , in (Place Search API)
    try {
      // Retrieve query results + await for a promise to be resolved
      const { data: { results } } = await axios({
        url: "http://www.mapquestapi.com//search/v4/place",
        method: "GET",
        responseType: "JSON",
        params: {
          // Passing long, lat from  (Get Geocode Address API see below) to check the response
          location: "-79.381713, 43.651893",
          key: "RSBH9KbMvmkRzdRkD8Joil8TqbXW3HvB",
          sort: "relevance",
          // By default is museum, we'll interpolate user input instead
          q: "restaurant",
        }
      })

      console.log(results);

      // Update state with the results data from an API call
      this.setState({
        queryFromApi: results,
      })

      // Handle error if promise is rejected
    } catch (error) {
      console.log(`Axios ruquest is failed ${error}`);
    }

    // Get Geocode Address ( longtitude, latitude) based on user input
    try {
      // Retrieve coordinates data (lat, long) + await for a promise to be resolved
      const { data: { results: [{ locations: [{ latLng: { lat, lng } }] }] } } = await axios({
        url: `http://www.mapquestapi.com/geocoding/v1/address`,
        method: "GET",
        responseType: "JSON",
        params: {
          key: "RSBH9KbMvmkRzdRkD8Joil8TqbXW3HvB",
          // Default value, insted we'll interpolate user input
          location: "Toronto,ON",
        }
      })


      console.log(lat, lng); // lat long

      // Handle error if promise is rejected
    } catch (error) {
      console.log(`Axios ruquest is failed ${error}`);
    }
  }

  render() {
    return (
      <div>
        <h1>Shopper - Mapper</h1>
        <Directions />
      </div>
    );
  }
}

export default App;
