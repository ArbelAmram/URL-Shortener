# url_shortener

This is a URL Shortener Full stack application.</br>

Built with MERN stack: MongoDB, Express, ReactJs, NodeJs.

# How to run the project
1. `cd client`</br>
2. Install packages: </br>
     `npm i axios react-router-dom@5.0.0` </br>
3. `npm start` (run react app)</br>
4. Open a new terminal</br>
5. `cd server`</br>
6. Install packages:</br>
     `npm i express mongoose nodemon shortid cors valid-URL`</br>
7. `npm run devStart` (run and listen to express server using nodemon)</br>
    * script listed in server/package.json/scripts</br>

* optional issue: the db connection (server/index.js/row:10) Is possible by my credentials on mongoDB.</br> Make sure to create a new custom connection.</br> 

# How does the app work???
From the New page, we are presented with 2 input fields.</br>
When entering a valid URL, by clicking on 'Shortify' a unique ID will be created</br>
and appear in the second field. </br>
* If the URL is invalid an error message will appear instead.</br>

After successfully creating an ID for our original URL, by clicking on "save to Database" a short URL will be created</br>
and an instance will be added to the database with all the requested information.</br>
All of our reserved URL instances will appear in the table on the third page (tab 'List').</br>
From the list table, we will be able to delete or access the new URL which will redirect us to the original URL</br>
(using their common ID).</br>

# App View
![home screen](https://user-images.githubusercontent.com/51449659/187610456-c822c6f2-a56f-4baf-b2d4-da0653082f34.jpg)
![new screen](https://user-images.githubusercontent.com/51449659/187610499-3626de11-2b87-423e-a3ed-02a430a6bc97.jpg)
![list screen](https://user-images.githubusercontent.com/51449659/187610519-fb4c8a36-c9be-47d8-af08-3f9892a8ef71.jpg)

# Video Showcase
![url_shortener presentation.webm](https://user-images.githubusercontent.com/51449659/187651163-4c260ecd-ee31-4447-bec4-8464b4c67a40.webm)
