import React from 'react';


class UserStoryImage extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    

    return (
        <div className="text-center">
          {
            this.props.image &&
            <div>
              <img className="image-container" src={this.props.image.url} />
              <div className="image-caption" >
                <div dangerouslySetInnerHTML={{__html: this.props.image.caption}}></div>
              </div>
            </div>
          }
        </div>
      );
  }
}

export default UserStoryImage;
