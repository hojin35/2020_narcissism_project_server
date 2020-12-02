var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
    userinput = req.body.keyword;
    res.json({ method: 'POST', input: userinput });
});

module.exports = router;
