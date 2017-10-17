import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Main from './Main'

export default class App extends Component {
  render() { 
  return <BrowserRouter>
        <Switch>
          <Route path='/datasetdetail/:name' component={Main} />
          <Route path='/' exact component={Main} />
          <Route component={Main} />
        </Switch>
      </BrowserRouter>
  }
}
