const skipTheOpening = () => {
    const skipButton = window.document.querySelector('.skipElement');
    if(skipButton) {
        skipButton.click();
    } else {
        return false;
    }
}

setInterval(() => {
    skipTheOpening();
    forwardToNextChapter();
}, 1000);