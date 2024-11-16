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