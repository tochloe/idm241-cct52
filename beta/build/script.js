// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const moreButton = document.getElementById('moreButton');
    const expandedContent = document.getElementById('expandedContent');
    const heartBtn = document.getElementById('heartBtn');
    const bookmarkBtn = document.getElementById('bookmarkBtn');

    // State variables
    let isExpanded = false;
    let heartClicked = false;
    let bookmarkClicked = false;

    // Toggle expand/collapse functionality
    moreButton.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            // Show expanded content
            expandedContent.classList.add('show');
            // Hide the more button
            moreButton.classList.add('hidden');
        } else {
            // Hide expanded content
            expandedContent.classList.remove('show');
            // Show the more button
            moreButton.classList.remove('hidden');
        }
    });

    // Heart button click handler
    heartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        heartClicked = !heartClicked;
        
        if (heartClicked) {
            heartBtn.classList.add('clicked');
        } else {
            heartBtn.classList.remove('clicked');
        }
    });

    // Bookmark button click handler
    bookmarkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        bookmarkClicked = !bookmarkClicked;
        
        if (bookmarkClicked) {
            bookmarkBtn.classList.add('clicked');
        } else {
            bookmarkBtn.classList.remove('clicked');
        }
    });

    // Prevent hover effect when button is clicked
    heartBtn.addEventListener('mouseenter', function() {
        if (!heartClicked) {
            // Hover effect is handled by CSS
        }
    });

    bookmarkBtn.addEventListener('mouseenter', function() {
        if (!bookmarkClicked) {
            // Hover effect is handled by CSS
        }
    });
});
