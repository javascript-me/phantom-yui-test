var page = require('webpage').create();
page.open('http://www.sina.com.cn', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        page.render('command/example.png');
    }
    phantom.exit();
});