var YUITest = require("yuitest");

var testCase = new YUITest.TestCase({

    name: "TestCase Name",

    testUsingAsserts : function () {
        YUITest.Assert(value == 5, "The value should be five.");
        YUITest.Assert(flag, "Flag should be true.");
    }
});
