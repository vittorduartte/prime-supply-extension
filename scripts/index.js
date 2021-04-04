const skipTheOpening = () => {
    const skipButton = window.document.querySelector('.skipElement');
    if(skipButton) {
        skipButton.click();
    } else {
        return false;
    }
}

const forwardToNextChapter = () => {
    const forwardButton = window.document.querySelector('.nextUpCard');
    if(forwardButton) {
        forwardButton.click();
    } else {
        return false;
    }
}

setInterval(() => {
    skipTheOpening();
    forwardToNextChapter();
}, 1000);