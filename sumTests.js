YUI().use('test', 'sum', 'console', 'test-result-printer', 'test-console', function (Y) {

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
            Y.Assert.areEqual("Hello World", Y.MySum("Hello ", "World"));
        }
    });

    Y.Test.Runner.add(sumTestCase);

    //You can use "Y.Test.Console" (need to add 'test-console' in the first line of this file) or "Y.Console" here.
    (new Y.Console({
        newestOnTop : false,
        filters: {
            pass: true,
            fail: true
        }
    })).render('#testLogger');

    Y.Test.Runner.run();

});