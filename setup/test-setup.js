function test (assertion) {
    if (assertion === true) {
        console.log(`%cTEST PASSED!`, `color:green`)   
    } else {
        console.log(`%cTEST FAILED`, `color:red`)   
    }
}

// https://stackoverflow.com/questions/13815640/a-proper-wrapper-for-console-log-with-correct-line-number