const mongoClient = require("mongodb").MongoClient;
const state = {
  db: null,
};
module.exports.connect = function (done) {
  const url ='mongodb://0.0.0.0:27017/' 
  const dbname = "HrManagment";
try
{
    mongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
        if (err) return done(err);
        state.db = data.db(dbname);
        done();
      }); 
}catch(err){
    throw err
}
  

};

module.exports.get = function () {
  return state.db;
};
