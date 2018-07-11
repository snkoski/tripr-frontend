import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import ActivitiesContainer from './ActivitiesContainer';

class DestinationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showActivities: this.props.showActivity,
      activities: []
    };

    this.BASE_URL = 'http://localhost:3001/api/v1/destinations';

    this.clickChangeState = () => {
      this.setState({
        showActivities: !this.state.showActivities
      });
    };
  }

  render() {
    return (
      <div>
        <Item onClick={this.clickChangeState} className='destination-card-item'>
          <Item.Image size='medium' src={this.props.thumbnail} />
          <div className='destination-card'>
            <Item.Content className='destination-card-content'>
              <Item.Header as='a'>{this.props.name}</Item.Header>
              <Item.Meta className='destination-card-meta'>
                <br></br>
              </Item.Meta>
              <Item.Description className='destination-card-description'>
                {this.props.description}
              </Item.Description>

            </Item.Content>
          </div>
        </Item>
        {this.state.showActivities ? <h1>Top Activities</h1> : null}
        {this.state.showActivities ? <ActivitiesContainer url={`http://localhost:3001/api/v1/destinations/${this.props.id}/activities`}/> : null }
      </div>
    );
  }
}

DestinationCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  showActivity: PropTypes.bool,
  thumbnail: PropTypes.string
};

export default DestinationCard;
