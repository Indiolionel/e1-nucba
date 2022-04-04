const ingredientes = ['queso', 'harina', 'tomate', 'pimienta', 'salsa', 'ketchuk', 'oregano', 'sal', 'levadura', 'muzzarella'];
const pares = [];
const impares = [];

const pizza = (arrayI) => {
    for (let i = 0; i < arrayI.length; i++) {

        if (arrayI[i].length % 2 == 0) {
            pares.push(arrayI[i]);
        } else impares.push(arrayI[i])

    }
}
pizza(ingredientes);
console.log(`Los ingredientes pares son: ${pares}
Los ingredientes impares son: ${impares}`);