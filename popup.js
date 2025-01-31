document.getElementById("clearCacheBtn").addEventListener("click", () => {
    // Remove cache data since the beginning of time (0)
    chrome.browsingData.remove(
      { since: 0 },
      { cache: true },
      () => {
        // Callback after clearing cache
        alert("Cache cleared successfully!");
      }
    );
  });
  