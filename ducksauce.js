var fs = require("fs");
var fileName = 'Example.txt';
fs.readFile(fileName, { encoding: "utf8", flag: 'r'}, function (err, data) {
			if (err) throw err;
		console.log(data);
		fs.close(fileName);
	});
fs.watch(fileName,{presistent:true, interval: 10},  function (event, filename) { 
		fs.readFile(fileName, { encoding: "utf8", flag: 'r'}, function (err, data) {
			if (err) throw err;
		console.log(data);
		fs.close(fileName);
	});
		
});