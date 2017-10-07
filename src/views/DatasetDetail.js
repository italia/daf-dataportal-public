import React from 'react';
import { FormattedDate } from 'react-intl';

import DatasetSearchCard from '../components/Dataset/DatasetSearchCard.js'
import ReactCsvTable from '../components/Dataset/ReactCsvTable.js'
import Collapsible from 'react-collapsible';

// SERVICES
import DatasetService from '../services/DatasetService';
const datasetService = new DatasetService();

export default class DatasetDetail extends React.Component {

  constructor(props) {
    super(props);

    //init state
    this.state = {
    };

    // get dataset
    let dataset = datasetService.get(this.props.match.params.id);
    dataset.then((dataset) => {
      this.setState({
        dataset: dataset.result
      });
    });

    //bind functions
  }


  render() {
    return (
      <div className="u-layout-wide u-layoutCenter">
        <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
          <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Scheda del Dataset</h2>
        </div>

        <div className="u-padding-top-xxl u-background-50"></div>
        <hr className="Separator Separator--up u-background-white" />
        <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
          {this.state.dataset &&
            <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
              <div className="Grid Grid--withGutter">
                <div className="Grid-cell u-md-size8of12 u-lg-size8of12 u-padding-right-xl">
                  <h2 className=" u-padding-bottom-l">{this.state.dataset.title}</h2>
                </div>
                <div className="Grid-cell u-md-size8of12 u-lg-size8of12 u-padding-right-xl">

                  <article className="u-padding-r-all u-background-grey-10 u-lineHeight-l u-text-r-xs u-textSecondary u-margin-bottom-l">
                    <p><strong>Titolare del dataset: </strong> {this.state.dataset.holder_name}</p>
                    <p><strong>Editore del dataset:</strong> {this.state.dataset.publisher_name}</p>
                    {/* Auotre solo se presente */}
                    {this.state.dataset.creator_name &&
                      <p><strong>Autore del dataset: </strong> {this.state.dataset.creator_name}</p>}
                  </article>
                  <article className="u-padding-r-all u-background-grey-10 u-lineHeight-l u-text-r-xs u-textSecondary u-margin-bottom-l">
                    <h3 className=" u-padding-bottom-s"><strong>Descrizione</strong></h3>
                    <p>{this.state.dataset.notes}</p>
                  </article>
                  <article className="u-padding-r-all u-background-grey-10 u-lineHeight-l u-text-r-xs u-textSecondary u-margin-bottom-l">
                    <h3 className=" u-padding-bottom-s"><strong>Distribuzioni</strong></h3>

                    {this.state.dataset.resources && this.state.dataset.resources.map((res, index) => {
                      res.url = "https://docs.google.com/spreadsheets/d/1AsJaD0IoqSH88LZcqEbPhM91QDoX2k5c1XXPKqIYXIg/export?format=csv&gid=0&single=trueZdYjke92UQ0rxEN5qLwzE/export?format=csv&gid=0&single=true"
                      let dataVisualizer = null;
                      if (res.format === 'CSV'){
                        dataVisualizer = <Collapsible className=".Collapsible__trigger" trigger="Anteprima" >
                                            <ReactCsvTable csvPath={res.url} />
                                         </Collapsible>;
                      }
                      console.log(res);
                      return (
                        <div className="Grid Grid--fit Grid--withGutter " key={index}>
                          <div className="Grid-cell u-md-size2of12 u-lg-size2of12 ">
                            <div className="u-background-5 u-sizeFull u-color-black u-margin-bottom-l u-borderRadius-m u-padding-all-xxs u-textWeight-500 ">
                              {res.format}
                            </div>
                          </div>
                          <div className="Grid-cell  u-md-size10of12 u-lg-size10of12 ">
                            <div className=" u-margin-bottom-l u-borderRadius-m u-padding-all-xxs u-lineHeight-xxl">
                              <a href={res.url} className="u-text-s u-textWeight-600 u-textClean u-color-50">{res.name} </a><br /> {res.description}
                              <p><strong>Licenza: </strong> {res.license} </p>
                            </div>
                          </div>
                          {dataVisualizer}
                        </div>
                      );

                    })

                    }

                  </article>
                </div>
                <div className="Grid-cell u-sizeFull u-md-size4of12 u-lg-size4of12">
                  <article className="u-padding-r-all u-background-grey-10 u-lineHeight-l u-text-r-xs u-textSecondary u-margin-bottom-l">

                    <p><strong>Temi del dataset:</strong> {this.state.dataset.theme} </p>
                    <p><strong>Parole chiave del dataset: </strong>

                      {this.state.dataset.tags && this.state.dataset.tags.map((tag, index) => {
                        if (this.state.dataset.num_tags == index + 1) {
                          return (
                            <a href="#"><span key={index}></span>{tag.display_name} </a>
                          );
                        } else {
                          return (
                            <a href="#"><span key={index}></span>{tag.display_name}, </a>
                          );
                        }
                      })
                      }
                    </p>
                    <p><strong>Identificativo del dataset: </strong>{this.state.dataset.id}</p>
                    <p><strong>Data di rilascio: </strong>
                      <FormattedDate
                        value={this.state.dataset.metadata_created}
                        day="numeric"
                        month="long"
                        year="numeric" />
                    </p>

                    <p><strong>Data di ultima modifica: </strong>
                      <FormattedDate
                        value={this.state.dataset.metadata_modified}
                        day="numeric"
                        month="long"
                        year="numeric" />
                    </p>
                    <p><strong>Lingua del dataset: </strong> {this.state.dataset.language} </p>
                  </article>


                  <article className="u-padding-r-all u-background-grey-10 u-lineHeight-l u-text-r-xs u-textSecondary u-margin-bottom-l">
                    <h2 className=" u-padding-bottom-l"><strong>Contatti: </strong></h2>
                    <p>{this.state.dataset.extras &&
                      this.state.dataset.extras.map((extra, index) => {
                        if (extra.key == "contact_name") {
                          return (
                            <p><span key={index}><strong>Nome: </strong>{extra.value}</span><br /> </p>
                          );
                        } else if (extra.key == "contact_email") {
                          return (
                            <p><span key={index}><strong>Email Contatto: </strong>{extra.value}</span><br /> </p>
                          );
                        }
                      })
                    }
                    </p>
                  </article>




                  {/*  <article className="u-padding-r-all u-background-grey-10 u-lineHeight-l u-text-r-xs u-textSecondary u-margin-bottom-l">
                  <h2 className=" u-padding-bottom-l"><strong>Catalogo </strong></h2>
                  <p><strong>Home page: </strong> <a href="#">http://dati.mit.gov.it/catalog/dataset</a> </p>
                  <p><strong>URL API: </strong> <a href="#">http://dati.mit.gov.it/catalog/api/3/a...</a> </p>
                </article> */}
                  <a href="#" title="torna all'inizio del contenuto" className="u-hiddenVisually">torna all'inizio del contenuto</a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

    );
  }
}
