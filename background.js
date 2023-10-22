chrome.webNavigation.onBeforeNavigate.addListener(
    (details) => {
      const url = new URL(details.url);
      if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
        const videoId = url.searchParams.get("v");
        if (videoId) {
          const newUrl = `https://piped.yt/watch?v=${videoId}`;
          chrome.tabs.update(details.tabId, { url: newUrl });
        }
      }
    },
    { url: [{ urlMatches: "https://www.youtube.com/watch*" }] }
  );
  