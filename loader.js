var page = new WebPage();

page.viewportSize = {
    width: 1024,
    height: 768
};

page.onConsoleMessage = function (msg) {
    console.log(msg);

    setTimeout(function () {
        page.render("testResult.png");
        phantom.exit();
    }, 500);

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