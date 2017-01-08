
/*
 * GET home page.
 */

var vd = require('../videodata.json');

exports.index = function(req, res, next){
  res.render('index', { 
	  title: 'Express',
	  name: 'Bucky', 
	  videodata: vd 
  });
};

module.exports = router;