import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
      }
    };

    this.handleChange = (e) => {
      e.persist();
      this.setState(prevState => {
        return {
          ...prevState,
          fields: {
            ...prevState.fields,
            [e.target.name]: e.target.value
          }
        };
      });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.state.fields)
      };
      fetch('http://localhost:3001/api/v1/users', options)
        .then(resp => resp.json())
        .then(user => {
          this.props.onLogin(user);
        })
        .then(() => this.props.showWelcome())
    };
  }

  render() {
    const { fields } = this.state;
    return(
      <div id='content'>
        <div className='ui form'>
          <form onSubmit={this.handleSubmit}>
            <div className='ui field'>
              <label>First Name</label>
              <input
                name='first_name'
                placeholder='first name'
                value={fields.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className='ui field'>
              <label>Last Name</label>
              <input
                name='last_name'
                placeholder='last name'
                value={fields.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className='ui field'>
              <label>Email Address</label>
              <input
                name='email'
                placeholder='email'
                value={fields.email}
                onChange={this.handleChange}
              />
            </div>
            <div className='ui field'>
              <label>Username</label>
              <input
                name='username'
                placeholder='username'
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className='ui field'>
              <label>Password</label>
              <input
                name='password'
                type='password'
                placeholder='password'
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type='submit' className='ui basic green button'>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
