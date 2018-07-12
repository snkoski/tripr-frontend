import React from 'react';

class LoginForm extends React.Component {
  state = {
    fields: {
      username: '',
      password: ''
    }
  };

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
    fetch('https://tripr-backend.herokuapp.com/api/v1/login', options)
    .then(resp => resp.json())
    .then(user => {
      this.props.onLogin(user)
    })
  };
  render() {
    const { fields } = this.state;
    return(
      <div id='content'>
        <div className='ui form'>
          <form onSubmit={this.handleSubmit}>
            <div className='ui field'>
              <label>Name</label>
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
            <button type='submit' className='ui basic green button'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
