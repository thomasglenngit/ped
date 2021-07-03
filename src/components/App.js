import React from 'react'
import Header from './Header'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import Profile from './Profile'
import Brown from './Brown'
import Coyle from './Coyle'
import Ristad from './Ristad'
import Smith from './Smith'
import Syllabus from './Syllabus'
// import history from '../history'

const App = () => {
  return (
    <p>Hello</p>,

    <BrowserRouter >
      <div>
        <Header />
        {/* <Syllabus /> */}
        <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Brown">
            <Brown />
          </Route>
          <Route path="/Coyle">
            <Coyle />
          </Route>
          <Route path="/Ristad">
            <Ristad />
          </Route>
          <Route path="/Smith">
            <Smith />
          </Route>
          {/* <Route path="/">
            <Splash />
          </Route> */}
        </Switch>
      </div>

    </BrowserRouter>

  )
}

export default App
