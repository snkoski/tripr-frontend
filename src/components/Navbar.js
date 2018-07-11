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
    const loggedIn = !!this.props.currentUser.id;

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

          {loggedIn ?
            (
              <Menu.Item as='a' id='nav-trips' onClick={this.props.onNavClick}>My Trips</Menu.Item>
            ) :
            null
          }

          {loggedIn ?
            (
              <Menu.Item as='a' id='nav-destinations' onClick={this.props.onNavClick}>Destinations</Menu.Item>
            ) :
            null
          }

          <Menu.Item position='right'>

            { loggedIn ?
              <Button id='nav-logout' as='a' inverted={!fixed} onClick={this.props.onLogout}>Log Out</Button> :
              (
                <div>
                  <Button id='nav-login' onClick={this.props.onNavClick} as='a' inverted={!fixed}>Log In</Button>
                  <Button id='nav-signup' onClick={this.props.onNavClick} as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                  Sign Up
                  </Button>
                </div>
              )
            }
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
