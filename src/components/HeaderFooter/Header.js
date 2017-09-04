import React from 'react'
import { logout } from '../../helpers/auth'
import SlimHeader from '../MegaHeader/SlimHeader'
import { Link } from 'react-router-dom';

export const Header = () => (
  <div className="u-background-95">
        <div className="u-layout-wide u-layoutCenter">

            <ul className="Skiplinks js-fr-bypasslinks u-hiddenPrint">
              <li><a href="#main">Vai al Contenuto</a></li>
              <li><a className="js-fr-offcanvas-open" href="#menu"
                aria-controls="menu" aria-label="accedi al menu" title="accedi al menu">Vai alla navigazione del sito</a></li>
            </ul>
            <header className="Header  u-hiddenPrint">

              <div className="Header-banner u-background-50">
                <div className="Header-owner Headroom-hideme u-border-bottom-xxs">
                  
                  <Link role="button" to={"/"}>
                    <span>AgID <span className="u-hidden u-md-inline u-lg-inline u-sm-inline">- Agenzia per l'Italia Digitale</span></span>
                  </Link>

                  <div className="Header-languages u-background-50">
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
                  </div>
                </div>
              </div>

              <div className="Header-navbar u-background-50">
                <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">
                  <div className="Header-logo Grid-cell" aria-hidden="true">
                    <Link role="button" to={"/"}>
                      <img src="http://designer.italia.it/images/loghi/logo-it.svg" alt=""/>
                    </Link>
                  </div>

                  <div className="Header-title Grid-cell">
                    <h1 className="Header-titleLink">
                      <Link role="button" to={"/"}>
                        Dati Pubblici <span className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block"></span><br/>
                        <small>Analisi dei dati per lo sviluppo del Paese</small>
                      </Link>
                    </h1>
                  </div>

                  <div className="Header-searchTrigger Grid-cell">
                    <button aria-controls="header-search" className="js-Header-search-trigger Icon Icon-search u-background-50"
                      title="attiva il form di ricerca" aria-label="attiva il form di ricerca" aria-hidden="false">
                    </button>
                    <button aria-controls="header-search" className="js-Header-search-trigger Icon Icon-close u-hidden u-background-50"
                      title="disattiva il form di ricerca" aria-label="disattiva il form di ricerca" aria-hidden="true">
                    </button>
                  </div>

                  <div className="Header-utils Grid-cell">
                    <div className="Header-search " id="header-search">
                      <form className="Form">
                          <div className="Form-field Form-field--withPlaceholder Grid u-background-white u-color-grey-30 u-borderRadius-s" role="search">
                            <input className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderRadius-s"
                              required id="cerca"/>
                            <label className="Form-label u-color-grey-50 u-text-r-xxs" htmlFor="cerca">cerca nel sito</label>
                            <button className="Grid-cell u-sizeFit Icon-search Icon--rotated u-color-grey-50 u-padding-all-s u-textWeight-700" title="Avvia la ricerca" aria-label="Avvia la ricerca">
                          </button>
                          </div>
                      </form>

                    </div>
                  </div>

                  <div className="Header-toggle Grid-cell">
                    <a className="Hamburger-toggleContainer js-fr-offcanvas-open u-nojsDisplayInlineBlock u-lg-hidden u-md-hidden" href="#menu"
                      aria-controls="menu" aria-label="accedi al menu" title="accedi al menu">
                      <span className="Hamburger-toggle" role="presentation"></span>
                      <span className="Header-toggleText" role="presentation">Menu</span>
                    </a>
                  </div>

                </div>
              </div>


              <div className="Headroom-hideme u-textCenter u-hidden u-sm-hidden u-md-block u-lg-block">

                  <nav className="Megamenu Megamenu--default js-megamenu u-background-50" data-rel=".Offcanvas .Treeview"></nav>

              </div>


            </header>



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
					  <li data-megamenu-className="Megamenu-item Megamenu-item--vert">
						<a href="#" className=" Linklist-link">Il Progetto</a>

					  </li>
					  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
						<a href="/" className=" Linklist-link">Esplora</a>
					  </li>
					  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
						<a href="#" className=" Linklist-link">Crea</a>
					  </li>
					  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
						<a href="#" className=" Linklist-link">Partecipa</a>
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