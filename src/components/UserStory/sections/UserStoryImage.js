import React from 'react';


class UserStoryImage extends React.Component {

  constructor(props) {
    super(props);

  }

  getQueryStringValue (url, key) {  
    return decodeURIComponent(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }

  getImgUrl(story, graph){
    var graph = 'graph' + graph; 
    let title = story[graph].props.url;
    if(title.indexOf('metabase')>-1){
      title = story[graph].props.url.substr(story[graph].props.url.lastIndexOf('/') + 1);
    }else if(title.indexOf('superset')>-1){
      const url = story[graph].props.url
      const formdata = this.getQueryStringValue(url, 'form_data')
      const value  = JSON.parse(formdata)
      title = value['slice_id']
    }
    return 'https://api.daf.teamdigitale.it/dati-gov/img/' + title + '.png';
  }

  render() {
    

    return (
        <div className="text-center">
          {
            this.props.story &&
            <div>
              <img className="image-container" src={this.getImgUrl(this.props.story, this.props.graph)} />
            </div>
          }
        </div>
      );
  }
}

export default UserStoryImage;
