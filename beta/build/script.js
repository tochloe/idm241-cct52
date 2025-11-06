document.addEventListener('DOMContentLoaded', function() {
    
    const moreButton = document.getElementById('moreButton');
    const expandedContent = document.getElementById('expandedContent');
    const heartBtn = document.getElementById('heartBtn');
    const bookmarkBtn = document.getElementById('bookmarkBtn');

    // State variables
    let isExpanded = false;
    let heartClicked = false;
    let bookmarkClicked = false;

 
    moreButton.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            
            expandedContent.classList.add('show');
            
            moreButton.classList.add('hidden');
        } else {
            
            expandedContent.classList.remove('show');
            
            moreButton.classList.remove('hidden');
        }
    });

 
    heartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        heartClicked = !heartClicked;
        
        if (heartClicked) {
            heartBtn.classList.add('clicked');
        } else {
            heartBtn.classList.remove('clicked');
        }
    });

  
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
           
        }
    });

    bookmarkBtn.addEventListener('mouseenter', function() {
        if (!bookmarkClicked) {
            
        }
    });
});
