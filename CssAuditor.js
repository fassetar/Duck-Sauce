var fs = require('fs');
//http://stackoverflow.com/a/6960795
var path ='path';
fs.readdir(path, function(err, files) {	
    files.filter(function(file) { 		
		if(!fs.lstatSync(path+"/"+file).isDirectory()) 
			return file.substr(-7) === '.cshtml'; 
		else {
			
		}
	}).forEach(function(file) {	
			console.log(file);
			fs.readFile(file, 'utf-8', function(err, contents) { 				
				console.log(err);
				inspectFile(contents);				
			}); 
		});
});

function inspectFile(contents) {	
     //if (contents.indexOf('id') != -1) {
        console.log(contents);
     //}
}