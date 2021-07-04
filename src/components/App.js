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
    <React.Fragment>
      <BrowserRouter >
      <Header />
        <div className="body">

          
          <Switch>
            <Route path="/Syllabus">
              <Syllabus />
            </Route>
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
    </React.Fragment>

  )
}

export default App
