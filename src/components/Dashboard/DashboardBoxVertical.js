import React from 'react';
import { Route, Link } from 'react-router-dom';


class DashboardBoxVertical extends React.Component {

  constructor(props) {
    super(props)

    this.state = props;
  }

  trunc (text, size) {
    if(text){
      if(text.length > size) {
        text = text.substr(0, size);
        text += "...";
      }
    } else {
      text = "---"
    }

    return text;
  }

  render() {

    return (
     
        <div className="Grid-cell u-sizeFull u-md-size1of1 u-lg-size1of1 u-margin-r-bottom u-layout-matchHeight">
            <div className="w-100 u-nbfc u-borderRadius-m u-background-grey-10">
              <section className="u-text-r-l u-padding-r-all u-layout-prose">
                <h3 className="u-padding-r-bottom">
                  
                  <Link className="u-text-h4 u-textClean u-color-50" role="button" to={"/dashboard/" + this.state.dashboard.id}>
                      {this.state.dashboard.title}
                  </Link>

                </h3>
                <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                  <span dangerouslySetInnerHTML={{__html: this.trunc(this.state.dashboard.subtitle, 300)}}></span>
                </p>
                <p><span className="u-color-50"><strong>Pubblicato da:</strong></span>  {this.state.dashboard.user}</p>
                <p><span className="u-color-50"><strong>Data di ultima modifica:</strong></span>  {this.state.dashboard.dateLastEdit}</p>       

               
              </section>            
              
            </div>
          </div>
    
      );
  }
}

export default DashboardBoxVertical;
