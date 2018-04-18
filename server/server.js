const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('listening on port', port);
});

app.get('/', function(req, res){
    res.send('happy wednesday');
});

const quotes_data = require('./quotes');
console.log(quotes_data);
