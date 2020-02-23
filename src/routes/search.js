const express = require('express');
const search = require('../service/search')
const router = express.Router();

router.post('/', (req, res) => {
    const {user} = req.body;
    search.find();
    res.send(`YO ${user.email}`);
});

module.exports = router;