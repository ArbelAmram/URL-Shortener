import React from 'react'
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

import NavBar from './NavBar'
import New from './New'
import List from './List'

import './style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <New 
                // setOriginalUrl={setOriginalUrl}
                // generateUrl={generateUrl}
                // urlId={urlId}
                // addToTable={addToTable}
              />
            </Route>
            <Route exact path="/list">
              <List 
                // urlList={urlList}
                // deleteItem={deleteItem}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
