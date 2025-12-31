// Mobile Menu Logic

const mobileBtn = document.querySelector("#mobile-menu-button");
const nav = document.querySelector("nav");

mobileBtn.addEventListener("click", toggleMenu);

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
  });

document.body.addEventListener("click", (e) => {
    if (nav.classList.contains("active") && !nav.contains(e.target)) {
        toggleMenu(e);
    }
});

function toggleMenu(e) {
    e.stopPropagation();
    nav.classList.toggle("active");
    mobileBtn.classList.toggle("clicked");
}

// Check if a selected image exists in localStorage
const selectedImage = localStorage.getItem("selectedImage");
if (selectedImage) {
const previewImage = document.querySelector(".preview");
const uploadBox = document.querySelector(".upload-box");

// Set the selected image as the preview
previewImage.src = selectedImage;
previewImage.hidden = false;
uploadBox.classList.add("has-image");

// Clear the selected image from localStorage
localStorage.removeItem("selectedImage");
}

// Image Upload and Preview Logic

const uploadInput = document.querySelector(".upload-input");
const previewImage = document.querySelector(".preview")
const uploadBox = document.querySelector(".upload-box");
uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    if (!file) return;
    const imageURL = URL.createObjectURL(file); 
    previewImage.src = imageURL;
    previewImage.hidden = false;
    uploadBox.classList.add("has-image");
});



// Placeholder for future logic
// Later:
// - canvas analysis
// - palette extraction
// - harmony generation