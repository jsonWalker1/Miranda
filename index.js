import { filterProductsByCategory } from "./moduls/product-filter.js";
import { fetchProduct, dataProduct } from "./moduls/fetch-product.js";
import { titles, currentIndex, changeTitle } from "./moduls/changeTitle.js";

//ZMĚNA TITLE
setInterval(changeTitle, 1500);

//NAČTENÍ JSON
fetchProduct().then(() => {
    console.log(dataProduct); 
    filterProductsByCategory('Novinky')
});


// ADD EVENTLISTENER PRO BUTTON NA V SEKCI PORDUCT

document.querySelectorAll('.nav-product__filter-btn').forEach(button => {
    button.addEventListener('click', () => {

        document.querySelectorAll('.nav-product__filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });


        button.classList.add('active');

        const category = button.getAttribute('data-category');
        console.log(category);
        filterProductsByCategory(category);
    });
});


// FUNKCE PRO ZOBRAZENÍ PX OBRAZOVKY
window.addEventListener('resize', () => {
    console.log(`Šířka: ${window.innerWidth}px, Výška: ${window.innerHeight}px`);
});

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


