import React from 'react';
import Async from 'react-promise'

class DashboardImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      imageSrc: ""
    }
  }

  componentDidMount() {
    const { dashboard } = this.props;
    let identifier = "";
    if (dashboard.widgets && dashboard.widgets !== '{}') {
      identifier = dashboard.widgets[Object.keys(dashboard.widgets)[0]];
    }
    if (identifier) {
      console.log('identifier: ' + identifier);
      let url = 'https://datipubblici.daf.teamdigitale.it/dati-gov/v1/plot/' + identifier + '/700x600';
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

    var base64Icon = ""
    if (this.state.imageSrc) {
      base64Icon = "base64," + this.state.imageSrc.replace(/"/g, '')
    }

    return localStorage.getItem('username') && localStorage.getItem('token')

      ? <iframe className="u-margin-r-top u-padding-r-top" src=""></iframe>

      : this.state.loading === true ? <p>Caricamento ...</p> : (
        <div className="text-center u-margin-r-top u-padding-r-top">
          {
            this.props.dashboard &&
            <div>
              {this.state.imageSrc &&
                <img style={imgStyle} src={"data:image/jpg;" + base64Icon} />
              }
            </div>
          }
        </div>
      );
  }
}

export default DashboardImage;