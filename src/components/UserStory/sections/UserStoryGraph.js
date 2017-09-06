import React from 'react';

class UserStoryView extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    
    const iframeStyle = {
      width: '100%',
      height: '300px',
      border: '0'
    }

    return (
        <div>
            {
              this.props.graph &&
              <iframe
                className={this.props.class}
                ref="iframe"
                frameBorder={'0'}
                style={iframeStyle}
                src={this.props.graph.props.url}
              />
            }
        </div>
      );
  }
}

export default UserStoryView;
