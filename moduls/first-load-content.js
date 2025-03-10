import { dataProduct } from './fetch-product.js';
export async function filterProductsByCategory(category) {
    let indexHTML = '';
    const productsContainer = document.querySelector('.product-content');

    if (dataProduct) {
        const filteredProducts = dataProduct.filter(product => product.category === category);
        console.log(filteredProducts); 
        
        filteredProducts.forEach(product => {
            indexHTML += `
                <article class="product">
                    <figure>
                        <img src='${product.imgSrc}'>
                    </figure>
                        <a href="">${product.title}</a>
                        <h2>${product.availability}</h2>
                        <p>${product.price}<span>czk</span></p>
                        <div class="banner">
                            ${product.flags.includes("Novinka") ? '<div class="banner-new">Novinka</div>' : ''}
                            ${product.flags.includes("Tip") ? '<div class="banner-new">Tip</div>' : ''}
                            ${product.flags.includes("Výprodej") ? '<div class="banner-sale">Výprodej</div>' : ''}
                        </div>
                        <button class="shoping-cart"><i class="fas fa-shopping-cart"></i></button>
                    </article>
                </div>
            `;
        });
        
        productsContainer.innerHTML = indexHTML; 
    } else {
        console.log('Žádná data nejsou k dispozici.');
    }
}
/*

<article class="product">
                    <figure>
                    <img src="/assets/img/product1.png" alt="" class="img-product">
                    </figure>
                    <a href="">Zlatá investiční mince AmericanEagle 1/2 Oz ND</a>
                    <h2>Skladem</h2>
                    <p>43 852 <span>czk</span></p>
                    <div class="banner">
                        <div class="banner-new">Novinka</div>
                        <div class="banner-sale">Výprodej</div>
                    </div>
                    <button class="shoping-cart"><i class="fas fa-shopping-cart"></i></button>
               </article>*/