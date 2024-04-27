function myFunction(Num) {
    // Hide all categories
    for (let i = 1; i <= 5; i++) {
        let category = document.getElementById("category" + i);
        if (category) {
            category.style.display = "none";
        }
    }

    // Show the specific category based on Num
    let selectedCategory = document.getElementById("category" + Num);
    if (selectedCategory) {
        selectedCategory.style.display = "block";
    }
}

function myAll(){
    for (let i = 1; i <= 5; i++) {
        let category = document.getElementById("category" + i);
        if (category) {
            category.style.display = "block";
        }
    }
}
