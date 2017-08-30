import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../container/Login'
import Register from '../container/Register'

import { Footer } from '../components/HeaderFooter/Footer';
import { Header } from '../components/HeaderFooter/Header';

import Home from '../views/Home';
import UserStoryView from '../views/UserStoryView'


const mapStateToProps = state => ({
  appName: state.appName
});

class Main extends React.Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    return (
       <div data-reactroot className="app">
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/user_story/:id' exact component={UserStoryView} />

            <Route render={() => <h3>Pagina non trovata</h3>} />
          </Switch>
          <Footer />
      </div>
      );
  }
}

export default connect(mapStateToProps, () => ({}))(Main);
