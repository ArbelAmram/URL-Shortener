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
        console.log("urlId:" + urlId)
        
        var response = ''

        if(originalUrl !== '') {
            response = await axios.post(`${API}/generate`, { originalUrl: originalUrl });
        } else return
        
        if(response.data) {
            setUrlId(response.data)
            setMessage('A url Id has created successfully') 
        } else {
            setMessage('Failed to generate a url Id - make sure you entered a valid URL')
        }
    }
    

    const addToTable = () => {
        if(urlId) {
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
        <div className='app'>        
            <div className='section'>
                <label>URL</label>
                <input 
                    id='urlInput'
                    type='text' 
                    value={originalUrl}
                    onChange={e => setOriginalUrl(e.target.value)}
                    placeholder='Please insert a valid url'
                />
                <button onClick={() => generateUrl()}>Shortify</button>
            </div>
            <div className='section'>            
                <label>Result</label>
                <input 
                    type='text' 
                    id='urlId'
                    value={urlId}
                    placeholder='A unique id will be generate and display here'
                    readOnly
                />
                <button onClick={() => addToTable()}>Save to Database</button>
            </div>
            <div className={message ? 'message' : ''}>
                {message ? <h3>{message}</h3> : <></>}
            </div>
        </div>
    )
}

export default New