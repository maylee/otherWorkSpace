var express = require('express');
var app = express();
const port = 3000

//하위 모듈
const productRoutes = require("./apt/routes/products");
const orderRoutes = require("./apt/routes/orders");

app.use('/orders', orderRoutes);
app.use('/products', productRoutes);




// 시작 메시지
console.log('Server start!!!!');

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log("Example app listening on port"));

 
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});
     
app.get('/', function (req, res) {
    res.send('root');
});

