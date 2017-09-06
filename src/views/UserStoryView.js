import React from 'react';

// sections
import UserStoryGraph from '../components/UserStory/sections/UserStoryGraph';
import UserStoryHeader from '../components/UserStory/sections/UserStoryHeader';
import UserStoryImage from '../components/UserStory/sections/UserStoryImage';

import UserStoriesContent from '../components/UserStory/UserStoriesContent';

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
    userStoryService.get(this.state.id).then((story) => {
      this.setState({
        story: story
      });
    });

    userStoryService.getSimili(this.state.id).then((story) => {
      this.setState({
        userStoriesSimili: story
      });
    });

    userStoryService.getCommunity().then((story) => {
      this.setState({
        userStoriesCommunity: story
      });
    });
    
    //INIT DISQUS
    
    var disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = "user_story_" + this.state.id; 
    };
    
    var d = document, s = d.createElement('script');
    s.src = 'https://dati-gov-it.disqus.com/embed.js';
    s.setAttribute('data-timestamp', + new Date());
    (d.head || d.body).appendChild(s);

  }

  render() {
    return (
        <div className="row user-story-view">
          <div className="col-sm-offset-1 col-sm-10">

            { 
              this.state.story && 
              <div>
                <UserStoryHeader story={this.state.story} />
                <UserStoryGraph graph={this.state.story.graph} />
                <div className="body">
                  <div dangerouslySetInnerHTML={{__html: this.state.story.text}}></div>
                  <UserStoryImage image={this.state.story.image} />
                  <div className="footer" dangerouslySetInnerHTML={{__html: this.state.story.footer}}></div>
                </div>


                <div id="disqus_thread"></div>
                <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

              </div>
            }

            <UserStoriesContent subtitle=" " title="Storie di argomento simile" userStories={this.state.userStoriesSimili} >
            </UserStoriesContent>

            <UserStoriesContent subtitle=" " title="Storie dalla community" userStories={this.state.userStoriesCommunity} >
            </UserStoriesContent>

          </div>
        </div>
      );
  }
}

export default UserStoryView;
