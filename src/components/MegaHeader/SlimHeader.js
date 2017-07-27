import React from 'react';

class SlimHeader extends React.Component {
  render() {
    return (
      <div className="Header-banner u-background-50">
        <div className="Header-owner Headroom-hideme u-border-bottom-xxs">
          <a href=""><span>AgID <span className="u-hidden u-md-inline u-lg-inline u-sm-inline">- Agenzia per l Italia Digitale</span></span></a>
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
    );
  }
}

export default SlimHeader;
