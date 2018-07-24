import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

const Welcome = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Welcome to Tripr'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Collaborative trip planning made easy.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    {/* <Button href="https://plankaroo.herokuapp.com/login" primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button> */}
  </Container>
);

Welcome.propTypes = {
  mobile: PropTypes.bool,
};

export default Welcome;
