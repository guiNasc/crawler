const express = require('express');
const search = require('../service/search')
const router = express.Router();

router.post('/', (req, res) => {
    const {checkin, checkout} = req.body;
    search.find(checkin, checkout).then((rooms) => {
        res.send(rooms);
    });
    
});

module.exports = router;