var express = require('express');
var router = express.Router();
var db_config = require('./dbconfig');
var conn = db_config.init();

/* GET home page. */

router.get('/:categoryId',(request, response) => {
    id = request.params.categoryId;
    console.log(id);
    sql = 'SELECT * FROM question WHERE categoryId = '+id;
    conn = db_config.init();
    conn.query( sql, function(err, results, fields) {
      if (err) {
        console.log(err);
        conn.end();
        response.json({error:err});
      }
      console.log(results);
      conn.end();
      response.json(results);
    });
    // db 에서 데이터 조회한 뒤 json으로 반환
})

router.get('/', function(req, res, next) {
  conn = db_config.init();
  conn.query('SELECT * FROM category', function(err, results, fields) {
    if (err) {
      console.log(err);
      conn.end();
      res.json({error:err});
    }
    console.log(results);
    conn.end();
    res.json(results);
  });
  

  //res.json({title: 'Express' });
});

module.exports = router;
