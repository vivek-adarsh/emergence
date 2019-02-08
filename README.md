# Install
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and run `sudo npm i -g gatsby-cli`. This installs [Gatsby](https://www.gatsbyjs.org/) command line tools. 

Next to setup the database we need to install [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/).


Then **navigate into this project folder**. There, run `npm install` to install all required dependencies.


---
# Development Build
The development build is unoptimized and ideal for testing new features and hunting down bugs. The server tracks file changes and forces a refresh in the browser when a change has been detected.

To run the development mode run:
<br/>`npm run startDB`
<br/>`npm run dev`


Visit [localhost:8000](http://localhost:8000) to see the running application.
You can also go to [localhost:8000/___graphql](http://localhost:8000/___graphql) to query the data using the __graphql interface



# Production Build
The production build, compacts the files and bundles them for speed. Use this mode for deploying the application. 

To run the production database and server run:
<br/>`npm run startDB`
<br/>`npm run build`
<br/>`npm run start`

You will first need to start the DB (the *startDB* script is for convenience only, feel free to start a MongoDB database in any way that work for you). Next run the *build* script once, and spin up as many instances as needed using the *start* command

Visit [localhost:9000](http://localhost:9000) to see the running application.


---  
# Test Mapping
To generate some sample layers, start MongoDb then run 
<br/> `node plugins/testMapData.js`

---  
#Directory Structure
 ![grey](https://placehold.it/15/d1cfce/?text=+) **.cache/** ephemeral folder that caches code for fast development <br/>
 ![orange](https://placehold.it/15/de891b/?text=+) **db_data/** contains MongoDB Data<br/>
![orange](https://placehold.it/15/de891b/?text=+) **db_logs/** contains MongoDB error logs <br/>
![grey](https://placehold.it/15/d1cfce/?text=+) **node_modules/** local nodeJS modules generated by the *npm install* command <br/>
![green](https://placehold.it/15/38b818/?text=+) **plugins/** collection of various scripts used by the app, including scripts to load various data types into mongo db<br/>
![grey](https://placehold.it/15/d1cfce/?text=+) **public/** generated by the *build* command <br/>
![blue](https://placehold.it/15/1da5e0/?text=+) **src/** All the pieces of the web app that are compiled into a static web page <br/>

![blue](https://placehold.it/15/1da5e0/?text=+) **static/** All the pieces of the webpage that are untouched by the compiler and imported as is <br/>





