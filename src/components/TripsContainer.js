import React from 'react';
import TripCard from './TripCard';
import { Item, Button } from 'semantic-ui-react';
import NewTripForm from './NewTripForm';
class TripsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      destinations: [],
      trips: [],
      showActivities: false,
      showForm: false
    }
  }

  componentDidMount(){
    this.getTrips(this.props.user.id)
    this.getDestinations()
  }



getDestinations() {
  fetch('http://localhost:3001/api/v1/destinations')
  .then(resp => resp.json())
  .then(destinations => this.setState({ destinations })
)}

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
  const reversedTrips = this.state.trips.reverse()
  return reversedTrips.map(trip => {
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

toogleForm = (e) => {
  this.setState({
    showForm: !this.state.showForm
  })
}

render() {
  return(
    <div>
      <Button onClick={this.toogleForm}>{this.state.showForm ? 'Close Form' : 'New Trip'}</Button>
      {this.state.showForm ? <NewTripForm user_id={this.props.user.id} trips={this.state.trips} destinations={this.state.destinations} updateTrips={this.updateTrips}
        toogleForm={this.toogleForm}/> : null}
      <h1>{this.props.user.username}'s Trips</h1>

      <Item.Group>
        {this.renderTripCards()}
      </Item.Group>
    </div>)
  }
}

export default TripsContainer;
