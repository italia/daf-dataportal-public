import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AutocompleteDataset from '../components/Autocomplete/AutocompleteDataset.js'

import UserStoryService from '../services/UserStoryService.js';
import UserStoriesContent from '../components/UserStory/UserStoriesContent.js';
import DatasetService from '../services/DatasetService.js';
import DatasetContent from '../components/Dataset/DatasetContent.js';
import SearchBar from '../components/HeaderFooter/SearchBar.js';

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
  }

  render() {
    const { datasets, dataset, ope } = this.props
    return (
      <div>
          <div className="u-textCenter">
            <SearchBar history={this.props.history}/>

            <section className="u-nbfc u-background-white  u-textCenter u-layout-r-withGutter u-padding-r-top u-padding-r-bottom u-posRelative u-zindex-30">
              <div className="u-layout-wide u-layoutCenter">
                
                <UserStoriesContent userStories={this.state.userStories} >
                </UserStoriesContent>

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
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  ope: PropTypes.string
}

export default Home