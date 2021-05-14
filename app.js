 const express = require("express");
 const app = express()

app.use((req, res) => {
    console.log("I got a new request!")
    res.send('<h1>This is a response rendered with HTML</h1>')
})

 app.listen(3000, () => {
     console.log('Listening on port 3000!')
 })