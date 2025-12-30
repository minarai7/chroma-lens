// Mobile Menu Logic

const mobileBtn = document.querySelector("#mobile-menu-button");
const nav = document.querySelector("nav");
const home =　document.querySelector("#home");

mobileBtn.addEventListener("click", openMenu);

home.addEventListener("click", closeMenu);

document.body.addEventListener("click", (e) => {
    if (nav.classList.contains("active") && !nav.contains(e.target)) {
        closeMenu(e);
    }
});

function openMenu(e) {
    e.stopPropagation();
    nav.classList.add("active");
    mobileBtn.style.display = "none";
}

function closeMenu(e) {
    e.stopPropagation();
    nav.classList.remove("active");
    mobileBtn.style.display = "flex";
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
// - image upload handling
// - canvas analysis
// - palette extraction
// - harmony generation