var fs = require("fs");
//http://stackoverflow.com/a/13543706/1265036
var fileName = __dirname +'\\Example.txt';
console.log(fileName);
// fs.readFile(fileName, { encoding: "utf8", flag: 'r'}, function (err, data) {
			// if (err) throw err;
		// console.log(data);
		// fs.close(fileName);
	// });
// fs.watch(fileName,{presistent:true, interval: 10},  function (event, filename) { 
		// fs.readFile(fileName, { encoding: "utf8", flag: 'r'}, function (err, data) {
			// if (err) throw err;
		// console.log(data);
		// //fs.close(fileName);
	// });
// });
		
//Resources:
//Travis Build Test: http://stackoverflow.com/a/15734041/1265036
//Default "npm test", changed to "node ducksauce.js" http://docs.travis-ci.com/user/languages/javascript-with-nodejs/
//This is just until I have the core down and have actually code to test.