var express = require('express');
var app = express();
const port = 3000

// 시작 메시지
console.log('Server start!!!');

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});
   
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});
     
app.get('/', function (req, res) {
    res.send('root');
});

