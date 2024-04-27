chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: () => {
        // Perform actions on the page when clicked
        // Example: document.getElementById('yourElementId').click();
      }
    });
  });
  