const fs = require('fs')
const { exec } = require('child_process')


console.log("Starting MongoDB")
if (!fs.existsSync("./data")){
  fs.mkdirSync("./data")
}
if (!fs.existsSync("./logs")){
  fs.mkdirSync("./logs")
}
const { stdout, stderr } =  exec('mongod --dbpath ./data --logpath ./logs/mongodb.log', (err, stdout, stderr) => {

    // the *entire* stdout and stderr (buffered)
    console.log(`${stdout}`);
    console.log(`${stderr}`);
})
