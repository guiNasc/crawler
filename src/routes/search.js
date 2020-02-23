const express = require('express');
const search = require('../service/search')
const router = express.Router();

router.post('/', (req, res) => {
    const {user} = req.body;
    search.find().then((rooms) => {
        res.send(rooms);
    });
    
});

module.exports = router;