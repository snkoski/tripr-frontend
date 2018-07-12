import React from 'react';
import { Dropdown } from 'semantic-ui-react'

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        user_id: this.props.user_id,
        name: '',
        start_date: '',
        end_date: '',
        destination_id: ''
      }
    }
  }



  handleChange = (e) => {
    console.log(e.target.value);
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value};
    this.setState({ fields : newFields});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toogleForm()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.fields)
    }
    fetch('http://localhost:3001/api/v1/trips', options)
    .then(resp => resp.json())
    .then(trip => this.props.updateTrips([...this.props.trips, trip]))
    .then(this.setState({
      fields: {
        user_id: this.props.user_id,
        name: '',
        start_date: '',
        end_date: '',
        destination_id: ''
      }
    }))
  };
render() {
  console.log(this.state.fields.destination_id);
  const { fields } = this.state;
  return(
    <div id='content'>
      <div className='ui form'>
        <form onSubmit={this.handleSubmit}>
          <div className='ui field'>
            <label>Trip Name</label>
            <input
              name='name'
              type='text'
              placeholder='name'
              value={fields.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='ui field'>
            <label>Destination</label>
            <select  onChange={this.handleChange} value={fields.destination_id}
            name='destination_id'>

              <option selected> -- select a destination -- </option>
              {this.props.destinations.map((destination) => {
                return <option value={destination.id}
                  key={destination.id}>{destination.name}</option>
              })}
            </select>
          </div>
          <div className='ui field'>
            <label>Start Date</label>
            <input
              name='start_date'
              type='date'
              placeholder='start date'
              value={fields.start_date}
              onChange={this.handleChange}
            />
          </div>
          <div className='ui field'>
            <label>End Date</label>
            <input
              name='end_date'
              type='date'
              placeholder='end date'
              value={fields.end_date}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' className='ui basic green button'>Create Trip</button>
        </form>
      </div>
    </div>
  );
}
}

export default NewTripForm;
