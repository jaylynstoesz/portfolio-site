var express = require('express')
var router = express.Router()
var lib = require('../lib/projects')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jaylyn Stoesz' })
})

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Jaylyn Stoesz' })
})

router.get('/projects/:projectId', function (req, res, next) {
  var project = lib.projects[req.params.projectId]
  res.render('project', { title: 'Jaylyn Stoesz', project: project })
})

module.exports = router;
