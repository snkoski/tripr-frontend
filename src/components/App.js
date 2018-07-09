import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import Welcome from './Welcome';
import Navbar from './Navbar';
import DestinationContainer from './DestinationContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'nav-tripr'
    };

    this.handleNavClick = (e) => {
      e.persist();
      this.setState(prevState => {
        return {
          ...prevState,
          activeItem: e.target.id
        };
      });
    };
  }

  renderContent() {
    switch (this.state.activeItem) {
    case 'nav-tripr':
      return <Welcome />;
    case 'nav-destinations':
      return <DestinationContainer />;
    default:
      return <h1>404 Not Found</h1>;
    }
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
          <Navbar onNavClick={this.handleNavClick} />
          {this.renderContent()}
        </Segment>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
