
document.addEventListener('DOMContentLoaded', () => {
    fetch('database/navbar.html')  // Relative path if navbar.html is in the same directory
        .then(response => response.ok ? response.text() : Promise.reject('Failed to load'))
        .then(html => {
            document.getElementById('navbar-placeholder').innerHTML = html;
        })
        .catch(error => console.error('Error loading navbar:', error));
});


document.addEventListener('DOMContentLoaded', () => {
    fetch('database/catalog.html')  // Relative path if navbar.html is in the same directory
        .then(response => response.ok ? response.text() : Promise.reject('Failed to load'))
        .then(html => {
            document.getElementById('catalog-placeholder').innerHTML = html;
        })
        .catch(error => console.error('Error loading catalog:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('database/homepage.html')  // Relative path if navbar.html is in the same directory
        .then(response => response.ok ? response.text() : Promise.reject('Failed to load'))
        .then(html => {
            document.getElementById('homepage-placeholder').innerHTML = html;
        })
        .catch(error => console.error('Error loading catalog:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('database/lastpage.html')  // Relative path if navbar.html is in the same directory
        .then(response => response.ok ? response.text() : Promise.reject('Failed to load'))
        .then(html => {
            document.getElementById('lastpage-placeholder').innerHTML = html;
        })
        .catch(error => console.error('Error loading catalog:', error));
});