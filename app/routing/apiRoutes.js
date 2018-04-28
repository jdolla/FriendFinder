const express = require('express');
const router = express.Router();

var friends = require('../data/friends');

router.get('/friends', (req, res) => {
  res.json(friends);
})

router.post('/friends', (req, res) => {
  console.log(req.body);
  res.end('done');
})

module.exports = router;