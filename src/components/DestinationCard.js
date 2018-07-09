import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const DestinationCard = ({ name, description }) => {
  return (
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>{name}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          {description}
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

DestinationCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default DestinationCard;
