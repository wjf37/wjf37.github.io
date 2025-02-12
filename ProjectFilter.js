/*
document.querySelectorAll(".filterButton").forEach(button => {
    button.addEventListener("click", () => {
        const filterVal = button.getAttribute("data-filter");

        document.querySelectorAll(".gridItem").forEach(item => {
            if (filterVal === "all" || item.getAttribute("data-category") === filterVal) {
                item.style.display = "block";

                setTimeout(() => item.style.opacity = 1, 10);
            } else {
                item.style.display = "none";
                setTimeout(() => item.style.display = "none", 300);
            }
        })
    })
})*/

let includeFilters = [];
let excludeFilters = [];

function applyFilters() {
    const gridItems = document.querySelectorAll(".gridItem");

    gridItems.forEach(item => {
        const cats = item.getAttribute("data-categories").split(",").map(cat => cat.trim());

        let showItem = true;


    })
}

