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
  async src="https://www.googletagmanager.com/gtag/js?id=G-7PR5X6MPV7"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-7PR5X6MPV7');
    

         async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7953644567210200"
     crossorigin="anonymous"
