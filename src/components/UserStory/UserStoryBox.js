import React from 'react';
import { Route, Link } from 'react-router-dom';


class UserStoriesBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = props;
  }

  trunc (text, size) {
    if(text){
      if(text.length > size) {
        text = text.substr(0, size);
        text += "...";
      }
    } else {
      text = "---"
    }

    return text;
  }

  getQueryStringValue (url, key) {  
    return decodeURIComponent(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }

  getImgUrl(story){
    let title = story['graph1'].props.url;
    if(title.indexOf('metabase')>-1){
      title = story['graph1'].props.url.substr(story['graph1'].props.url.lastIndexOf('/') + 1);
    }else if(title.indexOf('superset')>-1){
      const url = story['graph1'].props.url
      const formdata = this.getQueryStringValue(url, 'form_data')
      const value  = JSON.parse(formdata)
      title = value['slice_id']
    }
    return 'https://api.daf.teamdigitale.it/dati-gov/img/' + title + '.png';
  }

  render() {

    const imgStyle = {
      width: '100%',
      height: '300px',
      border: '0'
    }
    return (
     
        <div className="Grid-cell u-sizeFull u-md-size1of3 u-lg-size1of3 u-margin-r-bottom u-layout-matchHeight">
            <div className="w-100 u-nbfc u-borderRadius-m u-background-grey-10 u-color-grey-70">
              <section className="u-text-r-l u-padding-r-all u-layout-prose">
                <h3 className="u-padding-r-bottom">
                  
                  <Link className="u-text-h4 u-textClean u-color-50" role="button" to={"/user_story/" + this.state.story.id}>
                      {this.state.story.title}
                  </Link>

                </h3>
                <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                  <span dangerouslySetInnerHTML={{__html: this.trunc(this.state.story.text, 300)}}></span>
                </p>
                <img style={imgStyle} src={this.getImgUrl(this.state.story)}/>
                <p><span className="u-color-50"><strong>Pubblicato da:</strong></span>  {this.state.story.user}</p>
                <p><span className="u-color-50"><strong>Data di ultima modifica:</strong></span> {this.state.story.dateLastEdit}</p>
               
                
                <p className="u-textCenter u-text-md-right u-text-lg-right u-margin-r-top u-padding-r-top">
                  <Link className="u-color-50 u-textClean u-text-h6" role="button" to={"/user_story/" + this.state.story.id}>
                    Per saperne di più <span className="Icon Icon-chevron-right"></span>
                  </Link>
                </p>
              </section>
            </div>
          </div>
  
      );
  }
}

export default UserStoriesBox;
