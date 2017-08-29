import React, { PropTypes } from 'react';

class TitleSeparator extends React.Component {

  constructor(props) {
    super(props)

    this.state = props;
  }

  render() {

    return (
        <div className="titleSeparator">
            <div className="content">
                {this.state.text}
            </div>
            <div className="title">
                {this.state.title}
            </div>
        </div>
      );
  }
}


TitleSeparator.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
};

export default TitleSeparator;
