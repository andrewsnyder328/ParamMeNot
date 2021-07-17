chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  //TODO parse url params and add them to a container
  // alert(message)

  let container = document.createElement('div');
  container.style = "all: unset"
  container.style.position = "fixed";
  container.style.width = "100vw";
  container.style.zIndex = "9999";
  container.style.top = 0;
  container.style.backgroundColor = "#ffffff";
  container.style.padding = "24px"
  container.class = "container"
  container.style.boxShadow = "4px 4px 4px grey"

  let query=message.split(/\?(.+)/)[1]
  let params= query.split('&')
  
  for (i = 0; i < params.length; i++) {
    let div = document.createElement('div')
    div.style.padding = "0px"
    div.style = "all: unset"
    div.style.display = "block"
    div.innerText = params[i]
    div.style.fontSize = "medium"
    div.style.fontFamily = "sans-serif"
    container.appendChild(div) 
  }

  document.body.appendChild(container)
});