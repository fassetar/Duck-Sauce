var fs = require('fs');
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
				inspectFile(contents);				
			}); 
		});
});

function inspectFile(contents) {	
     //if (contents.indexOf('id') != -1) {
        console.log(contents);
     //}
}