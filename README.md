# URL_Shortener

This is a URL Shortener Full stack application.</br>

Built with MERN stack: MongoDB, Express, ReactJs, NodeJs

File management:</br>
    frontend (client - ReactJs)</br>
    backend (server - NodeJs)</br>
    Database Schema MongoDB (located at: server -> models -> URL)</br>

Instructions - how to run the project:</br>
    1. `cd client`</br>
    2. install packages: 
         `npm i axios react-router-dom@5.0.0` </br>
    3. `npm start` (run react app)</br>
    4. open a new terminal</br>
    5. `cd server`</br>
    6. install packages:
         `npm i express mongoose nodemon shortid cors valid-url`</br>
    7. `npm run devStart` (run and listen to express server using nodemon)</br>
        *script listed in server/package.json/scripts</br>

* optional isuue: the db connection (server/index.js/row:10) Is possible by my credentials on mongoDB.</br> make sure to create a new custom connection. 

How does the app work???</br>
From the default page (tab 'New') we are presented with 2 input fields.</br>
when entering a valid URL, by clicking on 'Shortify' an id will be created
and appear in the second field. </br>
* If the URL is invalid an error message will appear instead.</br>

After successfully creating an ID for our original URL, by clicking on save a short URL will be created
and an instance will be added to the database with all the requested information.</br>
all of our reserved URL instances will appear in the table on the second page (tab 'List').</br>
From the second page, we will be able to access the new URL wich will redirect us to the original URL
(common id).</br>
From the table, we can delete the instances (also from the Database).

<h1>an ERD Schema representing the model</h1>

![model schema erd](https://user-images.githubusercontent.com/51449659/175254840-69e8e999-90dd-4cce-a67f-f0a7c4a30939.png)

<h1>Main screen</h1>

![New](https://user-images.githubusercontent.com/51449659/175254885-40d348d8-4cb9-475a-a063-e9a2dffeed83.jpg)

<h1>Returned value</h1>

![New1](https://user-images.githubusercontent.com/51449659/175254909-0527fc25-11d8-4c3b-8aac-01f03ce1b02d.jpg)

<h1>List of saved URLs</h1>

![List1](https://user-images.githubusercontent.com/51449659/175254930-d97cea33-0942-4084-adc8-25a87be45f5e.jpg)


<h1>Screen record of the app work flow</h1>

https://user-images.githubusercontent.com/51449659/175254955-f348275b-5a86-49aa-8cf1-8ca2e07f276e.mp4

