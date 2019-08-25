var mongo = require('mongodb');

var dbObj = {};

dbObj.getConnection = function(cb) {
  var mongoClient = mongo.MongoClient;
  debugger;
  var url = "mongodb+srv://ganesh:ganesh@os-eovl8.mongodb.net/test?retryWrites=true";
  mongoClient.connect(
    url,
    function(err, client) {
      debugger;
      var dbObj = client.db('os');
      cb(dbObj);
    }
  );
};

module.exports = dbObj;
