import { filterProductsByCategory } from "./moduls/product-filter.js";
import { fetchProduct, dataProduct } from "./moduls/fetch-product.js";

// Použij Promise a then() v index.js
fetchProduct().then(() => {
    console.log(dataProduct);  // Data budou k dispozici až po načtení
    filterProductsByCategory('Novinky')
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // console.log('1')
        const category = button.getAttribute('data-category'); 
        console.log(category)
        filterProductsByCategory(category); 
    });
});

// addon pro px obrazovky
window.addEventListener('resize', () => {
    console.log(`Šířka: ${window.innerWidth}px, Výška: ${window.innerHeight}px`);
});
