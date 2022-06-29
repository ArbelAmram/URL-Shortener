import React from 'react'

import './style.css'

const New = ({setOriginalUrl, generateUrl, urlId, addToTable}) => {
  return (
    <div>
        <div className="app">        
            <div className='section'>
                <label>URL</label>
                <input 
                    type="text" 
                    onChange={e => {setOriginalUrl(e.target.value)}}
                    placeholder="please insert a url"
                />
                <button onClick={generateUrl}>Shortify</button>
            </div>
            <div className='section'>            
                <label>Result</label>
                <input 
                    type="text" 
                    value={urlId}
                    placeholder='a short URL id will be generate and display here'
                    readOnly
                />
                <button onClick={addToTable}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default New