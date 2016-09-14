# phantom-yui-test

### Run yui test in browser

    Open capture-unit-test-results-with-phantom.html

### Capture unit test results with phantom
    
    phantomjs capture-unit-test-results-with-phantom.js

### Run sample phantom commands

    phantomjs command/commandLineArguments.js a hello
    phantomjs command/printAnImage.js
    
### Run independent YUITest (Not working at all...). (https://github.com/yui/yuitest/wiki/Command-Line-Interface)
    
    npm install yuitest
    npm install -g yuitest
    yuitest test/independent/sample-test.js