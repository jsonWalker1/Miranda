export async function filterProductsByCategory(category) {
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