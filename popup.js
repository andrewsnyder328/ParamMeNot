chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  //TODO parse url params and add them to a container
  alert(message)
});