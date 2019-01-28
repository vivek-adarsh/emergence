const express = require('express')
const mongoose = require('mongoose')
const next = require('next')
const bodyParser = require('body-parser')

//Configure ports
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production'
const db = mongoose.connect('mongodb://localhost:27017/emergence')


//Setup Next.js server
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
nextApp.prepare().then(() => {

  const app = express()
  app.use(bodyParser.json({limit: '50mb', extended: true}))
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

  //For API calls
  app.use('/api', require('./routes'))

  // For all other requests
  app.get('*', (req,res) => {
    return handle(req,res)
  })

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`)
  })
})