YUI().add('junit-xml-parser', function (Y) {
    if (typeof(console) !== 'undefined')
    {
        Y.Test.Runner.subscribe(Y.Test.Runner.COMPLETE_EVENT, function (obj) {
            console.log(Y.Test.Format.JUnitXML(obj.results));
        });
    }
})