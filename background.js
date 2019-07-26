// Provide help text to the user.
browser.omnibox.setDefaultSuggestion({
  description: `Insert HTML snippet`
});

// Open the page based on how the user clicks on a suggestion.
browser.omnibox.onInputEntered.addListener((text, disposition) => {
  let blob = new Blob([text], { type: "text/html" });
  let url = URL.createObjectURL(blob);
  switch (disposition) {
    case "currentTab":
      browser.tabs.update({url});
      break;
    case "newForegroundTab":
      browser.tabs.create({url});
      break;
    case "newBackgroundTab":
      browser.tabs.create({url, active: false});
      break;
  }
});
