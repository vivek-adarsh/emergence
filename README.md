# Install
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Next to setup the database we need to install [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/).

Then **navigate into this project folder**. There, run `npm install` to install all required dependencies.

---
# Development Build
To develop run
`npm startDB`
`npm dev`
Visit [localhost:3000](http://localhost:3000) to see the running application.


# Production Build
To run the production database and server run
`npm build`
`npm startDB`
`npm start`
Visit [localhost:3000](http://localhost:3000) to see the running application.



---
# Test Mapping
To generate some sample layers, start MongoDb then run 
`node plugins/testMapData.js`

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
