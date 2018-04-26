import React, { Component } from 'react'
import Customredirect from '../components/HeaderFooter/CustomRedirect'
import { serviceurl } from '../config/serviceurl.js'

class NotizieDetail extends Component {
    constructor(props) {
      super(props)
      this.state = {feed: undefined}
      let url = serviceurl.apiMedium + props.url
      this.load(url, props.match.params.id)
    }
 
    load(url, id){
        fetch(url)
            .then(response => response.text())
            .then(xmlText => {
                var extractedData = "";
                var parseString = require('xml2js').parseString;
                parseString(xmlText, function (err, result) {
                    console.dir(result);
                    extractedData = result['rss']['channel'][0];
                })
                this.setFeedDetailRss(extractedData['item'][id])
            }).catch((error) => {console.log('error: ' + error)})
    }

    setFeedDetailRss(xml){
        this.setState({ item: xml });
    }
    
      render() {
        return (
			<div className="u-layout-wide u-layoutCenter">
                <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                    <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Dettaglio Notizie</h2>
                </div>
                <div className="u-padding-top-xxl u-background-50"></div>
                <hr className="Separator Separator--up u-background-white" />
                <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                    <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                        <div className="Grid">
                            <div className="Grid-cell u-sizeFull u-md-size10of12 u-lg-size10of12">
                                {this.state.item ? 
                                <article className="Prose">
                                    <div className="u-margin-bottom-xxl u-border-bottom-xxs u-padding-bottom-xl u-color-grey-30">
                                        <div className="u-nbfc u-flexWrap u-flex u-color-grey-30 u-xs-padding-all-none u-background-grey-15 u-sizeFill">
                                            <div className="u-flexWrap u-flex u-flexAlignSelfStretch u-sizeFill">
                                                <time className="u-padding-r-bottom u-text-r-xxs u-color-grey-50">{this.state.item.pubDate[0]}</time>
                                                <div className="u-sizeFull">
                                                    <h3 className="u-padding-bottom-xs">
                                                    <a className="u-textClean u-textWeight-600 u-text-r-l u-color-50" href="#">
                                                        {this.state.item.title[0]}
                                                    </a>
                                                    </h3>
                                                    <div className="u-padding-r-bottom">
                                                        <span itemProp="name" className="u-text-r-xs u-textSecondary">{this.state.item['dc:creator'][0]}</span>
                                                    </div>
                                                    <p className="Content u-text-p u-textSecondary u-padding-r-bottom" dangerouslySetInnerHTML={{__html: this.state.item['content:encoded'][0]}}></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Customredirect history={this.props.history} to='/notizie/search/' label='Torna alle notizie' linkStyle={'Linklist-link'} />
                                </article>
                                
                                :
                                <article className="Prose">
                                    <p>loading .. </p>
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

export default NotizieDetail