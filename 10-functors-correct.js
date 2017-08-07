/**
 * A functor is an object that has a map function. Arrays in JS 
 * implement map and are therefore functors. Promises, streams, and
 * trees often implement the map function and when they do they are 
 * also functors. The map method of the functor takes the functor 
 * contents and transforms them using the transformation callback
 * that is passed to map. The map then returns a new functor of the
 * same type which contains the transformed values.
 */

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