// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {

    // Do NOT forget that the method is ASYNCHRONOUS
    chrome.tabs.query({
        active: true,               // Select active tabs
        lastFocusedWindow: true     // In the current window
    }, function(array_of_Tabs) {
      var div = document.createElement("div")
      var text = document.createTextNode(array_of_Tabs[0].url)
      div.appendChild(text)
      document.getElementById("container").appendChild(div)
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }