import React from 'react';

import { Link } from 'react-router-dom';
import {FormattedDate} from 'react-intl';

class DatasetBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = props;
  }

  trunc (text, size) {
    if(text.length > size) {
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
                
                <p className="u-padding-r-bottom">
                
                {this.state.dataset.resources.map((res, index) => {
                  if (index < 3) {
                  return(                 
                    <a className="u-textClean u-textWeight-700 u-text-r-xs u-color-50 u-margin-right-s" href="#"><span key={index} className="Dot u-background-40"></span>{res.format}</a>
                    );   
                  }  if(index = 3) {
                    return(<Link className="u-textClean u-textWeight-700 u-text-r-xs u-color-50 u-margin-right-s" to={"/dataset/" + this.state.dataset.id}>...</Link>);
                  }
                })
                
                }
                </p>             

                <h3 className="u-padding-r-top u-padding-r-bottom">
                  <Link className="u-text-h4 u-textClean u-color-black" to={"/dataset/" + this.state.dataset.id}>
                    {this.state.dataset.title}
                  </Link>
                </h3>

                <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                  {this.trunc(this.state.dataset.name, 300)}
                </p>
                <p><strong>Pubblicato da:</strong> {this.state.dataset.organization.title} </p>
                <p><strong>Data di ultima modifica:</strong> <FormattedDate
                        value={this.props.dataset.organization.created}
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
