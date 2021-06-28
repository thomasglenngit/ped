import React from 'react'
import Header from './Header'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

const App = () => {
  return (
    <p>Hello</p>,
    <Router >
      <div>
        <Header />
        <Switch>
          <Route path="/Profile" />
          <Route path="/Brown" />
          <Route path="/Coyle" />
          <Route path="/Ristad" />
          <Route path="/Smith" />
        </Switch>
      </div>

    </Router>

  )
}

export default App