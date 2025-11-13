// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const moreButton = document.getElementById('moreButton');
    const expandedContent = document.getElementById('expandedContent');
    const heartBtn = document.getElementById('heartBtn');
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const commentBtn = document.getElementById('commentBtn');
    const commentSection = document.getElementById('commentSection');
    const commentInput = document.getElementById('commentInput');

    // State variables
    let isExpanded = false;
    let heartClicked = false;
    let bookmarkClicked = false;
    let commentClicked = false;

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

 seeLessButton.addEventListener('click', function() {
        isExpanded = false;
        // Hide expanded content
        expandedContent.classList.remove('show');
        // Show the more button
        moreButton.classList.remove('hidden');
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

    // Comment button click handler
    commentBtn.addEventListener('click', function(e) {
        e.preventDefault();
        commentClicked = !commentClicked;
        
        if (commentClicked) {
            commentBtn.classList.add('clicked');
            commentSection.classList.add('show');
            commentInput.focus();
        } else {
            commentBtn.classList.remove('clicked');
            commentSection.classList.remove('show');
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

    commentBtn.addEventListener('mouseenter', function() {
        if (!commentClicked) {
            // Hover effect is handled by CSS
        }
    });
});