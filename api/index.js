//create express server
const express = require("express")
const app = express()
const port = 3000

//configure app to listen to port 3000
app.listen(port, () => {
   console.log(`App is listening at http://localhost:${port}/`)
})
//enable cors
const cors = require("cors")
app.use(cors())

//use body-parser middleware
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/whoami", (req, res) => {
   const ipaddress = req.ip
   const language = req.headers["accept-language"]
   const software = req.headers["user-agent"]

   res.send({
      ipaddress: ipaddress,
      language: language,
      software: software,
   })
})
