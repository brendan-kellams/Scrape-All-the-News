var mongoose = require('mongoose');

// connection local server
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeallines";
// mongoose.connect(MONGODB_URI, function(err) {
//     if(err) throw err;
//     console.log('database connected')
// });

// mLab database connection for deployed app
mongoose.connect("mongodb://heroku_gs9dbdq3:ota7uv00dl28ue13crcs4n0k9q@ds151207.mlab.com:51207/heroku_gs9dbdq3", function(err) {
    if(err) throw err;
    console.log('database connected')
});