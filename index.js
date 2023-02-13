var http = require('http');
var dt = require('./atetimemodul');
var url = require('url');
var red = require('./readidmodul');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var redcontent = red.getId(req);
    res.end('hello');
  })
  .listen(8080);
