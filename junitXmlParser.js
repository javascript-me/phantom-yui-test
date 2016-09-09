YUI().add('junit-xml-parser', function (Y) {

    new Y.Console().on("entry", function (obj) {
        console.log(JSON.stringify(obj.message));
        console.log("-------------------------")
    });

    if (typeof(console) !== 'undefined')
    {
        Y.Test.Runner.subscribe(Y.Test.Runner.COMPLETE_EVENT, function (obj) {
            console.log(Y.Test.Format.JUnitXML(obj.results));
        });
    }
});