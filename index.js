// http://nodebeginner.org/
// Requiring its file and assigning it to a variable
// its exported functions become available
var server = require("./server");
var router = require("./router");

// Inject the route function of our router into the server
server.start(router.route);
