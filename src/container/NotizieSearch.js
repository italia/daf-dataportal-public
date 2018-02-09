import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { serviceurl } from '../config/serviceurl.js'

class NotizieSearch extends Component {
    constructor(props) {
      super(props)
      this.state = {feed: undefined}
      // ORIG URL  https://medium.com/feed/team-per-la-trasformazione-digitale
      // FINAL URL https://datipubblici.daf.teamdigitale.it/dati-gov/medium/medium.com/feed/team-per-la-trasformazione-digitale
      let url = serviceurl.apiMedium + props.url
      this.load(url);
    }

    load(url){
        fetch(url)
            .then(response => response.text())
            .then(xmlText => {
                var extractedData = "";
                var parseString = require('xml2js').parseString;
                parseString(xmlText, function (err, result) {
                    console.dir(result);
                    extractedData = result['rss']['channel'][0];
                })
                this.setFeedRss(extractedData)
            }).catch((error) => {console.log('error: ' + error)})
    }

    setFeedRss(xml){
        this.setState({ feed: xml });
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
    
      render() {
        return (
			<div className="u-layout-wide u-layoutCenter">
                <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                    <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Notizie</h2>
                </div>
                <div className="u-padding-top-xxl u-background-50"></div>
                <hr className="Separator Separator--up u-background-white" />
                <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                    <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                        <div className="Grid">
                            <div className="Grid-cell u-sizeFull u-md-size7of12 u-lg-size7of12">
                                {this.state.feed ? 
                                <article className="Prose">
                                    {this.state.feed.item.map((article, index) => {
                                        return (
                                            <div className="u-margin-bottom-xxl u-border-bottom-xxs u-padding-bottom-xl u-color-grey-30" key={index}>
                                                <div className="u-nbfc u-flexWrap u-flex u-color-grey-30 u-xs-padding-all-none u-background-grey-15 u-sizeFill">
                                                    <div className="u-flexWrap u-flex u-flexAlignSelfStretch u-sizeFill">
                                                        <time className="u-padding-r-bottom u-text-r-xxs u-color-grey-50">{article.pubDate[0]}</time>
                                                        <div className="u-sizeFull">
                                                            <h3 className="u-padding-bottom-xs">
                                                            <Link className="u-text-h4 u-textClean u-color-black" to={"/notizie/" + index}>
                                                                {article.title[0]}
                                                            </Link>
                                                            </h3>
                                                            <div className="u-padding-r-bottom">
                                                                <span itemProp="name" className="u-text-r-xs u-textSecondary">{article['dc:creator'][0]}</span>
                                                            </div>
                                                            <p className="Content u-text-p u-textSecondary u-padding-r-bottom" dangerouslySetInnerHTML={{__html: this.trunc(article['content:encoded'][0], 50)}}></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </article>
                                :
                                <article className="Prose">
                                    <p>Non è stata trovata nessuna news </p>
                                </article>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotizieSearch