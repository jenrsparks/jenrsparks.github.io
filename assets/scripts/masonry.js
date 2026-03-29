function resizeMasonryItem(item) {
    const grid = item.closest('.masonry-grid');
    if (!grid) return;

    const style = window.getComputedStyle(grid);

    // Use row-gap specifically, and fall back to 16 (1rem) if it fails
    const rowGap = parseInt(style.getPropertyValue('row-gap')) || 16;
    const rowHeight = parseInt(style.getPropertyValue('grid-auto-rows')) || 10;

    // scrollHeight measures the content (img + text) even if the div is squashed
    const contentHeight = item.scrollHeight;

    // Calculate the span
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));

    item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllMasonryItems() {
    const allItems = document.querySelectorAll('.masonry-item');
    allItems.forEach(item => {
        const img = item.querySelector('img');

        // If image is already in cache/loaded
        if (img.complete) {
            resizeMasonryItem(item);
        } else {
            // Wait for it to load to get the real height
            img.addEventListener('load', () => {
                resizeMasonryItem(item);
            });
        }
    });
}

// Standard events
window.addEventListener('load', resizeAllMasonryItems);
window.addEventListener('resize', resizeAllMasonryItems);

// Safety: Run again after a short delay in case of font-loading shifts
setTimeout(resizeAllMasonryItems, 500);
