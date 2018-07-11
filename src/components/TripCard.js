import React from 'react';
import { Item } from 'semantic-ui-react';
import ActivitiesContainer from './ActivitiesContainer';


class TripCard extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    showActivities: this.props.showActivity,
    activities: [],
    destination: ''
  }
}

componentDidMount() {
  this.getDestination(this.props.destination_id)
}

getDestination(id) {
  fetch('http://localhost:3001/api/v1/destinations/' + id )
  .then(resp => resp.json())
  .then(destination => this.setState({ destination }))
}

clickChangeState = (e) => {
  this.setState({
    showActivities: !this.state.showActivities
  })
}

  render() {
    return(
      <div>
        <Item onClick={this.clickChangeState} className='trip-card-item'>
          <Item.Image size='medium' src={this.state.destination.thumbnail} />
          <div className='trip-card'>
            <Item.Content className='trip-card-content'>
              <Item.Header as='a'>{this.props.name}</Item.Header>
              <Item.Meta className='trip-card-meta'>
                <br></br>
              </Item.Meta>
              <Item.Description className='trip-card-description'>
                {this.state.destination.name}
              </Item.Description>

            </Item.Content>
          </div>
        </Item>
        {this.state.showActivities ? <h1>Your Activities</h1> : null}
        {this.state.showActivities ? <ActivitiesContainer url={`http://localhost:3001/api/v1/trips/${this.props.id}/activities`}/> : null}
      </div>
    )
  }

}

export default TripCard;
