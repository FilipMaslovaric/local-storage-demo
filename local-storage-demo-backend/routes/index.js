var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.visits) {
    req.session.visits = 0;
  };
  req.session.visits++;
  res.send(`You've been here ${req.session.visits} times`);
});

module.exports = router;
