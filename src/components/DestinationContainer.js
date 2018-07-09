import React, { Component } from 'react';
import DestinationCard from './DestinationCard';

class DestinationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinations: []
    };

    this.BASE_URL = 'http://localhost:3001/api/v1';
  }

  componentDidMount() {
    this.getDestinations();
  }

  getDestinations() {
    fetch(`${this.BASE_URL}/destinations`)
      .then(resp => resp.json())
      .then(json => this.setState(prevState => {
        return {
          ...prevState,
          destinations: json
        };
      }));
  }

  renderDestinationCards() {
    return this.state.destinations.map(destination => {
      const key = `destination-${destination.id}`;
      return (
        <DestinationCard key={key} {...destination} />
      );
    });
  }

  render() {
    return (
      <div id='destinations-container'>
        <h1>Top Destinations</h1>
        {this.renderDestinationCards()}
      </div>
    );
  }
}

export default DestinationContainer;
