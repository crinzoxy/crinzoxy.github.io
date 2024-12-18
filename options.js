let timeoutId;

document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) { // Check if text is selected
        if (timeoutId) {
            clearTimeout(timeoutId); // Clear previous timeout if it exists
        }
        timeoutId = setTimeout(() => {
            // Clear selection after 4 seconds
            selection.removeAllRanges();
        }, 4000); // 4000 milliseconds = 4 seconds
    }
});
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "crinzoxy",
  "url": "https://crinzoxy.github.io",
  "sameAs": [
    "https://www.linkedin.com/in/crinzoxy",
    "https://x.com/crinzoxy"
  ]
}
