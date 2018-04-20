const express = require('express'); //connects to node express
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000; //5000 is the port. It can be any number. Commomly used numbers are 3000 or 5000.

const quotes_data = require('./quotes');

app.use(express.static('server/public')); // line to connect server to public files
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/quotes', (req, res) => {
    const randomNumber = Math.floor(Math.random() * quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

app.get('/all-quotes', (req, res) => {
    res.send(quotes_data);
});

//app.get('/', (req, res) => {
//res.send('happy wednesday');
//});

app.post('/add-quote', (req, res) => {
    console.log(req.body);
    quotes_data.push(req.body); // push is for arrays
    res.sendStatus(200); //status quotes)

});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});



