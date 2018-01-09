import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'

import UserStoriesList from '../container/UserStoriesList'
import DashboardsList from '../container/DashboardsList'
import Missione from '../container/Missione'
import LineeGuida from '../container/LineeGuida'
import Team from '../container/Team'
import TeamDett from '../container/TeamDett'
import Partecipa from '../container/Partecipa'

import { Footer } from '../components/HeaderFooter/Footer';
import { Header } from '../components/HeaderFooter/Header';

import Home from '../views/Home';
import UserStoryView from '../views/UserStoryView';
import DashboardView from '../views/DashboardView';
import DatasetSearch from '../views/DatasetSearch';
import DatasetDetail from '../views/DatasetDetail';

import { IntlProvider } from 'react-intl';
import it from "react-intl/locale-data/it";
import { addLocaleData } from 'react-intl';
import defaultprops from '../data/props.js' //remove?

addLocaleData(it);

const mapStateToProps = state => ({
  appName: state.appName
});

class Main extends React.Component {

  constructor(props) {
    super(props)
    //init state
    if (localStorage.getItem('prop')) {
      console.log('Carico properties')
      this.state = {
        styleProps: JSON.parse(localStorage.getItem('prop'))
      }
    } else {
      console.log('Carico properties di default')
      this.state = {
        styleProps: defaultprops
      }
    }
  }

  render() {
    return (
      <IntlProvider locale="it">
        <div data-reactroot className="app">
          <div className="u-background-95">
            <div className="u-layout-wide u-layoutCenter">
              <Header styleProps={this.state.styleProps} />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/user_story/:id' exact component={UserStoryView} />
                <Route path='/dashboard/:id' exact component={DashboardView} />
                <Route path='/dataset/search' exact component={DatasetSearch} />
                <Route path='/dataset/:id' exact component={DatasetDetail} />


                <Route path="/userStoriesList" component={UserStoriesList} />
                <Route path="/dashboardsList" component={DashboardsList} />
                <Route path="/missione" component={Missione} />
                <Route path="/lineeguida" component={LineeGuida} />
                <Route path="/team" component={Team} />
                <Route path="/teamDett" component={TeamDett} />
                <Route path="/partecipa" component={Partecipa} />

                <Route render={() => <h3>Pagina non trovata</h3>} />
              </Switch>
              <Footer styleProps={this.state.styleProps} />
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default Main;
