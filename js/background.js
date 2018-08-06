// Listen for a Message from PasswordBag
chrome.runtime.onMessage.addListener(function (msg, sender) {
    
        // Open new Tab with the given Url
        chrome.tabs.create({
            url: msg.url
        }, function(tab){
            
            // Add jQuery to the page
            chrome.tabs.executeScript(tab.id, {file: '/js/jquery-3.1.1.min.js'}, function(){
                
                // Add "credentials" object
                chrome.tabs.executeScript(tab.id, {code: 'var credentials = ' + JSON.stringify(msg) + ';'}, function(){
                    
                    // Add the script for Login
                    chrome.tabs.executeScript(tab.id, {file: '/js/login.js'});
                });
            });
        });
});