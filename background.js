// When the active tab changes, start adding time to that tab's website
// and update the time change to the storage of the previous tab

// Time spent on site today
// Total time per day?

// Extra Features
// Add counter to site visited?
//          Check when a new tab is created or the current tab URL changes

// JS is pass by value

// When you first install the extension vs when you turn it on/off?

var activeTab;
var activeTabURL;
var URLtime;

/** Updates the active tab once there is a change. */
function updateTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tab){
        var activeTab = tab[0];
        if (activeTab == null) {
            activeTabURL = null;
        } else {
            var newTabURL = getURL(activeTab.url);
            if (newTabURL != activeTabURL) {
                updateStorage(activeTabURL, urlTime); // Will this affect activeTabURL that's passed in?
                activeTabURL = newTabURL;
                urlTime = 0;
            }
        }
    });
}

/** Updates the time spent on the current URL by 1s. */
function incrTime() {
    URLtime++;
}

/** Updates the time of the URL in storage. */
function updateStorage(url, time) {
    if (url != null) {
        chrome.storage.sync.get("totalTime", function(totalVal) {
            chrome.storage.sync.get(url, function(value) {
                if (value == null) {
                    chrome.storage.sync.set({url : time, "totalTime" : totalVal["totalTime"] + time}, function(){});
                } else {
                    time += value[url];
                    chrome.storage.sync.set({url : time, "totalTime" : totalVal["totalTime"] + time}, function(){});
                }
            });
        });
    }
}

/** Initializes listeners and counter when the browser opens. */
function startUp() {
    // increments time every second
    var sessionID = window.setInterval(function() {incrTime()}, 1000);
    createListeners();
}

/** Stops the counter when all windows close. */
function exit() {
    // Run when all windows close
    clearInterval(sessionID);
}


/** Returns the raw domain name of the URL of the tab. */
function getURL(url) {
    // extract raw domain name here
}

// Create multiple tabs at once?
// Multiple tabs of the same website?

function createListeners() {
    // When a tab is updated
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
        updateTab();
    });

    // When the active tab changes to another tab
    chrome.tabs.onActivated.addListener(function(activeInfo){
        updateTab();
    });

    // Activates when you focus on a new window
    chrome.windows.onFocusChanged.addListener(function(windowId) {
        updateTab();
    });
}

// Fired when the extension is first installed
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({"totalTime" : 0}, function(){});
});





// When a tab is created
chrome.tabs.onCreated.addListener(function(){

});

// Actives when a new window is created
chrome.windows.onCreated.addListener(function() {

});

// Activates when you close a window
chrome.windows.onRemoved.addListener(function() {

});

// Gets the window that was last focused on
chrome.windows.getLastFocused(object getInfo, function() {

});
