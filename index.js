import { filterProductsByCategory } from "./moduls/product-filter.js";
import { fetchProduct, dataProduct } from "./moduls/fetch-product.js";

fetchProduct().then(() => {
    console.log(dataProduct); 
    filterProductsByCategory('Novinky')
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });


        button.classList.add('active');

        const category = button.getAttribute('data-category');
        console.log(category);
        filterProductsByCategory(category);
    });
});


// addon pro px obrazovky
window.addEventListener('resize', () => {
    console.log(`Šířka: ${window.innerWidth}px, Výška: ${window.innerHeight}px`);
});
