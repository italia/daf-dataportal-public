import React from 'react';

import TitleSeparator from '../TitleSeparator/titleSeparator.js';
import UserStoryBox from './UserStoryBox.js';

class UserStoriesContent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title : "storie",
      subtitle : "Le storie sono articoli scritti da noi e dalla nostra community di esperti: partendo dai dati, interpretiamo il mondo e aiutiamo la socità a prendere decisioni basate sui fatti"
    };

    if (this.props.title)
      this.state.title = this.props.title;

    if (this.props.subtitle)
      this.state.subtitle = this.props.subtitle;

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userStories: nextProps.userStories
    });
  }

  render() {

    let stories = [];

    if (this.state.userStories) {
      stories = this.state.userStories.map((story, key) => {
        if (key > 3) return;
        return (
          <UserStoryBox key={key} story={story}>
          </UserStoryBox>
        )
      });
    }

    return (
        <div className = "Grid Grid--withGutter text-left mt-40">
          <TitleSeparator text={this.state.subtitle} title={this.state.title} />
          {stories}
        </div>
      );
  }
}

export default UserStoriesContent;
