import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'

import Header from './components/Nav'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

import styles from '../styles/app.css'

ReactGA.initialize('UA-77767358-5')

const GoogleAnalytics = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  return null
}

ReactDOM.render((
  <Router>
    <div>
      <Header />
      <GoogleAnalytics />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
), document.getElementById('app'))
