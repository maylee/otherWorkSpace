const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message : "Get /Products"
    });
});

router.get('/:productId', (req, res) => 
{
    const id = req.params.productId;
    if( id === 'special' ) {
        res.status(200).json ({
            message: '스페셜 아이디',
            id : id 
        });
    } else {
        res.status(200).json({
            message: '그냥 아이디'
        });
    }
});


router.post('/', (req, res) => {
    const product = {
        name : req.body.name,
        price : req.body.price
    };
    res.status(200).json({
        message : "POST Products",
        createProducts : product
    });
});





module.exports = router;
