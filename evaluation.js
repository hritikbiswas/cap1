const URL = "https://fakestoreapi.com/products";
const mainContents = document.querySelector('.product-grid');
const catagaries = document.getElementById('catagaries');
const inpts = document.getElementById('inpts');
const sortOrder = document.getElementById('sortOrder');

function fetchProducts() {
    return fetch(URL)
        .then(response => response.json());
}

function populateCategories() {
    fetchProducts()
        .then(products => {
            const categories = ['All'];
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                if (!categories.includes(product.category)) {
                    categories.push(product.category);
                }
            }
            for (let i = 0; i < categories.length; i++) {
                let category = categories[i];
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                catagaries.appendChild(option);
            }
        });
}

function filterProductsByCategory(products, category) {
    let filteredProducts = [];
    if (category === 'All') {
        filteredProducts = products;
    } else {
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            if (product.category === category) {
                filteredProducts.push(product);
            }
        }
    }
    return filteredProducts;
}

function searchProducts(products, searchTerm) {
    let filteredProducts = [];
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            filteredProducts.push(product);
        }
    }
    return filteredProducts;
}

function sortProducts(products, order) {
    let sortedProducts = products.slice(); 
    if (order === 'Low') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
}

function displayProducts(products) {
    mainContents.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;
        mainContents.appendChild(productItem);
    }
}

catagaries.addEventListener('change', () => {
    fetchProducts()
        .then(products => {
            const filteredProducts = filterProductsByCategory(products, catagaries.value);
            displayProducts(filteredProducts);
        });
});

inpts.addEventListener('input', () => {
    fetchProducts()
        .then(products => {
            const filteredProducts = searchProducts(products, inpts.value);
            displayProducts(filteredProducts);
        });
});

sortOrder.addEventListener('change', () => {
    fetchProducts()
        .then(products => {
            const sortedProducts = sortProducts(products, sortOrder.value);
            displayProducts(sortedProducts);
        });
});

populateCategories();
fetchProducts().then(products => displayProducts(products));