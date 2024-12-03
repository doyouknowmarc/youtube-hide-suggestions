function hideSuggestions() {
    const suggestionElements = [
      // Versuch verschiedene Selektoren
      document.querySelector('#related'),
      document.querySelector('#secondary'),
      document.querySelector('#contents'),
      document.querySelector('#comments'),
      document.querySelector('.ytd-watch-next-secondary-results-renderer'),
      document.querySelector('.ytd-watch-next-secondary-results-renderer')
    ];
  
    suggestionElements.forEach(element => {
      if (element) {
        element.style.display = 'none';
      }
    });
  }
  
  // Überprüfe, ob das YouTube-Element geladen ist (nachdem die Seite komplett geladen wurde)
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        hideSuggestions();
      }
    });
  });
  
  
  // Beobachte Veränderungen im DOM (dynamische Updates von YouTube)
  const targetNode = document.body;
  const config = { childList: true, subtree: true };
  observer.observe(targetNode, config);
  
  // Initialer Aufruf, falls Elemente bereits geladen sind
  hideSuggestions();