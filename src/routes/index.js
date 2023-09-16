const router = require('express').Router();

router.get('/', (eq,res, next) => {

  res.send('helo word');



});



module.exports = router;