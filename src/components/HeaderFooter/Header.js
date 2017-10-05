import React from 'react';
import { logout } from '../../helpers/auth';
//import SlimHeader from '../MegaHeader/SlimHeader';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div className="u-background-95">
        <div className="u-layout-wide u-layoutCenter">

            <ul className="Skiplinks js-fr-bypasslinks u-hiddenPrint">
              <li><a href="#main">Vai al Contenuto</a></li>
              <li><a className="js-fr-offcanvas-open" href="#menu"
                aria-controls="menu" aria-label="accedi al menu" title="accedi al menu">Vai alla navigazione del sito</a></li>
            </ul>
            <header className="Header  u-hiddenPrint" />
          
              
              <div className="Header-banner u-background-50">
              <div className="Header-owner Headroom-hideme u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
                  
                  <Link role="button" to={"/"}>
                    <span>AgID <span className="u-hidden u-md-inline u-lg-inline u-sm-inline">+ Team Digitale</span></span>
                  </Link> 
                  {/* ####################
                  <div className="u-hidden u-md-block u-lg-block">
                  <div className="Header-slim u-background-50">

                    <ul className="Header-links u-cf">

                      <li ><a className="u-color-white" href="https://pianotriennale-ict.italia.it">Piano Triennale</a></li>

                      <li><a className="u-color-white" href="https://developers.italia.it/">Developers</a></li>

                      <li><a className="u-color-white" href="http://designers.italia.it">Designers</a></li>

                      <li ><a className="u-color-white" href="https://forum.italia.it/">Forum</a></li>

                      <li ><a className="u-color-white" href="https://docs.developers.italia.it/">Docs</a></li>

                      <li ><a className="u-color-white" href="https://github.com/italia/">Github</a></li>


                    </ul>
                  </div>
                </div>  ####################################*/}
                  
                 {/*  <div className="Header-languages u-background-50 u-jsVisibilityHidden">
                      <a href="#languages" data-menu-trigger="languages" className="Header-language u-border-none u-zindex-max u-inlineBlock">
                        <span className="u-hiddenVisually">lingua attiva:</span>
                        <span className="">ITA</span>
                        <span className="Icon Icon-expand u-padding-left-xs"></span>
                      </a>
                      <div id="languages" data-menu className="Dropdown-menu Header-language-other u-jsVisibilityHidden u-nojsDisplayNone">
                        <span className="Icon-drop-down Dropdown-arrow u-color-white"></span>
                        <ul>
                          <li><a href="#1" className="u-padding-r-all"><span lang="en">English</span></a></li>
                          <li><a href="#1" className="u-padding-r-all"><span lang="ar">عربي</span></a></li>
                          <li><a href="#2" className="u-padding-r-all"><span lang="ch">中文网</span></a></li>
                          <li><a href="#3" className="u-padding-r-all"><span lang="de">Deutsch</span></a></li>
                          <li><a href="#8" className="u-padding-r-all"><span lang="es">Español</span></a></li>
                          <li><a href="#4" className="u-padding-r-all"><span lang="fr">Français</span></a></li>
                          <li><a href="#5" className="u-padding-r-all"><span lang="ja">日本語</span></a></li>
                          <li><a href="#6" className="u-padding-r-all"><span lang="pt">Portuguese</span></a></li>
                          <li><a href="#7" className="u-padding-r-all"><span lang="ru">НА РУССКОМ</span></a></li>
                          <li><a href="#10" className="u-padding-r-all"><span lang="uk">УКРАЇНСЬКA</span></a></li>
                          <li><a href="#9" className="u-padding-r-all"><span lang="tr">TÜRKÇE</span></a></li>
                        </ul>
                      </div>
                  </div>  */}
                </div>
              </div> 



           



              <div className="Header-navbar u-background-50">
                <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">
                  <div className="Header-logo Grid-cell" aria-hidden="true">
                    <Link to={"/"}>
                      <img src="http://designer.italia.it/assets/icons/logo-it.png" alt=""/>
                    </Link>
                  </div>

                  <div className="Header-title Grid-cell">
                    <h1 className="Header-titleLink">
                      <Link role="button" to={"/"}>
                        /daf <span className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block"></span><br/>
                        <small>Il framework dei dati pubblici del Paese</small>
                      </Link>
                    </h1>
                  </div>

                  <div className="Header-utils Grid-cell">
                    <div className="Header-social Headroom-hideme">
                      <p>Seguici su</p>
                      <ul className="Header-socialIcons">

                        <li><a href="https://twitter.com/developersITA" title="twitter"><span className="Icon-twitter"></span>
                          <span className="u-hiddenVisually">Twitter</span></a></li>

                        <li><a href="https://medium.com/team-per-la-trasformazione-digitale/" title="medium"><span className="Icon-medium"></span>
                          <span className="u-hiddenVisually">Medium</span></a></li>

                      </ul>
                    </div>
                    <div className="Header-search " id="header-search">
                      <form className="Form">
                          <div className="Form-field Form-field--withPlaceholder Grid u-background-white u-color-grey-30 u-borderRadius-s" role="search">
                            <input className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderRadius-s"
                              required id="cerca"/>
                            <label className="Form-label u-color-grey-50 u-text-r-xxs" htmlFor="cerca">cerca nei dataset</label>
                            <button className="Grid-cell u-sizeFit Icon-search Icon--rotated u-color-grey-50 u-padding-all-s u-textWeight-700" title="Avvia la ricerca" aria-label="Avvia la ricerca">
                          </button>
                          </div>
                      </form>

                    </div>
                  </div>

             

                </div>
              </div>


              <div className="Headroom-hideme u-textCenter u-hidden u-sm-hidden u-md-block u-lg-block">

                  <nav className="Megamenu Megamenu--default js-megamenu u-background-50 is-ready" data-rel=".Offcanvas .Treeview"></nav>

              </div>


         



          <section className="Offcanvas Offcanvas--right Offcanvas--modal js-fr-offcanvas u-jsVisibilityHidden u-nojsDisplayNone u-hiddenPrint" id="menu">
            <h2 className="u-hiddenVisually">Menu di navigazione</h2>
            <div className="Offcanvas-content u-background-white">
              <div className="Offcanvas-toggleContainer u-background-70 u-jsHidden">
                <a className="Hamburger-toggleContainer u-block u-color-white u-padding-bottom-xxl u-padding-left-s u-padding-top-xxl js-fr-offcanvas-close"
                  aria-controls="menu" aria-label="esci dalla navigazione" title="esci dalla navigazione" href="#">
                  <span className="Hamburger-toggle is-active" aria-hidden="true"></span>
                </a>
              </div>
              <nav>
                <ul className="Linklist Linklist--padded u-layout-prose u-text-r-xs Treeview Treeview--default js-Treeview">            
                  
                  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
                  <a href="/" className="Linklist-link">Il Progetto</a>
                  <ul>
							      <li><a href="/missione" className="Linklist-link">Missione</a></li>
                    <li><a href="/team" className="Linklist-link">Chi Siamo</a></li>
                    <li><a href="/lineeguida" className="Linklist-link">Linee Guida</a></li>
                  </ul>
                  </li>

                  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
                  {/* <a href="/dataset/search" className="Linklist-link">Esplora</a> */}
                  <a href="/" className="Linklist-link">Esplora</a>
                  </li>

                  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
                  <a href="/" className="Linklist-link">Community</a>
                  <ul>
                    <li><a href="/crea" className="Linklist-link">Data Stories</a></li>
                    <li><a href="https://developers.italia.it/news" target="_blank" className="Linklist-link">Notizie</a></li>
                    <li><a href="https://forum.italia.it" target="_blank" className="Linklist-link">Forum</a></li>
                  </ul>
                  </li>

                  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
                  <a href="/partecipa" className="Linklist-link">Partecipa</a>
                  </li>

                  <li data-megamenu-class="Megamenu-item Megamenu-area u-background-40 u-padding-left-none">
                  <a className="Button Button--default u-border-none u-color-95 u-background-compl u-text-r-xxs" href="/login">Accedi</a>                             
                  </li>
                </ul>
              </nav>
            </div>
      </section>
      </div>
	</div>
);