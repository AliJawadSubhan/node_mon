// console.warn("Hello boys")
// const i = true;
// const u = true;
// if (i === u) {
//     console.log("This works");
// }
// const data = require('../node-tuts2/data-api')
// const data = require('./data-api');
// const http = require("http");
// const { json } = require("stream/consumers");
// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     const jsonData = JSON.stringify({ status: "success", data: data })
//     response.write(jsonData);
//     response.end();
// }).listen(8000);
// const arguments = process.argv;
// const
// console.log(process.argv);
const fs = require("fs");
const path = require("path");
// path.basename;
const dirPath = path.join(__dirname, "files");
console.log(dirPath);
for (let index = 0; index < 52; index++) {

    fs.unlinkSync(dirPath + "/jawad" + index + ".txt");

}
// fs.readdir(dirPath, (err, files) => {
//     console.log(files[0]);
// });

// fs.writeFileSync("apple.txt", "Node is boring.");