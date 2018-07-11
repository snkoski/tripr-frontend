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
    this.getActivities(this.props.url);
  }

  getActivities(id) {
    fetch(id)
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
          <Item.Group>
            {this.renderActivitiesCards()}
          </Item.Group>
      </div>
    );
  }
}

export default ActivitiesContainer;
