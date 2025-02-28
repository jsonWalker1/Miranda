fetchProduct();
let dataProduct = null;
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('ahoj')
        const category = button.getAttribute('data-category'); 
        filterProductsByCategory(category); 
    });
});




async function fetchProduct() {
    const url = 'JSON/products.json';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        dataProduct = json;
        console.log(dataProduct)
    } catch (error) {
        console.error(error.message);
    }
}

async function filterProductsByCategory(category) {
    let indexHTML = '';
    const productsContainer = document.querySelector('.product-content');

    if (dataProduct) {
        const filteredProducts = dataProduct.filter(product => product.category === category);
        console.log(filteredProducts); 

        filteredProducts.forEach(product => {
            indexHTML += `
                <div class="product">
                    <img src='${product.imgSrc}'>
                    <h1>${product.title}</h1>
                    <h2>${product.availability}</h2>
                    <p>${product.price}<span>czk</span></p>
                    <div class="banner">
                        ${product.flags.includes("Novinka") ? '<div class="banner-new">Novinka</div>' : ''}
                        ${product.flags.includes("Tip") ? '<div class="banner-new">Tip</div>' : ''}
                        ${product.flags.includes("Výprodej") ? '<div class="banner-sale">Výprodej</div>' : ''}
                    </div>
                    <button class="shoping-cart"><i class="fas fa-shopping-cart"></i></button>
                </div>
            `;
        });

        productsContainer.innerHTML = indexHTML; 
    } else {
        console.log('Žádná data nejsou k dispozici.');
    }
}



window.addEventListener('resize', () => {
    console.log(`Šířka: ${window.innerWidth}px, Výška: ${window.innerHeight}px`);
});
