import React from 'react';
import SlimHeader from '../MegaHeader/SlimHeader';
import { Link } from 'react-router-dom';

function searchDataset(){
  let path = '/dataset/search';
  this.props.history.push(path, {
      query: this.refs.auto.state.value,
      category: this.state.category_filter,
      isCategoryEnabled: this.state.isCategoryEnabled,
      group: this.state.group_filter,
      organization: this.state.organization_filter
  });
}

export const Header = (props) => (
      <div>
        {/* <ul className="Skiplinks js-fr-bypasslinks u-hiddenPrint">
          <li><a href="#main">Vai al Contenuto</a></li>
          <li><a className="js-fr-offcanvas-open" href="#menu"
            aria-controls="menu" aria-label="accedi al menu" title="accedi al menu">Vai alla navigazione del sito</a></li>
        </ul> */}
        <header className="Header  u-hiddenPrint">


        <div className="Header-banner u-background-50">
          <div className="Header-owner Headroom-hideme u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
            <div className="Header-owner__institutions">
              <div className="u-md-hidden u-lg-hidden u-border-right-xxs u-margin-right-xs u-padding-right-xs u-inlineBlock u-alignMiddle">
                <a className="js-fr-offcanvas-open u-block" href="#network" aria-controls="network" aria-label title>
                  {/* <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTkuMnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxMiAxMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSIxMDI0dXAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSItLWhvbWUtLS1wYXJhbGxheC0tLW1vYmlsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0LjAwMDAwMCwgLTIwLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iLW5ldHdvcmstc2xpbS1oZWFkZXIiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDI0IEwzNiwyNCBMMzYsMjYgTDI0LDI2IEwyNCwyNCBaIE0yNCwyMCBMMzIsMjAgTDMyLDIyIEwyNCwyMiBMMjQsMjAgWiBNMjQsMjggTDMyLDI4IEwzMiwzMCBMMjQsMzAgTDI0LDI4IFoiIGlkPSJpY29uLXNtYWxsLWJ1cmdlciI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" /> */}

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

                {/* <div className="Header-owner Headroom-hideme u-flex u-flexJustifyBetween u-flexAlignItemsCenter">

                  <Link role="button" to={"/"}>
                    <span>AgID <span className="u-hidden u-md-inline u-lg-inline u-sm-inline">+ Team Digitale</span></span>
                  </Link>

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
                  </div>
                </div> */}
              </div> 
              <div className="Header-navbar u-background-50">
                <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">
                  <div className="Header-logo Grid-cell" aria-hidden="true">
                    <Link to={"/"}>
                      <img src={props.styleProps.headerLogo} alt=""/>
                    </Link>
                  </div>

                  <div className="Header-title Grid-cell">
                    <h1 className="Header-titleLink">
                      <Link role="button" to={"/"}>
                        {props.styleProps.headerSiglaTool} <span className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block"></span>
                        <span className="u-color-20 u-text-xxs u-alignMiddle u-padding-right-xxs u-padding-left-xxs">alpha</span>
                        <br/><small>{props.styleProps.headerDescTool}</small>
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

                    {/* <div className="Header-title Grid-cell">
                      <h1 className="Header-titleLink">
                        <Link role="button" to={"/"}>
                          {uiconfig.headerSiglaTool} <span className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block"></span>
                          <span className="u-color-20 u-text-xxs u-alignMiddle u-padding-right-xxs u-padding-left-xxs">alpha</span>
                          <br/><small>{uiconfig.headerDescTool}</small>
                        </Link>
                      </h1>
                    </div>

                    <div className="Header-utils Grid-cell">
                      <div className="Header-social Headroom-hideme">
                        <p>Seguici su</p>{" "}
                        <ul className="Header-socialIcons">

                          <li>
                            <a href={uiconfig.twitterURL} title="twitter">
                            <span className="Icon-twitter"></span>
                            <span className="u-hiddenVisually">Twitter</span>
                            </a>
                          </li>
                          {" "}
                          <li>
                            <a href={uiconfig.mediumURL} title="medium">
                            <span className="Icon-medium"></span>
                            <span className="u-hiddenVisually">Medium</span>
                            </a>
                          </li> */}

                        </ul>
                      </div>

                      <div className="Header-search " id="header-search">
                        <form className="Form">
                            <div className="Form-field Form-field--withPlaceholder Grid u-background-white u-color-grey-30 u-borderRadius-s">
                              <input className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderRadius-s"
                                required id="cerca"/>
                              <label className="Form-label u-color-grey-50 u-text-r-xxs" htmlFor="cerca">cerca nei dataset</label>
                              <button type="submit" className="Grid-cell u-sizeFit Icon-search Icon--rotated u-color-grey-50 u-padding-all-s u-textWeight-700" onClick={this.searchDataset} title="Avvia la ricerca" aria-label="Avvia la ricerca">
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
        
        </header>
          



            {/* <section className="Offcanvas Offcanvas--right Offcanvas--modal js-fr-offcanvas u-jsVisibilityHidden u-nojsDisplayNone u-hiddenPrint" id="menu">
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
                    {/* <a href="/dataset/search" onClick={this.searchDataset} className="Linklist-link">Esplora</a>
                    </li> */}

                    {/* <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
                    <a href="/" className="Linklist-link">Community</a>
                    <ul>
                      <li><a href="/crea" className="Linklist-link">Data Stories</a></li>
                      <li><a href="https://developers.italia.it/news" target="_blank" className="Linklist-link">Notizie</a></li>
                      <li><a href="https://forum.italia.it" target="_blank" className="Linklist-link">Forum</a></li>
                    </ul> */}
                    
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
                  <a href="#" className="Linklist-link">Il Progetto</a>
                  <ul>
							      <li><a href="/missione" className="Linklist-link">Missione</a></li>
                    <li><a href="/team" className="Linklist-link">Chi Siamo</a></li>
                    <li><a href="/lineeguida" className="Linklist-link">Linee Guida</a></li>
                  </ul>
                  </li>

                  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
                  {/* <a href="/dataset/search" className="Linklist-link">Esplora</a> */}
                  <a href="/dataset/search" onClick={this.searchDataset} className="Linklist-link">Esplora</a>
                  </li>

                  <li data-megamenu-class="Megamenu-item Megamenu-item--vert">
                  <a href="#" className="Linklist-link">Community</a>
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
                    <a className="Button Button--default u-border-none u-color-95 u-background-compl u-text-r-xxs" href="https://dataportal-private.daf.teamdigitale.it">Accedi</a>                             
                    </li>
                  </ul>
                </nav>
              </div>
        </section>
        </div>
  )