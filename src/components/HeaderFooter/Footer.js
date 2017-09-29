import React from 'react'

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

             

                <div className="Grid-cell u-layout-centerRight u-padding-r-bottom u-flexAlignSelfEnd">
                  <h3 className="u-md-flexInline u-lg-flexInline u-text-p u-color-white u-textWeight-400 u-hidden u-margin-r-right u-flexAlignSelfCenter">Seguici su</h3>
                  <ul className="Footer-socialIcons">
                    <li><a href=""><span className="Icon Icon-facebook u-background-white"></span><span className="u-hiddenVisually">Facebook</span></a></li>
                    <li><a href=""><span className="Icon Icon-twitter u-background-white"></span><span className="u-hiddenVisually">Twitter</span></a></li>
                    <li><a href=""><span className="Icon Icon-youtube u-background-white"></span><span className="u-hiddenVisually">Youtube</span></a></li>
                  </ul>
                </div>

              </div>

              <ul className="Footer-links u-cf u-color-80">
                <li><a href="" title="Privacy policy">Privacy</a></li>
                <li><a href="" title="Note legali">Note legali</a></li>
                <li><a href="" title="Dati monitoraggio sito">Contatti</a></li>
              </ul>

            </footer>

    	</div>
	</div>
  );