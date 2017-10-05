import React, { PropTypes } from 'react';

class TitleSeparatorVert extends React.Component {

  constructor(props) {
    super(props)

    this.state = props;
  }

  render() {

    return (
        <div className="titleSeparatorVert">
            <div >
                {this.state.text}
            </div>
            <div className="title">
                {this.state.title}
            </div>
        </div>
      );
  }
}


TitleSeparatorVert.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
};

export default TitleSeparatorVert;
