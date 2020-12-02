var express = require('express');
var router = express.Router();
var db_config = require('./dbconfig');
var conn = db_config.init();

/* GET home page. */

router.get('/:categoryId',(request, response) => {
    id = request.params.categoryId;
    // db 에서 데이터 조회한 뒤 json으로 반환
    response.json({categoryId:id})
})

router.get('/', function(req, res, next) {
  conn.query('SELECT * FROM category', function(err, results, fields) {
    if (err) {
      console.log(err);
      conn.end();
    }
    console.log(results);
    conn.end();
  });
  

  res.json({title: 'Express' });
});

module.exports = router;
