 const express = require("express");
 const app = express()

app.use(() => {
    console.log("I got a new request!")
})

 app.listen(3000, () => {
     console.log('Listening on port 8080!')
 })