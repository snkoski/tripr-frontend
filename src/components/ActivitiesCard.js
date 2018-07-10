import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const ActivitiesCard = ({ name, description, id, thumbnail }) => {
  return (
    <div>
      <Item className='activities-card-item'>
        <Item.Image className='activities-card-image' size='medium' src={thumbnail} />
        <div className='activities-card-div'>
          <Item.Content >
            <Item.Header as='a' className='activities-card-header'>{name}</Item.Header>
            <Item.Meta className='activities-card-meta'><br></br></Item.Meta>
            <Item.Description className='activities-card-description'>
              {description}
            </Item.Description>

          </Item.Content>
        </div>
      </Item>
    </div>
  );
};

ActivitiesCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default ActivitiesCard;
