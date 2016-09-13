YUI().add('test-result-printer-for-phantom', function (Y) {

    // Print messages from YUI console.
    new Y.Console().on("entry", function (obj) {
        console.log(JSON.stringify(obj.message));
        console.log("-------------------------")
    });

    // Print test result xml.
    Y.Test.Runner.subscribe(Y.Test.Runner.COMPLETE_EVENT, function (obj) {
        console.log(Y.Test.Format.JUnitXML(obj.results));
    });

});