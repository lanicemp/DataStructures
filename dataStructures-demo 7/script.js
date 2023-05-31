/*
 Primitive Data Types: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

 number
 boolean
 string
 null
 undefined
 */

/*
 * Arrays
 */

let myArray = [2,3,4,5]
console.log('length', myArray.length)
console.log('index of 2:',myArray[2] )
myArray.push( 8)
console.log(myArray)
let lastElement = myArray.pop()
console.log('lastElement:', lastElement)
console.log('updated:', myArray)


// splice(x,y,z ) => Allow us to target a specific index that we would liketo remove from an array. 
// x will target by the index
// y will speciify how many items after that index we would like to remove. 
// z will add in another item in that place


let candy= ['kitkat', 'Mars','reeses','skittles', 'sneakers' ]
console.log('candy', candy.length)
// targets the idex of 1 and removes one item which is Mars
let removeMars = candy.splice(1, 1)
console.log('removeMars', removeMars)
console.log('newCandyList', candy)
// target the index of 1, removes no items and adds marshmellow
let addMarshmellow= candy.splice(1, 0, 'marshemellow') 

console.log('candy2 ', candy)