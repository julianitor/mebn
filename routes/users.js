var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        if (e || !docs) {
        	return console.log(e);
        }
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

module.exports = router;
