import React, { useState } from 'react'
import axios from 'axios'

import './style.css'

const New = () => {
    const [originalUrl, setOriginalUrl] = useState("")
    const [urlId, setUrlId] = useState("")

    const [successMsg, setSuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const API = 'http://localhost:5000'

    const generateUrl = async () => {
        
        const response = await axios.post(`${API}/generate`, { originalUrl: originalUrl });
        
        if(response) {
            setUrlId(response.data)
            urlId != 'false' ? setSuccessMsg("yupidu") : setErrorMsg(urlId)
        } else console.log("reponse 400")

         
    }
    

    const addToTable = () => {
        axios.post(`${API}/insert`, {
            originalUrl: originalUrl,
            shortUrl: urlId
        });
        setOriginalUrl("")
        setUrlId("")
    }

    return (
        <div className="app">        
            <div className='section'>
                <label>URL</label>
                <input 
                    id='urlInput'
                    type="text" 
                    onChange={e => {setOriginalUrl(e.target.value)}}
                    placeholder="please insert a url"
                />
                <button onClick={() => { generateUrl() }}>Shortify</button>
            </div>
            <div className='section'>            
                <label>Result</label>
                <input 
                    type="text" 
                    value={urlId}
                    placeholder='a short URL id will be generate and display here'
                    readOnly
                />
                <button 
                    onClick={() => {
                        addToTable()
                        document.getElementById('urlInput').value = ''
                    }}
                >Save</button>
            </div>
            <div className='message'>
                { errorMsg ? <h3 className='errorMsg'>{errorMsg}</h3> :
                    successMsg ? <h3 className='successMsg'>{successMsg}</h3> : <span/>                   
                }
            </div>
        </div>
    )
}

export default New