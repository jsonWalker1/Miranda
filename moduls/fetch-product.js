let dataProduct = null;
export async function fetchProduct() {
    const url = 'JSON/products.json';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        dataProduct = json;
        //console.log(dataProduct)
        return dataProduct;
    } catch (error) {
        console.error(error.message);
    }
}

export {dataProduct}