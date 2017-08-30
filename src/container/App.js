import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Login from '../container/Login'
import Register from '../container/Register'
import Main from './Main'

import { firebaseAuth } from '../config/constants'
import { Provider } from 'react-redux';
import configureStore from '../configureStore'

const store = configureStore();

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route authed={this.state.authed} path="/login" component={Main} />
          <Route authed={this.state.authed} path='/register' component={Main} />
          <Route authed={this.state.authed} path='/datasetdetail/:name' component={Main} />
          <Route authed={this.state.authed} path='/' exact component={Main} />
          <Route component={Main} />
        </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}
