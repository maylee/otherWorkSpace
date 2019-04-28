const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.status(200).json({
        message : "Get /Orders111"
    });
    console.log('Router On - Orders');
});


// get으로 받은 주문번호를 판단
router.get('/:orderId', (req, res) => {
    
    const id = req.params.orderId;
    if( id !== '1234' ){
        res.status(200).json({
            message : "worng"
        });    
    } else {
        res.status(200).json({
            message : "right id",
            id : id
        });

    };
});



module.exports = router;

