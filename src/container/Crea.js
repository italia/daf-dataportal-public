import React, { Component } from 'react'
import UserStoryService from '../services/UserStoryService.js';
import UserStoriesContent from '../components/UserStory/UserStoriesContent.js';


let userStoryService = new UserStoryService();

class Crea extends Component {
    constructor(props) {
      super(props)
  
      this.state = {};
  
      //get stories
      //let userStories = userStoryService.getLastCrea();
      let userStories = userStoryService.getLast();
      userStories.then((list) => {
        this.setState({
          userStories: list
        });
      });
    }
 
      render() {
        const { datasets, dataset, ope } = this.props
        return (
           /*  <div>
                <div className="u-textCenter">


                    <section className="u-nbfc u-background-white  u-textCenter u-layout-r-withGutter u-padding-r-top u-padding-r-bottom u-posRelative u-zindex-30"> */
                        <div className="u-layout-wide u-layoutCenter">
                            <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                                <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Data Stories</h2>
                            </div>
                            <div className="u-padding-top-xxl u-background-50"></div>
                            <hr className="Separator Separator--up u-background-white" />

                            <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">


                                <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">

                                    <UserStoriesContent userStories={this.state.userStories} >
                                    </UserStoriesContent>
                                </div>
                            </div>
                        </div>
            /*         </section>
                </div>
            </div> */
        )
    }
}

export default Crea