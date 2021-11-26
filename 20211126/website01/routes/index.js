var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  let newfilename = uuidv4() + '.' + req.files.image.name.split('.')[1];
  let uploadPath = __dirname + '/../public/images/' + newfilename;

  req.files.image.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    // save iamge to database with the variable newfilename
    // code
    res.render('index', { title: 'Express' });
  });
});

router.post('/upload', function(req, res, next) {
  let newfilename = uuidv4() + '.' + req.files.image.name.split('.')[1];
  let uploadPath = __dirname + '/../public/images/' + newfilename;

  req.files.image.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    // save iamge to database with the variable newfilename
    // code
    res.send('{"status":"OK"}');
  });
});

module.exports = router;
