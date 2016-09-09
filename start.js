var page = new WebPage();

page.onConsoleMessage = function (msg) {
    console.log(msg);

    setTimeout(function () {
        page.viewportSize = {width: 1024, height: 768};
        page.render("testResult.png");
        phantom.exit();
    }, 500);

};

page.open("sumTests.html", function (status) {
    if (status !== "success")
    {
        console.log("unable to load file");
        phantom.exit(1);
    }
});
