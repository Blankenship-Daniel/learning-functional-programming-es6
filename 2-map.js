let animals = [{
    name: 'Fluffykins',
    species: 'rabbit'
  },
  {
    name: 'Caro',
    species: 'dog'
  },
  {
    name: 'Hamilton',
    species: 'dog'
  },
  {
    name: 'Harold',
    species: 'fish'
  },
  {
    name: 'Ursula',
    species: 'cat'
  },
  {
    name: 'Jimmy',
    species: 'fish'
  }
]

/*
// manual way of mapping animal names to a new array
let names = []
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

console.log(names)
*/

let names = animals.map(animal => animal.name)
console.log(names)
