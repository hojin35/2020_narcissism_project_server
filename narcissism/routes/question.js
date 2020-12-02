var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:questionId',(request, response) => {
  id = request.params.questionId;
  // db 에서 데이터 조회한 뒤 json으로 반환
  response.json({questionId:id})
})

module.exports = router;
