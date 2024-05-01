async function fetchXML() {
    try {
        const response = await fetch('database/catalog.xml'); // Change this to the actual XML file path
        if (!response.ok) throw new Error('Failed to load XML');
        
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'application/xml');
        
        const cheeseTartCategory = xmlDoc.querySelector('category[product="cheesetart"]');
        if (!cheeseTartCategory) throw new Error('Cheese Tart category not found');
        
        const CheeseTartList = document.getElementById('product-cheesetart');
        CheeseTartList.innerHTML = ''; // Clear initial loading message
        
        cheeseTartCategory.querySelectorAll('list').forEach((product) => {
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
            
            CheeseTartList.appendChild(productContainer);
        });
    } catch (error) {
        document.getElementById('product-list').textContent = `Error loading product data: ${error.message}`;
    }
}

fetchXML(); // Load the XML data when the page is loaded
