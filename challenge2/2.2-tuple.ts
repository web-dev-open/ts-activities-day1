// ######################################
//   PART 2 - TUPLES
// ######################################

/* 
-------------------------------------------------------
  3.1 Update the type 'StaffAccount' to an appropriate Tuple
-------------------------------------------------------
*/

type StaffAccount = [unknown];

const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];

/* 
-------------------------------------------------------
  3.1 END
-------------------------------------------------------
*/

/* 
-------------------------------------------------------
  3.2 Update the type 'PayStubs' to an appropriate Tuple
-------------------------------------------------------
*/

// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type PayStubs = [unknown];

const payStubs: PayStubs[] = [
  ['Adankwo', 250],
  ['Kanokwan', 250, 260],
  ['Aneurin', 300, 300, 300],
];


/* 
-------------------------------------------------------
  3.2 END
-------------------------------------------------------
*/