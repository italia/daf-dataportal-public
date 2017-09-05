import React from 'react';

import AutocompleteDataset from '../components/Autocomplete/AutocompleteDataset.js'

// SERVICES
import DatasetService from '../services/DatasetService';
const datasetService = new DatasetService();

export default class DatasetSearch extends React.Component {

  constructor(props) {
    super(props);

    //init state
    this.state={
      datasets: [],
      text: ""
    };

    //bind functions
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  
  search(event) {
    event.preventDefault();
    event.stopPropagation();
    
    //get stories

    let datasets = datasetService.search(this.state.text);
    datasets.then((list) => {
      this.setState({
        datasets: list
      });
    });
  }
  
      
  renderDatasetList(datasets){
    console.log('datasets: ' + datasets);
    return datasets.map(dataset => {
        return(
            <div className="u-background-grey-10 u-color-grey-50 u-padding-right-xxl u-margin-bottom-l">
            <p className="u-padding-r-bottom">
                <span className="Dot u-background-40"></span>
                <a className="u-textClean u-textWeight-700 u-text-r-xs u-color-50 u-margin-right-s" href="#">xlsx</a>
                <span className="Dot u-background-40"></span>
                <a className="u-textClean u-textWeight-700 u-text-r-xs u-color-50 u-margin-right-s" href="#">shp</a>
                <span className="Dot u-background-40"></span>
                <a className="u-textClean u-textWeight-700 u-text-r-xs u-color-50 u-margin-right-s" href="#">wms</a>
            </p>
            <h3 className="u-padding-r-top u-padding-r-bottom">
                <a className="u-text-h4 u-textClean u-color-black" href=""  onClick={this.handleLoadDatasetDetailClick.bind(this, dataset.name)}>
                {dataset.resources[0].name}
                            </a>
            </h3>
            <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                {dataset.resources[0].description}
                        </p>
            <p><strong>Pubblicato da: </strong>{dataset.organization.title}</p>
            <p><strong>Data di ultima modifica: </strong>{dataset.organization.created}</p>
            </div>
        );
    });
  }

  render() {
    return (
        <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
          <div className="Grid Grid--withGutter">
            <div className="Grid-cell u-md-size8of12 u-lg-size8of12 u-padding-right-xl">
              <h2 className=" u-padding-bottom-l">Trovati {this.state.datasets.length} Dataset</h2>
              <form className="Form u-text-r-xs u-margin-bottom-l">
                <fieldset className="Form-fieldset">
                  <div className="Form-field Form-field--withPlaceholder Grid u-background-white u-color-grey-30 u-borderRadius-s u-border-all-xxs">
                    <button className="Grid-cell u-sizeFit Icon-search u-color-grey-40 u-text-r-m u-padding-all-s u-textWeight-400">
                    </button>
                    <input value={this.state.text} onChange={this.handleChange} className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderHideFocus " required="" id="esplora" name="cerca" />
                    <button onClick={this.search} className="Grid-cell u-sizeFit u-background-60 u-color-white u-textWeight-600 u-padding-r-left u-padding-r-right u-textUppercase u-borderRadius-s">
                      Esplora
                    </button>
                  </div>
                </fieldset>
              </form>
              {this.renderDatasetList(this.state.datasets)}
              <nav role="navigation" aria-label="Navigazione paginata" className="u-layout-prose Grid-cell--center u-text-r-xss u-padding-top-xxl u-padding-bottom-l">
                <ul className="Grid Grid--fit Grid--alignMiddle u-text-r-xxs">
                  <li className="Grid-cell u-textCenter">
                    <a href="#" className="u-color-50 u-textClean u-padding-all-s" title="Pagina precedente">
                      <span className="Icon-chevron-left u-text-r-s" role="presentation"></span>
                      <span className="u-hiddenVisually">Pagina precedente</span>
                    </a>
                  </li>
                  <li className="Grid-cell u-textCenter u-hidden u-md-inlineBlock u-lg-inlineBlock">
                    <a href="/page-1" aria-label="Pagina 1" className="u-padding-all-s u-color-50 u-textClean">
                      <span className="u-text-r-m">1</span>
                    </a>
                  </li>
                  <li className="Grid-cell u-textCenter u-hidden u-md-inlineBlock u-lg-inlineBlock" aria-hidden="true">
                    <span className="u-padding-all-s u-color-50">
                      <span className="u-text-r-m">...</span>
                    </span>
                  </li>
                  <li className="Grid-cell u-textCenter">
                    <span className="u-padding-all-s u-background-50 u-color-white">
                      <span className="u-text-r-s"><span className="u-md-hidden u-lg-hidden">Pagina</span> 11</span>
                    </span>
                  </li>

                  <li className="Grid-cell u-textCenter u-hidden u-md-inlineBlock u-lg-inlineBlock">
                    <a href="#page-12" aria-label="Pagina 12" className="u-padding-all-s u-color-50 u-textClean">
                      <span className="u-text-r-s">12</span>
                    </a>
                  </li>
                  <li className="Grid-cell u-textCenter u-hidden u-md-inlineBlock u-lg-inlineBlock">
                    <a href="#page-13" aria-label="Pagina 13" className="u-padding-all-s u-color-50 u-textClean">
                      <span className="u-text-r-s">13</span>
                    </a>
                  </li>
                  <li className="Grid-cell u-textCenter">
                    <a href="#" className="u-padding-all-s u-color-50 u-textClean" title="Pagina successiva">
                      <span className="Icon-chevron-right u-text-r-s" role="presentation"></span>
                      <span className="u-hiddenVisually">Pagina successiva</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="Grid-cell u-sizeFull u-md-size4of12 u-lg-size4of12">
              <form className="Form u-text-r-xs u-padding-bottom-l">
                <fieldset className="Form-fieldset">
                  <h2 className=" u-padding-bottom-m"><label htmlFor="ordinamento">Ordina risultato</label></h2>

                  <div className="Form-field">

                    <select className="Form-input u-text-r-xs u-borderRadius-m u-padding-top-s u-padding-bottom-s " id="ordinamento" aria-required="true">
                      <option disabled="" defaultValue="">Data dalla più recente</option>
                      <option>Data dalla più lontana</option>
                      <option>Per categoria</option>
                    </select>
                  </div>
                </fieldset>
              </form>
              <h2 className=" u-padding-bottom-l">Filtra categorie</h2>
              <div className="u-sizeFull" id="subnav">
                <ul className="Linklist Linklist--padded u-layout-prose u-text-r-xs">
                  <li><a href="">Perferendis eaque quas ipsa.</a></li>
                  <li><a href="">Quod facere ab.</a></li>
                  <li><a href="">Suscipit perferendis animi voluptas quibusdam qui.</a></li>
                </ul>
              </div>
              <a href="#" title="torna all'inizio del contenuto" className="u-hiddenVisually">torna all'inizio del contenuto</a>
            </div>
          </div>
        </div>
      );
  }
}
