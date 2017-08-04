let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

/*
// manual way to filter dog objects out of an array
let dogs = []
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
    dogs.push(animals[i])
}

console.log(dogs)
*/

// Filtering dogs using the idea of higher order functions
let dogs = animals.filter(animal => animal.species === 'dog')
console.log(dogs)