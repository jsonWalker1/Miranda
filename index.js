//console.log(1);

/*
1.potřebuju on click atributem spustit funkci která fetchne soubor a načte ji do array 
        (if statement pro to zdali už array přitomna)    

2. potřebuju vytvořít loop, která následně rozřadí všchny věci do konkrétních kategorií. 

3. následně
    vytvořím var kde se bude přidávat HTML pomocí loop a tempalte stringů.
    všechno innertnu do picknutýho divu 

*/ 
fetchProduct();
let dataProduct = null;
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('ahoj')
        const category = button.getAttribute('data-category'); // Získání kategorie z atributu
        filterProductsByCategory(category); // Filtruj podle kategorie
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
