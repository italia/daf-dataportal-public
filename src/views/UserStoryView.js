import React from 'react';

// sections
import UserStoryGraph from '../components/UserStory/sections/UserStoryGraph';
import UserStoryHeader from '../components/UserStory/sections/UserStoryHeader';
import UserStoryImage from '../components/UserStory/sections/UserStoryImage';

import UserStoriesContent from '../components/UserStory/UserStoriesContent';

// SERVICES
import UserStoryService from '../services/UserStoryService';

const userStoryService = new UserStoryService();

var disqus_config;

class UserStoryView extends React.Component {

  constructor(props) {
    super(props);
    this.init(props);
  }

  init(props) {

    //init state
    this.state={
      id: props.match.params.id
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

  /*   userStoryService.getCommunity().then((story) => {
      this.setState({
        userStoriesCommunity: story
      });
    }); */
    
    //INIT DISQUS
    
    var d = document;
    var sConfig = d.createElement('script');
    sConfig.onload = function() {
      disqus_config = function () {
        this.page.url =  window.location.href ;
        this.page.identifier = 'user_story_' + props.match.params.id 
      }
    };

    (d.head || d.body).appendChild(sConfig);


    var s = d.createElement('script');
    s.src = 'https://dati-gov-it.disqus.com/embed.js';
    s.setAttribute('data-timestamp', + new Date());
    (d.head || d.body).appendChild(s);

  }

  componentWillReceiveProps(newProps) {
    this.init(newProps);
  }

  render() {
    return (
      <div className="u-layout-wide u-layoutCenter">

        <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
          <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Data Stories</h2>
        </div>
        <div className="u-padding-top-xxl u-background-50"></div>
        <hr className="Separator Separator--up u-background-white" />
        <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">

          <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
            <div className="Grid Grid--withGutter">
              <div className="Grid-cell u-md-size8of12 u-lg-size8of12 u-padding-right-xl">




                <div className="row user-story-view">
                  <div>

                    {
                      this.state.story &&
                      <div>
                        <UserStoryHeader story={this.state.story} />
                      
                        <div className="body">
                          <UserStoryImage story={this.state.story} graph={1}/>
                          <div className="u-margin-r-top u-padding-r-top" dangerouslySetInnerHTML={{ __html: this.state.story.text }}></div>
                          <UserStoryImage story={this.state.story} graph={2}/>
                          <div className="footer" dangerouslySetInnerHTML={{ __html: this.state.story.footer }}></div>
                        </div>

                        {/* SHARE */}
                        <div className="share">
                          <ul className="Footer-socialIcons">
                            <li>
                              <a href="">
                                <span className="Icon Icon-facebook u-background-white"></span>
                                <span className="u-hiddenVisually">Facebook</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="Icon Icon-twitter u-background-white"></span>
                                <span className="u-hiddenVisually">Twitter</span>
                              </a>
                            </li>
                            <li>
                              <a href=""><span className="Icon Icon-youtube u-background-white"></span><span className="u-hiddenVisually">Youtube</span></a>
                            </li>
                          </ul>
                        </div>

                        <div id="disqus_thread"></div>
                        <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

                      </div>
                    }



                    {/* <UserStoriesContent subtitle=" " title="Storie dalla community" userStories={this.state.userStoriesCommunity} >
            </UserStoriesContent> */}

                  </div>
                </div>



              </div>
              <div className="Grid-cell u-sizeFull u-md-size4of12 u-lg-size4of12">

                <article className="u-padding-all-l u-background-white u-lineHeight-l u-text-r-s u-textSecondary u-margin-bottom-l Prose-blockquote">
                  <UserStoriesContent subtitle=" " title="Storie simili" userStories={this.state.userStoriesSimili} userStoryView="true">
                  </UserStoriesContent>
                </article>



              </div>
            </div>
          </div>

        </div>


      </div>
        
      );
  }
}

export default UserStoryView;
