import React from 'react';

import { Link } from 'react-router-dom';
import { FormattedDate } from 'react-intl';

class DatasetBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = props;
  }

  removeDuplicate(array) {
    let arrayNew = [];
    array.map((res, index) => {
      arrayNew.push(res.format)
    });

    return Array.from(new Set(arrayNew))
  }

  trunc(text, size) {
    if (text.length > size) {
      text = text.substr(0, size);
      text += "...";
    }

    return text;
  }

  render() {

    return (
      <div className="Grid-cell u-sizeFull u-md-size1of3 u-lg-size1of3 u-margin-r-bottom u-layout-matchHeight">
        <div className="u-nbfc u-borderRadius-m u-background-grey-10 u-color-grey-70">
          <section className="u-text-r-l u-padding-r-all u-layout-prose">

            <div className="u-padding-r-bottom">
              <div className="Grid Grid--fit Grid--withGutter ">
                <div className="Grid-cell u-md-size2of12 u-lg-size2of12 u-layout-matchHeight">

                  {this.removeDuplicate(this.state.dataset.resources).map((res, index) => {

                    if (index < 3) {
                      return (
                        <div key={index} className="u-background-5 u-color-black u-margin-right-l u-margin-bottom-l u-borderRadius-m u-padding-all-xs u-textWeight-500">

                          {res}
                        </div>
                      );
                    } if (index = 3) {
                      return (
                        <div>
                          ...
                      </div>
                      )
                    }
                  })

                  }

                </div>
              </div>
            </div>

            <h3 className="u-padding-r-top u-padding-r-bottom">
              <Link className="u-text-h4 u-textClean u-color-50" to={"/dataset/" + this.state.dataset.id}>
                {this.state.dataset.title}
              </Link>
            </h3>

            <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
              {this.trunc(this.state.dataset.name, 300)}
            </p>
            <p><span className="u-color-50"><strong>Pubblicato da:</strong></span> {this.state.dataset.organization.title} </p>
            <p><span className="u-color-50"><strong>Data di ultima modifica:</strong></span> <FormattedDate
              value={this.state.dataset.organization.created}
              day="numeric"
              month="long"
              year="numeric" />
            </p>

          </section>
        </div>
      </div>
    );
  }
}

export default DatasetBox;
