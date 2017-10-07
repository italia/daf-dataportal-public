import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {BrowserRouter , Route} from 'react-router-dom';
import AutocompleteDataset from '../components/Autocomplete/AutocompleteDataset.js'

import UserStoryService from '../services/UserStoryService.js';
import UserStoriesContent from '../components/UserStory/UserStoriesContent.js';
import DatasetService from '../services/DatasetService.js';
import DatasetContent from '../components/Dataset/DatasetContent.js';
import SearchBar from '../components/HeaderFooter/SearchBar.js';
import CsvDisplayer from '../components/CsvDisplayer/CsvDisplayer.js';

let userStoryService = new UserStoryService();
let datasetService = new DatasetService();

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {};

    //get stories
    let userStories = userStoryService.getLast();
    userStories.then((list) => {
      this.setState({
        userStories: list
      });
    });

    // get dataset
    let dataset = datasetService.getLast();
    dataset.then((list) => {
      this.setState({
        dataset: list
      });
    });

    // get number of
    let datasets = datasetService.getNumber();
    datasets.then((list) => {
      this.setState({
        datasetNumber: list?list.result.length:0
      });
    });
  }

  render() {
    const { datasets, dataset, ope } = this.props
    return (
      <div>
          <div className="u-textCenter">
            <SearchBar history={this.props.history} datasetNumber={this.state.datasetNumber}/>

            <section className="u-nbfc u-background-white  u-textCenter u-layout-r-withGutter u-padding-r-top u-padding-r-bottom u-posRelative u-zindex-30">
              <div className="u-layout-wide u-layoutCenter">
                
                <UserStoriesContent userStories={this.state.userStories} >
                </UserStoriesContent>

                <DatasetContent dataset={this.state.dataset} >
                </DatasetContent>
                
                
                  <CsvDisplayer src='https://docs.google.com/spreadsheets/d/1PV2dpPmxydu4IoHoyEB3LaZduCZxeng5_CbC1Mr8C9U/export?format=csv&gid=734835459&single=true'
                        latFieldName='Lat' longFieldName='Lon' noheader={false} dataColumnName="Luogo"
                        type="map"  zoom="18" center={[40.36135,18.18825]}></CsvDisplayer>
                  
                  <CsvDisplayer src='https://docs.google.com/spreadsheets/d/1PV2dpPmxydu4IoHoyEB3LaZduCZxeng5_CbC1Mr8C9U/export?format=csv&gid=734835459&single=true'
                        noheader={false} type="table"></CsvDisplayer>
                        
              </div>
            </section>
          </div>
      </div>
    )
  }
}



Home.propTypes = {
  selectDataset: PropTypes.string,
  datasets: PropTypes.array,
  dataset: PropTypes.object,
  isFetching: PropTypes.bool,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func,
  ope: PropTypes.string
}

export default Home