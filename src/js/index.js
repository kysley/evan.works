import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Nav'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

import styles from '../styles/app.css'

ReactDOM.render((
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
), document.getElementById('app'))
