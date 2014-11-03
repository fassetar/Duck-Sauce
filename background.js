var activeListeners = {};

chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
        console.log(message[1]);
        if (message[0] === 'connect') {
            // get the tab id
            var tabId = message[1];
            
            // save the reference to the port
            activeListeners[tabId] = port;
            
            // make sure we clean up after disconnecting (closing the panel)
            activeListeners[tabId].onDisconnect.addListener(function () {
                delete activeListeners[tabId];
            });            
        }
    });
});