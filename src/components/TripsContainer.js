import React from 'react';
import TripCard from './TripCard';
import { Item } from 'semantic-ui-react';
import NewTripForm from './NewTripForm';
class TripsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: [],
      showActivities: false
    }
  }

  componentDidMount(){
    this.getTrips(this.props.user.id)
  }

getTrips(id) {
  fetch('http://localhost:3001/api/v1/users/' + id + '/trips')
  .then(resp => resp.json())
  .then(trips => this.setState({ trips })
)}

activityClick = (e) => {
  this.setState({
    showActivities: !this.state.showActivities
  })
}

renderTripCards() {
  return this.state.trips.map(trip => {
    const key = `trip-${trip.id}`;
    return (
      <TripCard handleClick={this.activityClick} key={key} {...trip} showActivity={this.state.showActivities} />
    );
  });
}

updateTrips = (newTrips) => {
  this.setState({
    trips: newTrips
  })
}

render() {
  return(
    <div>
      <NewTripForm user_id={this.props.user.id} trips={this.state.trips} updateTrips={this.updateTrips}/>
      <h1>{this.props.user.username}'s Trips</h1>
      <Item.Group>
        {this.renderTripCards()}
      </Item.Group>
    </div>)
  }
}

export default TripsContainer;
