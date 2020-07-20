const express = require('express');
const bodyParser = require('body-parser');
const app=express();


app.listen(3000);

app.get('/', (req,res) => {
    res.sendFile('./views/index.html', { root:__dirname});
});

app.get('/about', (req,res) => {
    res.sendFile('./views/about.html', { root:__dirname});
});

/*app.post('/', (req, res) => {
    res.send('Got a POST request')
});*/

app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root:__dirname});
});


  