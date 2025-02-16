/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = 'Tiger';
animal['name'] = 'Mr Fluffy';
animal.noises = []

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []

noises[0] = 'roar'

noises.unshift('meow')
noises[noises.length] = 'growl'
noises.push('sneeze')

console.log(noises.length - 1)
console.log(noises[noises.length])
console.log(noises)

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal['noises'].push('hiss');

console.log('animal')


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []



animals.push(animal)

console.log(animals)

var duck = {
  species: 'duck', 
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}

var elephant = {
  species: 'elephant',
  name: 'Edgar',
  noises: ['honk', 'stomp', 'scream', 'sneeze']
}

var tiger = {
  species: 'tiger',
  name: 'Ron',
  noises: ['roar', 'hiss', 'pur', 'sneeze']
}

animals.push(elephant)

animals.push(tiger)

animals.push(duck)

console.log(animals)
console.log(animals.length - 1)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []


function getRandom(array) {

  return Math.floor(Math.random() * array.length)
}

var randomName = getRandom(animals);

friends.push(randomName);

console.log(friends)

friends['friends']

//I chose an array because it's good at storing multiple variables to be called on if needed.

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}