async function fetchXML() {
    try {
        const response = await fetch('database/catalog.xml'); // Change this to the actual XML file path
        if (!response.ok) throw new Error('Failed to load XML');
        
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'application/xml');
        
        const browniesCategory = xmlDoc.querySelector('category[product="brownies"]');
        if (!browniesCategory) throw new Error('brownies category not found');
        
        const browniesList = document.getElementById('product-brownies');
        browniesList.innerHTML = ''; // Clear initial loading message
        
        browniesCategory.querySelectorAll('list').forEach((product) => {
            const name = product.querySelector('name').textContent;
            const price = product.querySelector('price').textContent;
            const description = product.querySelector('description').textContent;
            const image = product.querySelector('image').textContent;

            const productContainer = document.createElement('div');
            productContainer.className = 'product_container';
            
            const productImage = document.createElement('img');
            productImage.src = `/Media/product/${image}`;
            productImage.alt = name;
            productImage.className = 'product_image';
            
            const productInfo = document.createElement('div');
            productInfo.innerHTML = `
                <p class="p_name">${name}</p>
                <p class="p_price">RM ${price}</p>
                <p class="p_desc">${description}</p>
            `;
            
            productContainer.appendChild(productImage);
            productContainer.appendChild(productInfo);
            
            browniesList.appendChild(productContainer);
        });
    } catch (error) {
        document.getElementById('product-list').textContent = `Error loading product data: ${error.message}`;
    }
}

fetchXML(); // Load the XML data when the page is loaded
