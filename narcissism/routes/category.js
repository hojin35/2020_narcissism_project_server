var express = require('express');
const { request, response } = require('../../../../../Desktop/서버 실험/myapp/app');
var router = express.Router();

/* GET home page. */

router.get('/:categoryId',(request, response) => {
    id = request.params.categoryId;
    // db 에서 데이터 조회한 뒤 json으로 반환
    response.json({categoryId:id})
})

router.get('/', function(req, res, next) {
  // db 에서 데이터 조회한 뒤 json으로 반환
  res.json({ title: 'Express' });
});

module.exports = router;
