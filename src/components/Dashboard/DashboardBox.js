import React from 'react';
import { Route, Link } from 'react-router-dom';

class DashboardBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = props;
  }

  trunc(text, size) {
    if (text) {
      if (text.length > size) {
        text = text.substr(0, size);
        text += "...";
      }
    } else {
      text = "---"
    }

    return text;
  }

  getQueryStringValue(url, key) {
    return decodeURIComponent(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

  componentDidMount() {
    const { dashboard } = this.props;
    let identifier = "";
    if (dashboard.widgets && dashboard.widgets !== '{}') {
      identifier = dashboard.widgets[Object.keys(dashboard.widgets)[0]];
    }
    if (identifier) {
      console.log('identifier: ' + identifier);
      let url = 'https://datipubblici.daf.teamdigitale.it/dati-gov/v1/plot/' + identifier + '/330x280';
      const response = fetch(url, {
        method: 'GET'
      }).then(response => response.text())
        .then(text => {
          this.setState({
            loading: false,
            imageSrc: text
          })
        })
    } else {
      this.setState({
        loading: false,
        imageSrc: ""
      })
    }
  }

  render() {
    const imgStyle = {
      width: '100%',
      height: '300px',
      border: '0'
    }

    var base64Icon = ""
    if (this.state.imageSrc)
      base64Icon = "base64," + this.state.imageSrc.replace(/"/g, '')

    return this.state.loading === true ? <p>Caricamento...</p> : (
      <div className="Grid-cell u-sizeFull u-md-size1of3 u-lg-size1of3 u-margin-r-bottom u-layout-matchHeight">
        <div className="w-100 u-nbfc u-borderRadius-m u-background-grey-10 u-color-grey-70">
          <section className="u-text-r-l u-padding-r-all u-layout-prose">
            <h3 className="u-padding-r-bottom">

              <Link className="u-text-h4 u-textClean u-color-50" role="button" to={"/dashboard/" + this.state.dashboard.id}>
                {this.state.dashboard.title}
              </Link>

            </h3>
            <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
              <span dangerouslySetInnerHTML={{ __html: this.trunc(this.state.dashboard.subtitle, 100) }}></span>
            </p>
            {this.state.imageSrc &&
              <img src={"data:image/jpg;" + base64Icon} />
            }
            <p className="u-margin-r-top u-padding-r-top"><span className="u-color-50"><strong>Pubblicato da:</strong></span>  {this.state.dashboard.user}</p>
            <p><span className="u-color-50"><strong>Data di ultima modifica:</strong></span> {this.state.dashboard.dateLastEdit}</p>


            <p className="u-textCenter u-text-md-right u-text-lg-right u-margin-r-top u-padding-r-top">
              <Link className="u-color-50 u-textClean u-text-h6" role="button" to={"/dashboard/" + this.state.dashboard.id}>
                Per saperne di più <span className="Icon Icon-chevron-right"></span>
              </Link>
            </p>
          </section>
        </div>
      </div>

    );
  }
}

export default DashboardBox;
