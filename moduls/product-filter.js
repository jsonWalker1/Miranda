import { dataProduct } from './fetch-product.js';
let firstLoad = true;
export async function filterProductsByCategory(category) {
    //console.log('sss')
    let indexHTML = '';
    const productsContainer = document.querySelector('.product-content');
    if (dataProduct && firstLoad) {
        const filteredProducts = dataProduct.filter(product => product.category === category);
        //console.log('3 itemy')
        //console.log(filteredProducts); 
        let firstLoadCont = [];
        firstLoadCont = filteredProducts.slice(0,4)
        //console.log(firstLoadCont)        
        firstLoadCont.forEach(product => {
            indexHTML += `
                <article class="product-content__product">
                    <figure>
                        <img class="product-content__img-product" src='${product.imgSrc}'>
                    </figure>
                        <a href="">${product.title}</a>
                        <h2>${product.availability}</h2>
                        <p>${product.price}<span>czk</span></p>
                        <div class="product-content__banner">
                            ${product.flags.includes("Novinka") ? '<div class="product-content__banner-new">Novinka</div>' : ''}
                            ${product.flags.includes("Tip") ? '<div class="product-content__banner-new">Tip</div>' : ''}
                            ${product.flags.includes("Výprodej") ? '<div class="product-content__banner-sale">Výprodej</div>' : ''}
                        </div>
                        <button class="product-content__shoping-cart"><i class="fas fa-shopping-cart"></i>
                    </button>
                </article>
            `;
        });
        productsContainer.innerHTML = indexHTML; 
        firstLoad = false;
        //console.log(firstLoad)
    } 
    else if (!firstLoad && category === 'all-product') {
        console.log('all product funguje') 
     
        dataProduct.forEach(product => {
            indexHTML += `
                <article class="product-content__product">
                    <figure>
                        <img class="product-content__img-product" src='${product.imgSrc}'>
                    </figure>
                        <a href="">${product.title}</a>
                        <h2>${product.availability}</h2>
                        <p>${product.price}<span>czk</span></p>
                        <div class="product-content__banner">
                            ${product.flags.includes("Novinka") ? '<div class="product-content__banner-new">Novinka</div>' : ''}
                            ${product.flags.includes("Tip") ? '<div class="product-content__banner-new">Tip</div>' : ''}
                            ${product.flags.includes("Výprodej") ? '<div class="product-content__banner-sale">Výprodej</div>' : ''}
                        </div>
                        <button class="product-content__shoping-cart"><i class="fas fa-shopping-cart"></i>
                    </button>
                </article>
            `;
        });
        productsContainer.innerHTML = indexHTML; 
        firstLoad = false;
        //console.log(firstLoad)
        
    }
     
    else if (!firstLoad && category){
        //console.log("max itemy")
        const filteredProducts = dataProduct.filter(product => product.category === category);
        //console.log(filteredProducts);    
        filteredProducts.forEach(product => {
            indexHTML += `
                <article class="product-content__product">
                    <figure>
                        <img class="product-content__img-product" src='${product.imgSrc}'>
                    </figure>
                        <a href="">${product.title}</a>
                        <h2>${product.availability}</h2>
                        <p>${product.price}<span>czk</span></p>
                        <div class="product-content__banner">
                            ${product.flags.includes("Novinka") ? '<div class="product-content__banner-new">Novinka</div>' : ''}
                            ${product.flags.includes("Tip") ? '<div class="product-content__banner-new">Tip</div>' : ''}
                            ${product.flags.includes("Výprodej") ? '<div class="product-content__banner-sale">Výprodej</div>' : ''}
                        </div>
                        <button class="product-content__shoping-cart"><i class="fas fa-shopping-cart"></i>
                    </button>
                </article>
            `;
        });
        productsContainer.innerHTML = indexHTML; 
    }
    
}