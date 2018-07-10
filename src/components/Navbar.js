import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { fixed } = this.state;
    const loggedIn = !!this.props.currentUser.id

    return (
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
        <Container>
          <Menu.Item as='a' id='nav-tripr' active header onClick={this.props.onNavClick} >
            Tripr
          </Menu.Item>
          <Menu.Item as='a' id='nav-trips' onClick={this.props.onNavClick}>Trips</Menu.Item>
          <Menu.Item as='a' id='nav-destinations' onClick={this.props.onNavClick}>Destinations</Menu.Item>
          <Menu.Item position='right'>

            { loggedIn ? <Button as='a' inverted={!fixed} onClick={this.props.onLogout}>Log Out</Button> : <Button as='a' inverted={!fixed}>Log In</Button>}

            <Button onClick={this.props.onLogout} as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

Navbar.propTypes = {
  onNavClick: PropTypes.func
};

export default Navbar;
