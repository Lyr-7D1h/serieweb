var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  //req.flash('success_msg', 'test');
  console.log('Loaded index');
});

router.get('/terms', function(req,res) {
  res.render('terms');
});

router.post('/login', function(req,res) {
  console.log(req.body);
  req.flash('success_msg', 'test');
});

router.post('/register', function(req,res) {
  console.log(req.body);

  req.flash('success_msg', 'it worked');
  res.redirect('/terms');
});




router.get('/flash', function(req, res){
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('success_msg', 'Registration successfully');
});
module.exports = router;
