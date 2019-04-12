# Install
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Next to setup the database we need to install [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/).

Then **navigate into this project folder**. There, run `npm install` to install all required dependencies.

---
# Development Build
The development build is ideal for testing changes to the app. The server tracks file changes and forces a refresh in the browser when a change has been detected.

To run the development mode run:
<br/>`npm run startDB`
<br/>`npm run dev`
<br/>
Visit [localhost:3000](http://localhost:3000) to see the running application.


# Production Build
The production build, compacts the files and bundles them for speed. Use this mode for deploying the application. 

To run the production database and server run:
<br/>`npm run startDB`
<br/>`npm run build`
<br/>`npm run start`

You will first need to start the DB (the *startDB* script is for convenience only, feel free to start a MongoDB database in any way that work for you). Next run the *build* script once, and spin up as many instances as needed using the *start* command

Visit [localhost:3000](http://localhost:3000) to see the running application.

---
# Test Mapping
To generate some sample layers, start MongoDb then run 
<br/> `node plugins/testMapData.js`

--
#Directory Structure
* *component/* reusable JSX page elements
* *data/* contains MongoDB Data
* *logs/* contains error logs (including MongoDB logs)
* *pages/* contains web pages. Adding a file here automatically adds a route.
* *plugins/* independant scripts to load data to MongoDB
* *server/* Runs API server that connects to MongoDB
* *static/* contains non minified files. These files are automatically served on web server
* *util/* additional non-component JS scripts
* *tes_data/* contains test data for LTE congestion
