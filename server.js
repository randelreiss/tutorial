// An HTTP server with a callback function
// that is called for each request.
// In the callback function, you create a response
// with a status code of 200 (indicating that the request
// was fulfilled successfully) and the message "Hello World".
// Finally, you specify which port the server listens to.
// When Node.js projects run within Cloud 9 IDE,
// you can retrieve the port information with process.env.PORT

var appName = String("Randel's Tutorial");
var appVersion = String("0.0");
var appCopyright = String("2011, ALL RIGHTS RESERVED");

// Name of the module for the name of the local variable
var localHTTP = require('http');
var localURL = require("url");

// Extend server's start() function to pass the route function 
function start(route) {
    function onRequest(req, res) {
        // server code
        console.log("Request Received");

        var pathname = localURL.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        route(pathname);

        switch (pathname) {
            case '/':

            res.writeHead(200, {'Content-Type': 'text/plain'});
            appId(res);
            res.end('res.end\n');
            break;

        default:
            fourZeroFour(res);

        }
    }

    var server = localHTTP.createServer(onRequest);

    if (process.env.PORT === undefined) {
        console.log('Running locally; browse to http://localhost:8888/\n');
        server.listen(8888, '127.0.0.1');
    } else { // Running on c9.io.
        server.listen(process.env.PORT, '0.0.0.0');
        console.log("Server has started.");
        console.log("Listning on port: " + process.env.PORT);
    }
}

// Export this function
exports.start = start;

function appId(res) {
    res.write("Welcome to " + appName + "\n");
    res.write("Version: " + appVersion + "\n");
    res.write("Copyright " + appCopyright + "\n");
}

function fourZeroFour(res) {
    res.writehead(404);
    res.write("Yeah, baby, where saying: 404 Not found./n");
    res.end("res.end\n");
}

