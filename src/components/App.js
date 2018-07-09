import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Segment,
} from 'semantic-ui-react';

import Welcome from './Welcome';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const { fixed } = this.state;

    return (
      <div id="main">
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
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
          <Welcome />
        </Segment>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
