// Fetch uploaded images from the "uploads" folder
const uploads = [
    "uploads/_DSC3250.jpg",
    "uploads/_DSC3288.jpg",
    "uploads/_DSC3302.jpg"
    ];

    const historyGrid = document.querySelector(".history-grid");

    // Populate the history grid with images
    uploads.forEach((imagePath) => {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = "Uploaded Image";
    img.classList.add("history-image");
    img.addEventListener("click", () => selectImage(imagePath));
    historyGrid.appendChild(img);
    });

    // Handle image selection
    function selectImage(imagePath) {
    // Save the selected image path to localStorage
    localStorage.setItem("selectedImage", imagePath);
    // Redirect to the home page
    window.location.href = "index.html";
    }