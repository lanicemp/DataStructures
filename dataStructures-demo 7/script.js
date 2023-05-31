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