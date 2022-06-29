import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

import NavBar from './NavBar'
import New from './New'
import List from './List'

import './style.css'


function App() {
  const [originalUrl, setOriginalUrl] = useState("")
  const [urlId, setUrlId] = useState("")
  const [urlList, setUrlList] = useState([])

  // generate url-id for original URL
  const generateUrl = async () => {
    const response = await Axios.post('http://localhost:5000/generate', { originalUrl: originalUrl });
    setUrlId(response.data);
  }

  const addToTable = () => {
    Axios.post('http://localhost:5000/insert', {
      originalUrl: originalUrl,
      shortUrl: urlId
    });
    setOriginalUrl("")
    setUrlId("")
  }

  useEffect(() => {
    Axios.get('http://localhost:5000/read').then((response) => {
    setUrlList(response.data);
    });
  }, [urlList])

  const deleteItem = (id) => {
    Axios.delete(`http://localhost:5000/delete/${id}`)
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <New 
                setOriginalUrl={setOriginalUrl}
                generateUrl={generateUrl}
                urlId={urlId}
                addToTable={addToTable}
              />
            </Route>
            <Route exact path="/list">
              <List 
                urlList={urlList}
                deleteItem={deleteItem}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
