const express = require('express');
const router = express.Router();

router.get('/friends', (req, res) => {
  res.end('friens api');
})

router.post('/friends', (req, res) => {
  console.log(req.body);
  res.end('done');
})

module.exports = router;