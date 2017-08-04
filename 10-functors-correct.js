const dragons = [
  { name: 'Fluffykins', health: 70 },
  { name: 'Deathlord', health: 6500 },
  { name: 'Little pizza', health: 2 }
]

const nameLengths = 
  dragons
    .map(dragon => dragon.name)
    .map(dragonName => dragonName.length)

console.log(nameLengths) // Output: [ 10, 9, 12 ]