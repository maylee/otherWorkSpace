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




app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// 에러 메시지 처리  
  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => { 
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    });

});