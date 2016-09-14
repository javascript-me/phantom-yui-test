var YUITest = require('yuitest');

YUITest.Assert.areEqual(1, 2);

var testCase = new YUITest.TestCase({

    name: "TestCase Name",

    'do something' : function () {
        YUITest.Assert.areEqual(3 == 5, "The value should be five.");
        YUITest.Assert.areEqual(true, "Flag should be true.");
    }
});

YUITest.TestRunner.add(testCase);