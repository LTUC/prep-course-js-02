'use strict';
// 1. create a promise
// call resolve when I got what was promised
// call reject when I didn't got what was promised
// recordings example: records will uploaded in 30 min;
let recordingsStatus = false;


let records = new Promise((resolve, reject) => {
    if (recordingsStatus == true) {
        // resolve([{}])
        resolve("Records were uploaded");
    } else {
        reject("Records were not uploaded");
    }
});

// 2. Handle promise 
// promise.then().catch();
records
    .then((message) => {
        console.log(111111, message);
        console.log("Start watching Promises demo");

    })
    .catch((message) => {
        console.log(222222, message);
    })