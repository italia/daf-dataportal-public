import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../container/Login'
import Register from '../container/Register'
import Crea from '../container/Crea'
import Missione from '../container/Missione'
import LineeGuida from '../container/LineeGuida'
import Team from '../container/Team'
import TeamDett from '../container/TeamDett'
import Partecipa from '../container/Partecipa'
import Map from '../container/Map'
import Table from '../container/Table'

import { Footer } from '../components/HeaderFooter/Footer';
import { Header } from '../components/HeaderFooter/Header';

import Home from '../views/Home';
import UserStoryView from '../views/UserStoryView';
import DatasetSearch from '../views/DatasetSearch';
import DatasetDetail from '../views/DatasetDetail';

import {IntlProvider} from 'react-intl';
import it from "react-intl/locale-data/it";
import {addLocaleData} from 'react-intl';
addLocaleData(it);

const mapStateToProps = state => ({
  appName: state.appName
});

class Main extends React.Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <IntlProvider locale="it">
       <div data-reactroot className="app">   
       <div className="u-background-95">
          <div className="u-layout-wide u-layoutCenter">
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/user_story/:id' exact component={UserStoryView} />
            <Route path='/dataset/search' exact component={DatasetSearch} />
            <Route path='/dataset/:id' exact component={DatasetDetail} />

                <Route path="/crea" component={Crea} />
                <Route path="/missione" component={Missione} />
                <Route path="/lineeguida" component={LineeGuida} />
                <Route path="/map" component={Map} />
                <Route path="/table" component={Table} />
                <Route path="/team" component={Team} />
                <Route path="/teamDett" component={TeamDett} />
                <Route path="/partecipa" component={Partecipa} />

                <Route render={() => <h3>Pagina non trovata</h3>} />
              </Switch>
              <Footer />
            </div>
          </div>
        </div>        
      </IntlProvider>
      );
  }
}

export default Main;
