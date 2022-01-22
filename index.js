const shareBtn = document.querySelector(".share-button");
const shareLinks = document.querySelector(".article-share-social");

const toggleShare = () => {
    shareLinks.classList.toggle("share-social-active");
}

shareBtn.addEventListener("click", toggleShare);