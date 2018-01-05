import React from "react"

class HeaderBanner extends React.Component {
  render() {
    return (
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
    )
  }
}
export default HeaderBanner