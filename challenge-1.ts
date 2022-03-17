export {}

// BASIC types challenge

/* 
  ######################################
  This challenge includes using types in 
    - Boolean/Number/String
    - Objects
    - Arrays
    - Functions
  ######################################
*/


/* 
-------------------------------------------------------
  1.1 Use proper types to fix errors in this function
-------------------------------------------------------
*/

function squared (value : string): number {
   return `Square of the number ${value} is ${value * value}`
}

console.log(squared(2))

/* 
-------------------------------------------------------
  1.1  END
-------------------------------------------------------
*/

/* 
-------------------------------------------------------
  1.2 Creating types for arrays

  Make an array of `info` objects  that have
    -Image (string) 
    -title
    -price
    -location object that includes
        - address
        - city
        - pin code
        - country
    - phone
-------------------------------------------------------
*/


const info: {
    //Define the types here
    unknown
}[] = [
    {
        images: ['some url', 'some url2', 'some url3'],
        title: 'Title 1',
        price: 123,
        location: {
            firstLine: 'Address 1',
            city: 'Paris',
            code: '121',
            country: 'France',
        },
        phone: '+12 242938492',
    },
    {
        images: ['some url', 'some url2', 'some url3'],
        title: 'Title 2',
        price: 123,
        location: {
            firstLine: 'Address 2',
            city: 'Madrid',
            code: '141',
            country: 'Spain',
        },
    }
]

console.log(info)

/* 
-------------------------------------------------------
  1.2  END
-------------------------------------------------------
*/
