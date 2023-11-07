const natureBtn = document.getElementById("natureBtn");
const techBtn = document.getElementById("techBtn");
const wildlifeBtn = document.getElementById("wildlifeBtn");
const hotelBtn = document.getElementById("hotelBtn");

const picCategories = document.querySelectorAll(".pic-category");

natureBtn.addEventListener("click", () => {
    hideAllCategories();
    showCategory("pic-nature");
});

techBtn.addEventListener("click", () => {
    hideAllCategories();
    showCategory("pic-tech");
});

wildlifeBtn.addEventListener("click", () => {
    hideAllCategories();
    showCategory("pic-wildlife");
});

hotelBtn.addEventListener("click", () => {
    hideAllCategories();
    showCategory("pic-hotel");
});

function hideAllCategories() {
    picCategories.forEach(category => {
        category.style.display = "none";
    });
}

function showCategory(categoryName) {
    const category = document.querySelector(`.${categoryName}`);
    if (category) {
        category.style display = "block";
    }
}
