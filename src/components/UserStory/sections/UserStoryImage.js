import React from 'react';
import Async from 'react-promise'
import { serviceurl } from '../../../config/serviceurl.js'


class UserStoryImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      imageSrc: ""
    }
  }

  componentDidMount() {
    const { graph } = this.props
    /* var graphNumber = 'graph' + graph; */
    let identifier = graph.props.wid_key
    if (identifier && identifier.indexOf("TextWidget")===-1) {
      console.log('identifier: ' + identifier);
      let url = serviceurl.apiURLDatiGov + '/plot/' + identifier + '/700x600';
      const response = fetch(url, {
        method: 'GET'
      }).then(response => response.text())
        .then(text => {
          this.setState({
            loading: false,
            imageSrc: text
          })
        })
    } else {
      this.setState({
        loading: false,
        imageSrc: ""
      })
    }
  }

  getQueryStringValue(url, key) {
    return decodeURIComponent(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

  render() {
    const imgStyle = {
      width: '100%'
    }

    if (this.props.graph.props.wid_key.indexOf('TextWidget') != -1)
      return (
        <div className="u-margin-r-top u-padding-r-top" dangerouslySetInnerHTML={{ __html: this.props.graph.props.text }}></div>
      )
    else{
      var base64Icon = ""
      if (this.state.imageSrc) {
        base64Icon = "base64," + this.state.imageSrc.replace(/"/g, '')
      }
      return localStorage.getItem('username') && localStorage.getItem('token')
        ? <iframe className="u-margin-r-top u-padding-r-top" src=""></iframe>
        : this.state.loading === true ? <p>Caricamento ...</p> : (
          <div className="text-center u-margin-r-top u-padding-r-top">
            {this.state.imageSrc &&
              <img style={imgStyle} src={"data:image/jpg;" + base64Icon} />
            }
          </div>
        );
    }
  }
}

export default UserStoryImage;
