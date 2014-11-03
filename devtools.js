var panels = chrome.devtools.panels;

var ducksaucePanel = panels.create(
  "Ducksauce",
  "panel.html"
);

chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function (resource, content) {
//    //    console.log(resource);
//    //    //resource.url
//    //    //resource.type // 'script', 'stylesheet' or 'document' (happens when you edit inline JS or CSS)
//    //    //content // all the content of updated file as a string
//    //chrome.extension.sendRequest("Worked!");
    // get the inspected windows tab id from the panel    
    
    // create the port
    //var port = chrome.extension.connect({ name: 'connection' });
    
    //// keep track of the port and tab id on the background by
    //// sending the inspected windows tab id
    //port.postMessage(['connect', content]);        
    chrome.devtools.inspectedWindow.reload();
});
