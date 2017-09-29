import React, { Component } from 'react'
import UserStoryService from '../services/UserStoryService.js';
import UserStoriesContent from '../components/UserStory/UserStoriesContent.js';


let userStoryService = new UserStoryService();

class Crea extends Component {
    constructor(props) {
      super(props)
  
      this.state = {};
  
      //get stories
      let userStories = userStoryService.getLastCrea();
      userStories.then((list) => {
        this.setState({
          userStories: list
        });
      });
    }
 
      render() {
        const { datasets, dataset, ope } = this.props
        return (
        <div>
            <div className="u-textCenter">
                

                <section className="u-nbfc u-background-white  u-textCenter u-layout-r-withGutter u-padding-r-top u-padding-r-bottom u-posRelative u-zindex-30">
                <div className="u-layout-wide u-layoutCenter">
                    
                    <UserStoriesContent userStories={this.state.userStories} >
                    </UserStoriesContent>
                    
                 
                </div>
                </section>
            </div>
        </div>
        )
    }
}

export default Crea