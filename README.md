# url_shortener

This is a URL Shortener Full stack application.</br>

Built with MERN stack: MongoDB, Express, ReactJs, NodeJs

Project management:</br>
    frontend client - ReactJs</br>
    backend server - NodeJs</br>
    Database Schema MongoDB</br>

Instructions - how to run the project:</br>
    1. `cd client`</br>
    2. install packages: </br>
         `npm i axios react-router-dom@5.0.0` </br>
    3. `npm start` (run react app)</br>
    4. open a new terminal</br>
    5. `cd server`</br>
    6. install packages:</br>
         `npm i express mongoose nodemon shortid cors valid-url`</br>
    7. `npm run devStart` (run and listen to express server using nodemon)</br>
        *script listed in server/package.json/scripts</br>

* optional isuue: the db connection (server/index.js/row:10) Is possible by my credentials on mongoDB.</br> make sure to create a new custom connection.</br> 

How does the app work???</br>
From the default page (tab 'New') we are presented with 2 input fields.</br>
when entering a valid URL, by clicking on 'Shortify' an id will be created</br>
and appear in the second field. </br>
* If the URL is invalid an error message will appear instead.</br>

After successfully creating an ID for our original URL, by clicking on save a short URL will be created</br>
and an instance will be added to the database with all the requested information.</br>
all of our reserved URL instances will appear in the table on the second page (tab 'List').</br>
From the second page, we will be able to access the new URL wich will redirect us to the original URL</br>
(common id).</br>
From the table, we can delete the instances (also from the Database).</br>

