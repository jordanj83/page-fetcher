const fs = require("fs");
const url = process.argv[2];
console.log(url);
const fileName = process.argv[3];
console.log(fileName);
console.log(process.argv);

process.argv;

const request = require("request");
request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(fileName, body, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  
});

const content = "Some content!";

//once we have a valid body, we use Fs package

//npm init creates a pckage .jsonfile that keeps track of dependent packages locally
//npm install request needed
