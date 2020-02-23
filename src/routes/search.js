const express = require('express');
const search = require('../service/search')
const router = express.Router();

router.post('/', (req, res) => {
    const {checkIn, checkOut} = req.body;
    //res.send(`${checkIn} -> ${checkOut}`);
    search.find(checkIn, checkOut).then((rooms) => {
        res.send(rooms);
    });
    
});

module.exports = router;