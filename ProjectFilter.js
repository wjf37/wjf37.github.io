const filterButtons = document.querySelectorAll(".filterButton")

filterButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (!this.classList.contains("include") && !this.classList.contains("exclude")) {
            this.classList.add("include");
        } 
        
        else if (this.classList.contains("include")) {
            this.classList.remove("include");
            this.classList.add("exclude");
        } 
        
        else if (this.classList.contains("exclude")) {
            this.classList.remove("exclude");
        }
        applyFilters();
    })

})

function applyFilters() {
    const includeFilters = [];
    const excludeFilters = [];

    filterButtons.forEach(button => {
        if (button.classList.contains("include")) {
            includeFilters.push(button.getAttribute("data-filter"));
        }
        if (button.classList.contains("exclude")) {
            excludeFilters.push(button.getAttribute("data-filter"));
        }
    })

    const gridItems = document.querySelectorAll(".gridItem");

    gridItems.forEach(item => {
        const cats = item.getAttribute("data-categories").split(",").map(cat => cat.trim());

        let showItem = true;

        if (includeFilters.length > 0) {
            showItem = includeFilters.some(filter => cats.includes(filter))
        }

        if (excludeFilters.length >0) {
            if(excludeFilters.some(filter => cats.includes(filter))) {
                showItem = false;
            }
        }

        item.style.display = showItem ? "block" : "none";
    })
}

