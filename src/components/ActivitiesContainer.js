import React, { Component } from 'react';
import ActivitiesCard from './ActivitiesCard';
import { Item } from 'semantic-ui-react'

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: []
    };

    this.BASE_URL = 'http://localhost:3001/api/v1/destinations';
  }

  componentDidMount() {
    this.getActivities(this.props.id);
  }

  getActivities(id) {
    fetch(`${this.BASE_URL}/` + id + `/activities`)
      .then(resp => resp.json())
      .then(json => this.setState(prevState => {
        return {
          ...prevState,
          activities: json
        };
      }));
  }




  renderActivitiesCards() {
    return this.state.activities.map(activity => {
      const key = `activities-${activity.id}`;
      return (
        <ActivitiesCard key={key} {...activity} />
      );
    });
  }

  render() {
    return (
      <div id='activities-container'>
        <h1>Top Activities</h1>
          <Item.Group>
            {this.renderActivitiesCards()}
          </Item.Group>
      </div>
    );
  }
}

export default ActivitiesContainer;
