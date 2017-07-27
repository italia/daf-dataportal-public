import React from 'react';
import SlimHeader from './SlimHeader'
import {  opts,listToMegaMenu, Megamenu} from './megamenu'
import Navigation from '../../container/Nav'

class MegaHeader extends React.Component {
  render() {
    return (
      <div className="u-background-95">
      <div className="u-layout-wide u-layoutCenter">

      <ul className="Skiplinks js-fr-bypasslinks u-hiddenPrint">
        <li><a href="#main">Vai al Contenuto</a></li>
        <li><a className="js-fr-offcanvas-open" href="#menu"
          aria-controls="menu" aria-label="accedi al menu" title="accedi al menu">Vai alla navigazione del sito</a></li>
      </ul>


      <header className="Header  u-hiddenPrint">

       <SlimHeader/>

        <div className="Header-navbar u-background-50">
          <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">
            <div className="Header-logo Grid-cell" aria-hidden="true">
              <a href="" tabIndex="-1">
                <img src="http://designer.italia.it/images/loghi/logo-it.svg" alt=""/>
              </a>
            </div>

            <div className="Header-title Grid-cell">
              <h1 className="Header-titleLink">
                <a href="/">
                  /dataportal <span className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block"></span>
              <span className="u-color-20 u-text-xxs
              u-alignMiddle u-padding-right-xxs u-padding-left-xxs">beta</span><br/>
                  <small>Dati Pubblici</small>
                </a>
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
              <div className="Header-social Headroom-hideme">
                <p>Seguici su</p>
                <ul className="Header-socialIcons">
                  <li><a href="" title="Facebook"><span className="Icon-facebook"></span><span className="u-hiddenVisually">Facebook</span></a></li>
                  <li><a href="" title="Twitter"><span className="Icon-twitter"></span><span className="u-hiddenVisually">Twitter</span></a></li>
                  <li><a href="" title="Youtube"><span className="Icon-youtube"></span><span className="u-hiddenVisually">Youtube</span></a></li>
                </ul>
              </div>
              <div className="Header-search" id="header-search">
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

      </div>
      <nav className="Megamenu Megamenu--default js-megamenu ">
          <ul className="Megamenu-list">
            <li className="Megamenu-item">
                <a href="/">
                  Home
                  </a>
                  </li>
              <li className="Megamenu-item">
                  <a href="/ingestion">
                    ingestion
                  </a>
              </li>
              <li className="Megamenu-item">
                <a href="/ingestion-wizard">
                  ingestion-wizard
                </a>
              </li>
              <li className="Megamenu-item">
                <a href="/dataset">
                  dataset
                </a>
              </li>
              <li className="Megamenu-item">
                <a href="/areautente">
                  area utente
                </a>
              </li>
              <Navigation/>
          </ul>
      </nav>
       
      </div>

    );
  }
}

export default MegaHeader;
