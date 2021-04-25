chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ "byte":0});
  });