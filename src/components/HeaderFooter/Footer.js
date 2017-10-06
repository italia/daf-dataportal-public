import React from 'react'

const styleImg = {"height": "4em", 
                  "maxWidth": "100%"}

export const Footer = () => (
    
  <div className="u-background-95">
    	<div className="u-layout-wide u-layoutCenter u-layout-r-withGutter u-hiddenPrint">
            <footer className="Footer u-background-95">

              <div className="Grid Grid--withGutter u-padding-top-xl">

                <div className="Grid-cell u-layout-centerLeft u-padding-r-bottom">
                  <img className="Footer-logo u-xs-padding-right-none" src="https://www.spid.gov.it/assets/img/agid-logo-bb.svg"
                    alt=""/>
                  <p className="Footer-siteName">

                  </p>
                </div>
                <div className="Grid-cell u-layout-centerLeft u-padding-r-bottom">
                <div className="Grid">
                    <div className="u-inlineBlock">
                      <img className="u-padding-top-xxs u-padding-right-xs" src="https://teamdigitale.governo.it/images/loghi/governo.svg" alt="" style={styleImg}/>
                      <img className="u-padding-top-xxs u-padding-right-xxs" src="https://developers.italia.it/assets/icons/dt-logo.svg" alt="" style={styleImg}/>
                    </div>
                    <div className="Grid-cell u-size1of12 u-padding-left-none team-bar"></div>
                    <p className="Grid-cell u-size5of12 Footer-siteName u-padding-left-xs u-text-r-xs">
                      TEAM PER LA TRASFORMAZIONE DIGITALE
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
                <li><a href="https://designers.italia.it/privacy-policy/" title="Privacy policy">Privacy</a></li>
                <li><a href="https://designers.italia.it/note-legali/" title="Note legali">Note legali</a></li>
              </ul>

            </footer>

    	</div>
	</div>
  );