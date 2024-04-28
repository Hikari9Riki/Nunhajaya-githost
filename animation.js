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


function setActiveTab(navId) {
    // First, remove 'active' class from all nav-items
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        const link = item.querySelector(".nav-link");
        if (link) {
            link.classList.remove("active");
        }
    });

    // Then, add 'active' class to the selected nav-item
    const selectedNavItem = document.getElementById(navId);
    if (selectedNavItem) {
        const link = selectedNavItem.querySelector(".nav-link");
        if (link) {
            link.classList.add("active");
        }
    }
    
}

function viewPage(pageId){

    for (let i = 1; i <= 3; i++) {
        let page = document.getElementById("page" + i);
        if (page) {
            page.style.display = "none";
        }
    }

    // Show the specific category based on Num
    const selectedPage = document.getElementById("page" + pageId);
    if (selectedPage) {
        selectedPage.style.display = "block";
    }
}

// Add event listeners to your nav items to handle clicks
document.getElementById("nav1").addEventListener("click", () => setActiveTab("nav1"));
document.getElementById("nav2").addEventListener("click", () => setActiveTab("nav2"));
document.getElementById("nav3").addEventListener("click", () => setActiveTab("nav3"));

