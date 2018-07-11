import React from 'react';

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
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value};
    this.setState({ fields : newFields});
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
  console.log(this.props);
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
            <input
              name='destination_id'
              type='number'
              placeholder='destination_id'
              value={fields.destination_id}
              onChange={this.handleChange}
            />
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
