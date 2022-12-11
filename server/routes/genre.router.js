const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// I did a more complicated query on the other router 
// that included the genres for each movie in a single query
// so I do not need this router
router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

module.exports = router;