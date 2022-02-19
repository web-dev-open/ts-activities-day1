// Enum-Tuple-Intrfaces challenge

// ######################################
//   PART 1 - ENUM
// ######################################

/* 
-------------------------------------------------------
  3.1 Update the type 'CompassDirection' to be 
    - North, East, South or West
-------------------------------------------------------
*/

enum CompassDirection {
   unknown
}

const startingDirection = CompassDirection.East;
const endingDirection = CompassDirection.North;

console.log(CompassDirection[2]) // guess the output and think why ?

/* 
-------------------------------------------------------
  3.1 END
-------------------------------------------------------
*/