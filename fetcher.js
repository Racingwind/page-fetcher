const request = require('request');
const fs = require('fs');

const inputs = process.argv.slice(2);
const url = inputs[0];
const filePath = inputs[1];

request(url, (error, response, body) => {
  if (error) {
    throw err;
  }
  console.log("Page fetch status: ", response && response.statusCode);
  fs.writeFile(filePath, body, (err) => {
    if(err){
      throw err;
    }
    const fileLength = body.length
    console.log(`Downloaded and saved ${fileLength} to ${filePath}`);
  });
});