var ducksaucePanel = chrome.devtools.panels.create(
  "Ducksauce",
  "panel.html"
);
//BUG: https://code.google.com/p/chromium/issues/detail?id=422405#makechanges
chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function (resource, content) {
		resource.setContent("TEST", true, function(){
			alert(content);	
		});	
		//TODO: Make this a button instead to opt-in!
		//chrome.devtools.inspectedWindow.reload();
});

//TODO: Another approach is to use the panel Source itself, have a button for auto jshint and format. 
