import React, { useState } from 'react'
import axios from 'axios'

import '../style.css'

const New = () => {
    const [originalUrl, setOriginalUrl] = useState('')
    const [urlId, setUrlId] = useState('')

    const [message, setMessage] = useState('')

    const API = 'http://localhost:5000'

    const generateUrl = async () => {       
        console.log("originalUrl:" + originalUrl)
        
        var response = ''

        if(originalUrl !== '') {
            response = await axios.post(`${API}/generate`, { originalUrl: originalUrl });
        } else return
        
        if(response.data !== 'false' && undefined) {
            setUrlId(response.data)
            setMessage('success') 
        } else {
            setMessage('failed')
        }
    }
    

    const addToTable = () => {
        if(urlId !== '' || 'false' || false || undefined) {
            axios.post(`${API}/insert`, {
                originalUrl: originalUrl,
                shortUrl: urlId
            });
        } 

        setOriginalUrl("")
        setUrlId("")
        setMessage("")
    }


    return (
        <div className="app">        
            <div className='section'>
                <label>URL</label>
                <input 
                    id='urlInput'
                    type="text" 
                    value={originalUrl}
                    onChange={e => {setOriginalUrl(e.target.value)}}
                    placeholder="please insert a url"
                />
                <button onClick={generateUrl}>Shortify</button>
            </div>
            <div className='section'>            
                <label>Result</label>
                <input 
                    type="text" 
                    id='urlId'
                    value={urlId}
                    placeholder='a short URL id will be generate and display here'
                    readOnly
                />
                <button onClick={addToTable}>Save</button>
            </div>
            <div className={message ?'message' : ''}>
                {message ? <h3>{message}</h3> : <h3>try out</h3>}
            </div>
        </div>
    )
}

export default New