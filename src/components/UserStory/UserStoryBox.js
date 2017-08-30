import React from 'react';
import { Route, Link } from 'react-router-dom';


class UserStoriesBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = props;
  }

  trunc (text, size) {
    if(text.length > size) {
      text = text.substr(0, size);
      text += "...";
    }

    return text;
  }

  render() {

    return (
        <div className="Grid-cell u-sizeFull u-md-size1of3 u-lg-size1of3 u-margin-r-bottom u-layout-matchHeight">
            <div className="u-nbfc u-borderRadius-m u-background-grey-10 u-color-grey-70">
              <section className="u-text-r-l u-padding-r-all u-layout-prose">
                <h3 className="u-padding-r-bottom">
                  
                  <Link role="button" to={"/user_story/" + this.state.story.id}>
                    <a className="u-text-h4 u-textClean u-color-50" href="">
                      {this.state.story.title}
                    </a>
                  </Link>

                </h3>
                <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                  {this.trunc(this.state.story.text, 300)}
                </p>
                <p><strong>Pubblicato da:</strong> {this.state.story.user}</p>
                <p><strong>Data di ultima modifica:</strong> {this.state.story.dateLastEdit}</p>
                <p className="u-textCenter u-text-md-right u-text-lg-right u-margin-r-top u-padding-r-top">
                  <a href="#" className="u-color-50 u-textClean u-text-h6">
                  Per saperne di più <span className="Icon Icon-chevron-right"></span></a>
                </p>
              </section>
            </div>
          </div>
      );
  }
}

export default UserStoriesBox;
