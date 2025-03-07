import { filterProductsByCategory } from "./moduls/product-filter.js";
import { fetchProduct } from "./moduls/fetch-product.js";
console.log(1)
fetchProduct();
console.log(dataProduct);
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
         console.log('ahoj')
        const category = button.getAttribute('data-category'); 
        filterProductsByCategory(category); 
    });
});

// addon pro px obrazovky
window.addEventListener('resize', () => {
    console.log(`Šířka: ${window.innerWidth}px, Výška: ${window.innerHeight}px`);
});
