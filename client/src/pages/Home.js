import React from 'react'

const Home = () => {
  return (
    <div className='intro'>
        <h1>Welcome to my URL Shortener App</h1>
        <h2>How does it work ???</h2>
        <p>
            By providing a valid URL the app will generate a unique id for it.<br />
            If you choose to save - a short URL will be created by adding the unique Id to the node.js server domain<br />
            [SERVER_DOMAIN:"localhost:5000"/UNIQE_ID]<br />
            By accessing the short URL, the server will re-direct us to the original URL<br />
            The app will also count the number of entrances to the short URL and display it on the list of saved addresses<br />
            Click on <span style={{ color: '#00bbf0'}}>New</span> to create a new short URL<br />
            Click on <span style={{ color: '#00bbf0'}}>List</span> to view the list of saved URLs<br />
            made by <span style={{ fontStyle: 'oblique', textDecoration: 'underline'}}>Arbel Amram</span>
        </p>
    </div>
  );
}

export default Home