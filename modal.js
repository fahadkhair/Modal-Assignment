// Array of image paths
const imagePaths = ['images/others/1.jpg', 'images/others/2.jpg', 'images/others/3.jpg', 'images/others/4.png', 'images/others/5.jpg', 'images/others/6.jpg', 'images/others/7.png', 'images/others/8.jpg', 'images/others/9.jpg', 'images/others/10.jpg', 'images/others/11.jpg', 'images/others/12.jpg', 'images/others/13.jpg', 'images/others/14.png', 'images/others/15.jpg'];

// Function to display images in a single line
function displayImages() {
    const imageContainer = document.getElementById('image-container');
    let imagesHTML = '';

    imagePaths.forEach(path => {
        imagesHTML += `<img src="${path}" onclick="openImageModal('${path}')" style="width: 50px; height: auto; margin: 5px;">`;
    });

    imageContainer.innerHTML = imagesHTML;
}

// Function to open modal with clicked image and enlarge it
function openImageModal(path) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-btn');

    modalImg.src = path;
    modal.style.display = "block";
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    closeBtn.style.display = "block";

    // Move the clicked image to the top
    const imageContainer = document.getElementById('image-container');
    imageContainer.insertBefore(modalImg, imageContainer.firstChild);
}

function onClosedImagModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');

    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');

    setTimeout(() => {
        modal.style.display = "none";
        closeBtn.style.display = "none";
    }, 550);
}

// Call displayImages function to populate images
displayImages();