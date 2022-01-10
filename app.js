//#region pre-code
const products = [
  {
    name: 'Cozy Boots',
    description: 'These boots were made for walking, and thats what youll do',
    imgUrl: 'assets/img/boots.png',
    quantity: 3,
    price: 10,
  }, {
    name: 'Bone Bow',
    description: 'Ranged attacks, Stay safe use a pointed stick from afar',
    imgUrl: 'assets/img/bow.png',
    quantity: 2,
    price: 18,
  }, {
    name: 'Eagles Talon',
    description: 'Fly through your enemies with this feathered edge.',
    imgUrl: 'assets/img/dagger.png',
    quantity: 1,
    price: 20,
  }, {
    name: 'Horned Helm',
    description: 'A nice horned helm be careful with the color red when wearing',
    imgUrl: 'assets/img/helm.png',
    quantity: 4,
    price: 23,
  }, {
    name: 'Rations',
    description: 'Yum Yum, You are going to need to eat on your adventure. Take this!',
    imgUrl: 'assets/img/ration.png',
    quantity: 10,
    price: 1,
  }, {
    name: 'Mysterious Ring',
    description: 'There is probably some left over magic in this ring purchase it to identify',
    imgUrl: 'assets/img/ring.png',
    quantity: 1,
    price: 30,
  }, {
    name: 'Rope',
    description: 'No adventurer is complete without a bundle of sturdy rope',
    imgUrl: 'assets/img/rope.png',
    quantity: 4,
    price: 4,
  }, {
    name: 'Bag of Holding',
    description: 'Where are you going to keep all of your things without a bag such as this',
    imgUrl: 'assets/img/bag.png',
    quantity: 0,
    price: 200,
  }
]

const cart = [] // NOTE This should be empty when the page loads

//#endregion

//#region Print all of the goods from the array to the page

let productsTemplate = ''

for (let i = 0; i < products.length; i++) {
  const product = products[i]
  console.log(product)
  let soldOut = ''
  if (product.quantity === 0) {
    soldOut = 'greyscale'
  }
  productsTemplate += `
      <div class="product ${soldOut}" onclick="addToCart('${product.name}')">
        <img src="${product.imgUrl}" alt="${product.name}">
        <h5>${product.name}</h5>
        <p>${product.description}</p>
      </div>
  `
}

document.getElementById('products').innerHTML = productsTemplate

//#endregion 

//#region Cart Functions 
function addToCart(name) {
  console.log('clicked ' + name)
  // find the object that was clicked
  let found = products.find(product => product.name == name)
  cart.push(found)
  drawCart()
}


function drawCart() {
  let cartTemplate = ''
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    cartTemplate += `
    <div class="cart-item rounded bg-parchment my-2 shadow">
    <div class="card-body d-flex align-items-center justify-content-around">
      <img src="${item.imgUrl}" alt="" height="125" class="me-3">
      <div>
        <h4 class="card-title">${item.name}</h4>
        <p class="">${item.price} GP</p>
      </div>
    </div>
  </div>`
  }
  document.getElementById('cart').innerHTML = cartTemplate
}


function checkout() {
  cart.length = 0
  drawCart()
}
//#endregion