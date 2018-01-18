import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AutocompleteDataset from '../components/Autocomplete/AutocompleteDataset.js'

import UserStoryService from '../services/UserStoryService.js';
import UserStoriesContent from '../components/UserStory/UserStoriesContent.js';
import DashboardService from '../services/DashboardService.js';
import DashboardsContent from '../components/Dashboard/DashboardsContent.js';
import DatasetService from '../services/DatasetService.js';
import DatasetContent from '../components/Dataset/DatasetContent.js';
import SearchBar from '../components/HeaderFooter/SearchBar.js';

let userStoryService = new UserStoryService();
let dashboardService = new DashboardService();
let datasetService = new DatasetService();

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {};

    //get stories
    let userStories = userStoryService.getLast();
    userStories.then((list) => {
      this.setState({
        userStories: this.filterStoriesByDomain(list)
      });
    });

/*     //get dashboards
    let dashboards = dashboardService.getLast();
    dashboards.then((list) => {
      this.setState({
        dashboards: list
      });
    }); */

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
        datasetNumber: list ? list.result.count : 0
      });
    });
  }

  filterStoriesByDomain(json){
    var dom = window.location.hostname.split('.')[0];
        if(dom!='dataportal'){
          var filteredJson = []
          json.map((story) => {
            if(story.title.toUpperCase().indexOf(dom.toUpperCase()) !== -1){
              filteredJson.push(story)
            }
          })
          return filteredJson
        } else return json
  }

  render() {
    const { datasets, dataset, ope } = this.props
    return (
      <div>
        <div className="u-textCenter">
          <SearchBar history={this.props.history} datasetNumber={this.state.datasetNumber} />

          <section className="u-nbfc u-background-white  u-textCenter u-layout-r-withGutter u-padding-r-top u-padding-r-bottom u-zindex-30">
            <div className="u-layout-wide u-layoutCenter">

              <UserStoriesContent userStories={this.state.userStories} storiesNum={2} >
              </UserStoriesContent>

{/*               <DashboardsContent dashboards={this.state.dashboards} >
              </DashboardsContent> */}

              <DatasetContent dataset={this.state.dataset} >
              </DatasetContent>

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