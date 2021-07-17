// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(null, {file: "popup.js"});
// });

chrome.action.onClicked.addListener((tab) => {

  chrome.scripting.executeScript(
    {
      target: {tabId: tab.id},
      files: ['popup.js'],
    });

  chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
  }, function(array_of_Tabs) {
    chrome.tabs.sendMessage(tab.id, array_of_Tabs[0].url);
  });
});