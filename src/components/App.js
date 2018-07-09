import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import Welcome from './Welcome';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'tripr'
    };
  }

  render() {
    return (
      <div id="main">
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Navbar />
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
