import React from 'react';
import Async from 'react-promise'

class UserStoryImage extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      loading: true,
      imageSrc:""
    }
  }

  componentDidMount() {
    const { story,graph } = this.props
    var graphNumber = 'graph' + graph;
    let identifier = story[graphNumber]?story[graphNumber].props.identifier:undefined;
    if(identifier){
        console.log('identifier: ' + identifier);
        let url = 'https://api.daf.teamdigitale.it/dati-gov/v1/plot/' + identifier + '/700x600';
        const response = fetch( url, {
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

  getQueryStringValue (url, key) {  
    return decodeURIComponent(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }

  render() {
    const imgStyle = {
      width: '100%'
    }
    
    var base64Icon = ""
    if(this.state.imageSrc){
      base64Icon = "base64," + this.state.imageSrc.replace(/"/g,'')
    }
      return this.state.loading === true ? <p>Caricamento ...</p> : (
        <div className="text-center u-margin-r-top u-padding-r-top">
          {
            this.props.story &&
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

export default UserStoryImage;
