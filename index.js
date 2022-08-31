const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map((currentValue, index)) => {

//   return tutorials
// }

// tutorials.map () => {

// }












// const capitalizeFirstLetter = string => {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }

// const splitString = string => {
//   return string.split(" ");
// }

// tutorials.forEach(index => {
//   return splitString(index => {
//     return capitalizeFirstLetter(index);
//   }
//     )
// }
// )




// const testFunction = () => {
// //  tutorials.forEach(index => {
//    // return capitalizeFirstLetter(index);
//    tutorials.forEach(index => {
//     return splitString(index => {
//       return capitalizeFirstLetter(index);
//     }
//       )
//   }
//   )
// }
// testFunction()


// const titleCased = (index) => {
//   let array1 = index.split(" ").map()
//     return array1.charAt(0).toUpperCase();

//   }
  
// }

// function titleCased() {
//   const cased = tutorials.map((cb) => {
//       const newCase = cb
//           .split(' ')
//           .map((word) => {
//               return word.charAt(0).toUpperCase() + word.slice(1)
//           })
//           .join(' ')

//       return newCase
//   })
//   return cased
// }


const titleCased = () => {
    let lines = tutorials.map((cb) => {
      let splitLines = cb
        .split(' ')
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ')
        return splitLines
        })
    return lines
    }

