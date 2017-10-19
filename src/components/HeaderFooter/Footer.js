import React from 'react'
import { uiconfig } from '../../config/uiconfig'

const styleImg = {"height": "4em", 
                  "maxWidth": "100%"}

export const Footer = () => (
    
  <div className="u-background-95">
    	<div className="u-layout-wide u-layoutCenter u-layout-r-withGutter u-hiddenPrint">
            <footer className="Footer">

              <div className="Grid Grid--withGutter u-padding-top-xl">

                <div className="Grid-cell u-md-size1of2 u-lg-size5of12 u-padding-r-bottom">
                  <img className="Footer-logo u-xs-padding-right-none" src={uiconfig.footerLogoAGID}
                    alt="" style={{height: 80, maxWidth: '100%'}}/>
                  <p className="Footer-siteName">

                  </p>
                </div>
                <div className="Grid-cell u-md-size1of2 u-lg-size1of3 u-padding-r-bottom td-footer">
                  <p className="u-padding-bottom-l" style={{opacity: 0.5}}>In collaborazione con</p>
                <div className="Grid">
                    <div className="u-inlineBlock">
                      <img className="u-padding-top-xxs u-padding-right-xs" src={uiconfig.footerLogoGov} alt="" style={styleImg}/>
                      <img className="u-padding-top-xxs u-padding-right-xxs" src={uiconfig.footerLogoDevITA} alt="" style={styleImg}/>
                    </div>
                    <div className="Grid-cell u-size1of12 u-padding-left-none team-bar"></div>
                    <p className="Grid-cell u-size5of12 Footer-siteName u-padding-left-xs u-text-r-xs">
                      {uiconfig.footerNomeEnte}
                    </p>
                  </div>
                </div>

             

                {/* <div className="Grid-cell u-layout-centerRight u-padding-r-bottom u-flexAlignSelfEnd">
                  <h3 className="u-md-flexInline u-lg-flexInline u-text-p u-color-white u-textWeight-400 u-hidden u-margin-r-right u-flexAlignSelfCenter">Seguici su</h3>
                  <ul className="Footer-socialIcons">
                    <li><a href=""><span className="Icon Icon-facebook u-background-white"></span><span className="u-hiddenVisually">Facebook</span></a></li>
                    <li><a href=""><span className="Icon Icon-twitter u-background-white"></span><span className="u-hiddenVisually">Twitter</span></a></li>
                    <li><a href=""><span className="Icon Icon-youtube u-background-white"></span><span className="u-hiddenVisually">Youtube</span></a></li>
                  </ul>
                </div> */}

              </div>

              <ul className="Footer-links u-cf u-color-80">
                <li><a href={uiconfig.footerPrivacy} title="Privacy policy">Privacy</a></li>
                <li><a href={uiconfig.footerLegal} title="Note legali">Note legali</a></li>
              </ul>

            </footer>

    	</div>
	</div>
  );