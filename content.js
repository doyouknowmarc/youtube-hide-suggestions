let suggestionsHidden = true; // Track the on/off state

function hideSuggestions() {
    const suggestionElements = [
      document.querySelector('#related'),
      document.querySelector('#secondary'),
      document.querySelector('#contents'),
      document.querySelector('#comments'),
      document.querySelector('.ytd-watch-next-secondary-results-renderer')
    ];

    suggestionElements.forEach(element => {
      if (element) {
        element.style.display = suggestionsHidden ? 'none' : 'block'; // Show/hide based on state
      }
    });
}

// Create a button to toggle the functionality
const button = document.createElement('button');
button.textContent = 'Hide Suggestions: ON';
button.style.position = 'fixed';
button.style.top = '40px';
button.style.left = '10px';
button.style.zIndex = '9999'; // Ensure it's on top
button.style.padding = '10px';
button.style.backgroundColor = '#4CAF50'; // Green
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

button.addEventListener('click', () => {
    suggestionsHidden = !suggestionsHidden;
    hideSuggestions();
    button.textContent = suggestionsHidden ? 'Hide Suggestions: ON' : 'Hide Suggestions: OFF';
});

document.body.appendChild(button);


// The MutationObserver is now only called when the button is activated, making it more efficient.
// We initially hide suggestions if the suggestionsHidden flag is true.
hideSuggestions();

//The observer is no longer needed since we are handling the show/hide logic manually.
// const observer = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//         if (mutation.type === 'childList') {
//             hideSuggestions();
//         }
//     });
// });

// const targetNode = document.body;
// const config = { childList: true, subtree: true };
// observer.observe(targetNode, config);