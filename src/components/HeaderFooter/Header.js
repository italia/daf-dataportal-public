import React from 'react';
import SlimHeader from '../MegaHeader/SlimHeader';
import { Link } from 'react-router-dom';
import Headersearch from './HeaderSearch';
import Customredirect from './CustomRedirect'

export const Header = (props) => (
  <div>
    <header className="Header  u-hiddenPrint">
      <div className="Header-banner u-background-50">
        <div className="Header-owner Headroom-hideme u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
          <div className="Header-owner__institutions">
            <div className="u-md-hidden u-lg-hidden u-border-right-xxs u-margin-right-xs u-padding-right-xs u-inlineBlock u-alignMiddle">
              <a className="js-fr-offcanvas-open u-block" href="#network" aria-controls="network" aria-label title>
              </a>
            </div>
            <a href="http://www.agid.gov.it">
              <span className="u-inline u-md-hidden u-lg-hidden u-sm-hidden">
                AgID
                  </span>
              <span className="u-hidden u-md-inline u-lg-inline u-sm-inline">
                AgID {'\u00a0'}
              </span>
            </a>
            <span className="u-color-white">+</span>
            <a href="https://teamdigitale.governo.it">
              <span className="u-inline u-md-hidden u-lg-hidden u-sm-hidden">
                Team Digitale
                  </span>
              <span className="u-hidden u-md-inline u-lg-inline u-sm-inline">
                {"\u00a0"} Team Digitale
                  </span>
            </a>
          </div>
          <div className="u-hidden u-md-block u-lg-block">
            <div className="Header-slim u-background-50">
              <ul className="Header-links u-cf">
                <li className="delimiter"><a className="u-color-white" href="https://pianotriennale-ict.italia.it">Piano Triennale</a></li>{" "}
                <li className><a className="u-color-white" href="https://developers.italia.it/">Developers</a></li>{" "}
                <li className="current"><a className="u-color-white" href="/">DAF</a></li>{" "}
                <li className="delimiter"><a className="u-color-white" href="http://designers.italia.it">Designers</a></li>{" "}
                <li className><a className="u-color-white" href="https://forum.italia.it/c/daf">Forum</a></li>{" "}
                <li className><a className="u-color-white" href="https://docs.developers.italia.it/">Docs</a></li>{" "}
                <li className="delimiter"><a className="u-color-white" href="https://github.com/italia/">Github</a></li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Header-navbar u-background-50">
        <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">
          <div className="Header-logo Grid-cell" aria-hidden="true">
            <Link to={"/"}>
              <img src={props.styleProps.headerLogo} alt="" />
            </Link>
          </div>
          <div className="Header-title Grid-cell">
            <h1 className="Header-titleLink">
              <Link role="button" to={"/"}>
                {props.styleProps.headerSiglaTool} <span className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block"></span>
                <span className="u-color-20 u-text-xxs u-alignMiddle u-padding-right-xxs u-padding-left-xxs">alpha</span>
                <br /><small>{props.styleProps.headerDescTool}</small>
              </Link>
            </h1>
          </div>
          <div className="Header-utils Grid-cell">
            <div className="Header-social Headroom-hideme">
              <p>Seguici su</p>{" "}
              <ul className="Header-socialIcons">
                <li>
                  <a href={props.styleProps.twitterURL} title="twitter">
                    <span className="Icon-twitter"></span>
                    <span className="u-hiddenVisually">Twitter</span>
                  </a>
                </li>
                {" "}
                <li>
                  <a href={props.styleProps.mediumURL} title="medium">
                    <span className="Icon-medium"></span>
                    <span className="u-hiddenVisually">Medium</span>
                  </a>
                </li>
              </ul>
            </div>
            <Headersearch history={props.history} />
          </div>
        </div>
      </div>
      <div className="Headroom-hideme u-textCenter u-hidden u-sm-hidden u-md-block u-lg-block">
        <nav className="Megamenu Megamenu--default js-megamenu u-background-50 is-ready" data-rel=".Offcanvas .Treeview">
          <ul className="Megamenu-list Megamenu">
            <li data-megamenu-class="Megamenu-item Megamenu-item--vert" className="Megamenu-item Megamenu-item--vert">
              <a href="#" className="Linklist-link">Il Progetto</a>
              <ul>
                <li><Customredirect history={props.history} to='/missione' label='Missione' /></li>
                <li><Customredirect history={props.history} to='/team' label='Chi Siamo' /></li>
                <li><Customredirect history={props.history} to='/lineeguida' label='Linee Guida' /></li>
              </ul>
            </li>
            <li data-megamenu-class="Megamenu-item Megamenu-item--vert" className="Megamenu-item Megamenu-item--vert">
              <a href="/dataset/search" onClick={this.searchDataset} className="Linklist-link">Esplora</a>
            </li>

            <li data-megamenu-class="Megamenu-item Megamenu-item--vert" className="Megamenu-item Megamenu-item--vert">
              <a href="#" className="Linklist-link">Community</a>
              <ul>
                <li><a href="/crea" className="Linklist-link">Data Stories</a></li>
                <li><a href={props.styleProps.notizieURL} target="_blank" className="Linklist-link">Notizie</a></li>
                <li><a href={props.styleProps.forumURL} target="_blank" className="Linklist-link">Forum</a></li>
              </ul>
            </li>
            <li data-megamenu-class="Megamenu-item Megamenu-item--vert" className="Megamenu-item Megamenu-item--vert">
              <a href="/partecipa" className="Linklist-link">Partecipa</a>
            </li>
            <li data-megamenu-class="Megamenu-item Megamenu-area u-background-40 u-padding-left-none" className="Megamenu-item Megamenu-area u-background-40 u-padding-left-none">
              <a href="https://dataportal-private.daf.teamdigitale.it" id="megamenu-1515065130642-9">Accedi</a>
            </li>
          </ul>
        </nav>
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
      </div>
    </section>
  </div>
)