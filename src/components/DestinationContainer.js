import React, { Component } from 'react';

class DestinationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinations: []
    };
  }

  componentDidMount() {
    this.getDestinations();
  }

  getDestinations() {
    fetch('http://localhost:3001/api/v1/destinations')
      .then(resp => resp.json())
      .then(json => this.setState(prevState => {
        return {
          ...prevState,
          destinations: json
        };
      }));
  }

  render() {
    return (
      <div id='destinations-container'>
        <h1>Top Destinations</h1>
      </div>
    );
  }
}

export default DestinationContainer;
