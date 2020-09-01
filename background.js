function fn(x) {
  for (var header of x.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = "Mozilla/5.0 (X11; CrOS aarch64 13099.85.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.110 Safari/537.36";
    }
  }
  return { requestHeaders: x.requestHeaders };
}

chrome.webRequest.onBeforeSendHeaders.addListener(fn, { urls: ["*://*.geforcenow.com/*"] }, ["blocking", "requestHeaders"]);

chrome.browserAction.onClicked.addListener(function (e) {
  window.open("https://play.geforcenow.com/mall/", "_blank")
});