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

    if(this.props.graph.type === 'TextWidget')
     return(
       <div className="u-margin-r-top u-padding-r-top" dangerouslySetInnerHTML={{ __html: this.props.graph.props.text }}></div>
     )
    else{
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
}

export default UserStoryView;
