// uncurried function
let dragon1 = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'

// curried function
let dragon2 = name => size => element =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'

console.log(dragon1('Felix', 'large', 'ice')) 
console.log(dragon2('Peter')('small')('lightning'))

let dragons = [{
    name: 'fluffykins',
    element: 'lightning'
  },
  {
    name: 'noomi',
    element: 'lightning'
  },
  {
    name: 'karo',
    element: 'fire'
  },
  {
    name: 'doomer',
    element: 'timewarp'
  }
]

// uncurried function
let hasElement1 = (element, obj) => obj.element === element

// curried function
let hasElement2 = element => obj => obj.element === element


let lightningDragons = dragons.filter(obj => hasElement1('lightning', obj))

// hasElement2('fire') returns `(obj) => obj.element === 'fire'` so 
//  it meets the requirements for the callback that the higher order
//  filter function is looking for
let fireDragons = dragons.filter(hasElement2('fire'))

console.log(lightningDragons)
console.log(fireDragons)
