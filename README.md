# Install
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and run `npm i gatsby-cli`. This installs [Gatsby](https://www.gatsbyjs.org/) command line tools. 

Then **navigate into this project folder**. There, run `npm install` to install all required dependencies.

To setup the backend server we need to install MongoDB and a REST interface for it.

First install [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/).

Then install [EVE](http://docs.python-eve.org) `pip install eve`

---
# Development Build
To develop run
`npm dev`
Visit [localhost:8000](http://localhost:9000) to see the running application.


# Production Build
To run the production database and server run
`npm build`
`npm startDB`
`npm startREST`
`npm start`
Visit [localhost:8080](http://localhost:9000) to see the running application.


