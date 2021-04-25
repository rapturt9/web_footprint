var semitotal = 0;
chrome.devtools.network.onRequestFinished.addListener(function (request) {
  semitotal += request.response._transferSize;
});

setInterval(() => {
  if (semitotal > 0) {
    //chrome.devtools.inspectedWindow.eval("console.log(" + semitotal + ")");
    chrome.storage.sync.get("byte", (data) => {
      chrome.storage.sync.set({ byte: data.byte + semitotal }, () => {
        semitotal = 0;
      });
    });
  }
}, 5000);
