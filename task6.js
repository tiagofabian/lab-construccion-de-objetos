const prompt = require('prompt-sync')();

// Type your code below this line!
function ShoppingList() {
  this.products = []
 
  this.addProducts = function(newProduct) {
    this.products.push(newProduct);
  };
}

const newShopingList = new ShoppingList();

const times = parseInt(prompt("### Cuantos productos quieres agregar?: "));

for(let i = 0; i < times; i++) {
  let article = prompt("Ingresa el articulo: ")
  let quantity = parseInt(prompt("Ingresa la cantidad: "))

  newShopingList.addProducts({
    article: article,
    quantity: quantity
  })

  if (i < (times - 1)) console.log("### Ingresa el siguiente articulo: ");
}

function removeDuplicates(products) {
  const seen = new Set();
  return products.filter(product => {
    const key = JSON.stringify(product);
    return seen.has(key) ? false : seen.add(key);
  });
}

const uniqueProducts = removeDuplicates(newShopingList.products);

console.log("\n### Se añadieron los siguientes Productos:");
uniqueProducts.forEach((product, index) => {
  console.log(`${index + 1}. articulo: ${product.article} - cantidad: ${product.quantity}`);
});


// Type your code above this line!

