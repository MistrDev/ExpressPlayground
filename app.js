 const express = require("express");
 const app = express()


app.get('/', (req, res) => {
    res.send('<h1> Home page </h1>')
})

app.get('/cats', (req, res) => {
    res.send('meow')
})

app.get('/dogs', (req, res) => {
    res.send('woof')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params
    res.send(`Welcome to the subreddit about ${subreddit}`)
})


app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params
    res.send(`Welcome to post ID number ${postId} on the subreddit about ${subreddit}`)
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    if(!q){
        res.send('Nothing found if nothing searched dummy')
    }
    res.send(`Welcome to the page about ${q}`)
})


app.get('*', (req, res) => {
    res.send('I dont know that path bruh!')
})

 app.listen(3000, () => {
     console.log('Listening on port 3000!')
 })