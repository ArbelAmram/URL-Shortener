import React, { useState } from 'react'
import axios from 'axios'

import './style.css'

const New = () => {
    const [originalUrl, setOriginalUrl] = useState('')
    const [urlId, setUrlId] = useState('')

    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    
    const msgCleaner = () => {
        setTimeout(alert('Timeout calledd!'), 30000)
    }

    const API = 'http://localhost:5000'

    const generateUrl = async () => {       
        console.log("originalUrl:" + originalUrl)
        
        var response = ''

        if(originalUrl !== '') {
            response = await axios.post(`${API}/generate`, { originalUrl: originalUrl });
        } else return
        
        if(response.data !== 'false' && undefined) {
            setUrlId(response.data)
            console.log("response.data: " + response.data)
            setSuccessMsg("yupidu") 
            msgCleaner()
        } else {
            setErrorMsg('oh come on')
            msgCleaner()
        }
    }
    

    const addToTable = () => {
        console.log("pre originalUrl:" + originalUrl)
        console.log("pre urlId:" + urlId)
        if(urlId !== '' || 'false' || false || undefined) {
            console.log("insert activated")
            axios.post(`${API}/insert`, {
                originalUrl: originalUrl,
                shortUrl: urlId
            });
        } else console.log("save - not compiled")

        setOriginalUrl("")
        setUrlId("")
        setSuccessMsg("")
        setErrorMsg("")
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
                <button 
                    onClick={addToTable 
                        // document.getElementById('urlInput').value = ''
                        // document.getElementById('urlId').value = ''
                    }
                >Save</button>
            </div>
            <div className='message'>
                { errorMsg !== '' ? <h3 className='errorMsg'>{errorMsg}</h3> : successMsg !== '' ? <h3 className='successMsg'>{successMsg}</h3> : <h3>no message</h3>                   
                }
            </div>
        </div>
    )
}

export default New