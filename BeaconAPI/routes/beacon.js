var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	connection.query('SELECT UUID, Major,Minor from beacon', function (error, results, fields) {
		if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
		res.send(JSON.stringify(results));}
	});
});
module.exports = router;
