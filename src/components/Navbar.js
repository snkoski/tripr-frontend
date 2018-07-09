import React, { Component } from 'react';
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

    return (
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
        <Container>
          <Menu.Item as='a' active header>
              Tripr
          </Menu.Item>
          <Menu.Item as='a'>Trips</Menu.Item>
          <Menu.Item as='a'>Destinations</Menu.Item>
          <Menu.Item position='right'>
            <Button as='a' inverted={!fixed}>
                Log In
            </Button>
            <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }

}

export default Navbar;
