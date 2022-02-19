export {}

// ######################################
//   PART 3 - INTERFACES
// ######################################

/* 
-------------------------------------------------------
  3.1  Update the interface 'Review' to store reviews
-------------------------------------------------------
*/

interface Review  {
    unknown
};
// Update the interface Reviews to an interface appropriate to the data it needs to store

const reviews: Review = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


function logReviews(review: unknown) {
    console.log(` - ${review.name}, ${review.starrs}`);
}

console.log('Reviews:');
reviews.forEach(logReviews);    

/* 
-------------------------------------------------------
  3.1 END
-------------------------------------------------------
*/

/* 
-------------------------------------------------------
  3.2 Update the interface 'Human' to store reviews with functions
-------------------------------------------------------
*/

//Interfaces with function
interface Human {
    name: string;
    age: number;
    country: string;
}


let person : Human = {
    name: 'Manish',
    country: 'India',
    age: 21,
    printInfo () {
        console.log(`Hello ${this.name}`)
    },
    getAge: () => {
        return person.age
    }

}

person.age = 23 // this should not be allowed
person.printInfo()
console.log(person.getAge())

/* 
-------------------------------------------------------
  3.2 END
-------------------------------------------------------
*/