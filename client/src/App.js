import React from 'react'
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

import NavBar from './component/NavBar'

import Home from './pages/Home'
import New from './pages/New'
import List from './pages/List'

import './style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/new">
            <New/>
          </Route>
          <Route exact path="/list">
            <List/>
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
