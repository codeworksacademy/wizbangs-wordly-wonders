//region pre-code
const products = [
  {
    name: 'Cozy Boots',
    description: 'These boots were made for walking, and thats what youll do',
    imgUrl: '/assets/img/boots.png',
    quantity: 3
  }, {
    name: 'Bone Bow',
    description: 'Ranged attacks, Stay safe use a pointed stick from afar',
    imgUrl: '/assets/img/bow.png',
    quantity: 2
  }, {
    name: 'Eagles Talon',
    description: 'Fly through your enemies with this feathered edge.',
    imgUrl: '/assets/img/dagger.png',
    quantity: 1
  }, {
    name: 'Horned Helm',
    description: 'A nice horned helm be careful with the color red when wearing',
    imgUrl: '/assets/img/helm.png',
    quantity: 4
  }, {
    name: 'Rations',
    description: 'Yum Yum, You are going to need to eat on your adventure. Take this!',
    imgUrl: '/assets/img/ration.png',
    quantity: 10
  }, {
    name: 'Mysterious Ring',
    description: 'There is probably some left over magic in this ring purchase it to identify',
    imgUrl: '/assets/img/ring.png',
    quantity: 1
  }, {
    name: 'Rope',
    description: 'No adventurer is complete without a bundle of sturdy rope',
    imgUrl: '/assets/img/rope.png',
    quantity: 4
  }, {
    name: 'Bag of Holding',
    description: 'Where are you going to keep all of your things without a bag such as this',
    imgUrl: '/assets/img/bag.png',
    quantity: 0
  }
]

const bag = []



//#endregion

// DATA TYPES
// Variable declaration
// var, let, const (identifies to to javascript that we are declaring a varialbe)
// name, a single '=' is the assignment operator
let x = 8

// SECTION numbers (+,-,/,*,%)
// reassign value with a combo of = and an operator
// x += 6
// x = x + 6
x++ // increases the value by 1
x-- // decreases by 1
x++

// SECTION strings ("", '', ``)
let myFirstName = 'mark'
let myLastName = 'ohnsman'
// let myName = "mark"
// let myNameString3 = `mark`


// join strings
// concatenation 
let myFullName = myFirstName + ' ' + myLastName
// interpolation (${} escapes the string back to javascript)
let myFullName2 = `${myFirstName} string land ${myLastName}`

// SECTION booleans
// true, false

// comparing bools (==, ===, !=, >, <, >=, <=)
if (true) {
  // do this
}

var age = 83

// if (age >= 18) {
//   console.log('Buy Lotto Ticket')
// } else {
//   // run this if the statement was false
//   console.log('Get outta here kid')
// }

if (age >= 21) {
  console.log('drink up')
} else if (age >= 18) {
  console.log('buy lotto ticket')
} else {
  console.log('Get outta here kid')
}


// objects and arrays

// Arrays are collections of info
let nums = [1, 2, 3, 4, 5]
let fruits = ['apple', 'orange', 'pear', 'grape', 'cherry', 'nectarine', 'kiwi']
fruits[0]


// loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]
  // console.log(fruit)
}

// Objects
// key (properties) value pairs 
let jake = {
  name: 'Jake',
  age: 35,
  alive: true
}

let mark = {
  age: 33
}

console.log(jake.age + mark.age)



let goods = ''

for (let i = 0; i < products.length; i++) {
  const product = products[i]
  console.log(product)
  let soldOut = ''
  if (product.quantity === 0) {
    soldOut = 'greyscale'
  }
  goods += `
      <div class="good ${soldOut}" onclick="addToCart('${product.name}')">
        <img src="${product.imgUrl}" alt="${product.name}">
        <h5>${product.name}</h5>
        <p>${product.description}</p>
      </div>
  `
}

document.getElementById('goods').innerHTML = goods

for (let i = 0; i < products.length; i++) {
  // NOTE this is just an alias to make it easier to read
  const product = products[i]
  if (product.quantity > 0) {
    console.log(product.name)
  }
}






function addToCart(name) {
  console.log('clicked ' + name)
  // find the object that was clicked
  let found = products.find(product => product.name == name)
  bag.push(found)
  drawCart()
}


function drawCart() {
  let cart = ''
  for (let i = 0; i < bag.length; i++) {
    const item = bag[i]
    cart += `
    <div class="cart-item rounded bg-parchment my-2 shadow">
    <div class="card-body d-flex align-items-center justify-content-around">
      <img src="${item.imgUrl}" alt="" height="125" class="me-3">
      <div>
        <h4 class="card-title">${item.name} - 12gp</h4>
        <div class="d-flex justify-content-between"><small>Quantity</small><span>1</span></div>
      </div>
    </div>
  </div>`
  }
  document.getElementById('cart').innerHTML = cart
}


function checkout() {
  bag.length = 0
  drawCart()
}