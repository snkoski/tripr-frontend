import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item
          header
          name='tripr'
        >
          Tripr
        </Menu.Item>

        <Menu.Item
          position='right'
          name='login'
        >
          Log In
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
