import React from 'react';

// SERVICES
import UserStoryService from '../services/UserStoryService';

const userStoryService = new UserStoryService();

class UserStoryView extends React.Component {

  constructor(props) {
    super(props);

    //init state
    this.state={
      id: this.props.match.params.id
    };

    //bind functions

    //load data
    let response = userStoryService.get(this.state.id);
    response.then((story) => {
      this.setState({
        story: story
      });
    });
  }

  render() {
    return (
        <div>
          { this.state.story && 
          <div>
            {this.state.story.title}
          </div>
          }
        </div>
      );
  }
}

export default UserStoryView;
