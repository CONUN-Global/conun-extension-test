chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  // console.log(
  //   sender.tab
  //     ? "from a content script:" + sender.tab.url
  //     : "from the extension"
  // );

  if (request.greeting == "hello") {
    sendResponse({ farewell: "goodbye" });
    const key = "myKey";
    chrome.storage.sync.set({ key: request.greeting });
  }
});
