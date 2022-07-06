import React, { useState } from 'react'
import axios from 'axios'

import './style.css'

// const New = ({setOriginalUrl, generateUrl, urlId, addToTable}) => {
    const New = ({addToTable}) => {

    const [successMsg, setSuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [originalUrl, setOriginalUrl] = useState("")
    const [urlId, setUrlId] = useState("")

    const API = 'http://localhost:5000'

  // generate url-id for original URL
  const generateUrl = async () => {
    const response = await axios.post(`${API}/generate`, { originalUrl: originalUrl });
    setUrlId(response.data);
  }

  return (
    <div>
        <div className="app">        
            <div className='section'>
                <label>URL</label>
                <input 
                    id='urlInput'
                    type="text" 
                    onChange={e => {setOriginalUrl(e.target.value)}}
                    placeholder="please insert a url"
                />
                <button onClick={() => {
                    generateUrl()
                    console.log("urlId:" + urlId)
                    urlId === "Not a valid url - try again" ? setErrorMsg(urlId) : setSuccessMsg("yupidu") 
                    console.log("urlId:" + urlId)
                    }}
                >Shortify</button>
                
            </div>
            <div className='section'>            
                <label>Result</label>
                <input 
                    type="text" 
                    value={urlId}
                    placeholder='a short URL id will be generate and display here'
                    readOnly
                />
                
                <button onClick={() => {
                    addToTable()
                    document.getElementById('urlInput').value = ''
                }
                }>Save</button>
            </div>
            <div className='message'>
                { errorMsg ? <h3 className='errorMsg'>{errorMsg}</h3> :
                    successMsg ? <h3 className='successMsg'>{successMsg}</h3> : 
                    <h3 className='plainMsg'>Let start</h3>
                }
            </div>
        </div>
    </div>
  )
}

export default New