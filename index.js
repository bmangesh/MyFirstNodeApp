//Load express module with `require` directive
var express = require('express')
var app = express()
//var ip = require("ip");
//console.dir ( ip.address() );

var os = require( 'os' );

var networkInterfaces = os.networkInterfaces( );

//console.log( networkInterfaces );

var os = require("os");
var hostname = os.hostname();

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Server Host Name  '+hostname)
})


//Launch listening server on port 8082
app.listen(8082, function () {
  console.log('app listening on port 8082!')
})
