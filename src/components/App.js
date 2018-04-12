import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    letter-spacing: 0.05rem;
    line-height: 1.5rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App