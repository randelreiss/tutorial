var appName = String("Randel's Tutorial");
var appVersion = String("0.0");
var appCopyright = String("2011, ALL RIGHTS RESERVED");

var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");

//  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write(stdout);
    appIdBanner(response);
    response.end('bye\n');
    console.log("response.end");
//    });
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

// Export these functions
exports.start = start;
exports.upload = upload;

function appIdBanner(response) {
    // Print Application Id banner
    console.log("Id banner");
    response.write("Welcome to " + appName + "\n");
    response.write("Version: " + appVersion + "\n");
    response.write("Copyright " + appCopyright + "\n");
}