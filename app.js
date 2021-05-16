 const express = require("express");
 const app = express()

// app.use((req, res) => {
//console.log("I got a new request!")
  //res.send('<h1>This is a response rendered with HTML</h1>')}) 

app.get('/', (req, res) => {
    res.send('<h1> Home page </h1>')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params
    res.send(`Welcome to the subreddit about ${subreddit}`)
})


app.get('/cats', (req, res) => {
    res.send('meow')
})

app.get('/dogs', (req, res) => {
    res.send('woof')
})

 app.listen(3000, () => {
     console.log('Listening on port 3000!')
 })