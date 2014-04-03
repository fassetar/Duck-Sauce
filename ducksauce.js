var fs = require("fs");
//http://stackoverflow.com/a/13543706/1265036
var fileName = __dirname +'\\Example.txt';
// fs.readFile(fileName, { encoding: "utf8", flag: 'r'}, function (err, data) {
			// if (err) throw err;
		// console.log(data);
		// fs.close(fileName);
	// });
fs.watch(fileName,{presistent:true, interval: 10},  function (event, filename) { 
		fs.readFile(fileName, { encoding: "utf8", flag: 'r'}, function (err, data) {
			if (err) throw err;
		console.log(data);
		//fs.close(fileName);
	});
});
		
//Resources:
//Travis Build Test: http://stackoverflow.com/a/15734041/1265036