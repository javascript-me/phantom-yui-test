YUI({
    logInclude: {TestRunner: true}
}).use('test', 'sum', 'console', 'junit-xml-parser', function (Y) {

    var anthonyCase = new Y.Test.Case({
        name: "anthony case",
        testMe: function () {
            Y.Assert.areEqual(1, 1);
        }
    });

    Y.Test.Runner.add(anthonyCase);

    var sumTestCase = new Y.Test.Case({
        name: "sum test case",
        testIntSum: function () {
            Y.Assert.areEqual(4, Y.MySum(1, 3));
        },
        testStringSum: function () {
            Y.Assert.areEqual("Hello World", Y.MySum("Hello +++", "World"));
        }
    });

    Y.Test.Runner.add(sumTestCase);

    var yconsole = new Y.Console({
        newestOnTop: false,
        filters: {
            pass: true,
            fail: true
        }
    });

    yconsole.render('#testLogger');

    Y.Test.Runner.run();

});