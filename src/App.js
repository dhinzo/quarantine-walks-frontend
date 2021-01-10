import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import MainNav from './shared/components/Navigation/MainNav'
import Users from './user/pages/Users'
import UserWalks from './walks/pages/UserWalks'
import NewWalk from './walks/pages/NewWalk'
import UpdateWalk from './walks/pages/UpdateWalk'
import Auth from './user/pages/Auth'

const App = () => {
  return (
    <Router>
      <MainNav />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/walks" exact>
            <UserWalks />
          </Route>
          <Route path="/walks/new" exact>
            <NewWalk />
          </Route>
          <Route path="/walks/:walkId">
            <UpdateWalk />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
