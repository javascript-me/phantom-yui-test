var page = new WebPage();

page.onConsoleMessage = function (msg) {
    console.log(msg);
    phantom.exit(0);
};

var system = require('system');
var args = system.args;

console.log("=============================================================================================");
console.log("fileName from command line arguments (args[1] or use default name \"sumTests.html\"): " + args[1]);
console.log("=============================================================================================");

var fileName = args[1] ? args[1] : "sumTests.html";

page.open(fileName, function (status) {

    if (status !== "success")
    {
        console.log("unable to load file");
        phantom.exit(1);
    }
});