import React from 'react';
import { connect } from 'react-redux';
import Dataset from './Dataset';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../container/Login'
import Register from '../container/Register'
import { Footer } from '../components/HeaderFooter/Footer';
import { Header } from '../components/HeaderFooter/Header';
import UserStoryService from '../services/UserStoryService.js';
import UserStoriesContent from '../components/UserStory/UserStoriesContent.js';
import DatasetService from '../services/DatasetService.js';
import DatasetContent from '../components/Dataset/DatasetContent.js';

const mapStateToProps = state => ({
  appName: state.appName
});

let userStoryService = new UserStoryService();
let datasetService = new DatasetService();

class Home extends React.Component {

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

    // get datast
    let dataset = datasetService.getLast();
    dataset.then((list) => {
      this.setState({
        dataset: list
      });
    });

  }

  render() {
    return (
       <div data-reactroot className="app">
          <Header />
          <Switch>
            <Route path='/' exact component={Dataset} />
            <Route path="/login" component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
          <section className="u-nbfc u-background-white  u-textCenter u-layout-r-withGutter u-padding-r-top u-padding-r-bottom u-posRelative u-zindex-30">
            <div className="u-layout-wide u-layoutCenter">
              
              <UserStoriesContent userStories={this.state.userStories} >
              </UserStoriesContent>

              <DatasetContent dataset={this.state.dataset} >
              </DatasetContent>

            </div>
          </section>
          <Footer />
      </div>
      );
  }
}

export default connect(mapStateToProps, () => ({}))(Home);
