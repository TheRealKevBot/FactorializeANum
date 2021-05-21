/* 
*   Return the factorial of the provided integer.
*   If the integer is represented with num 
*   a factorial is the product of all positive integers less than or equal to num.
*   example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
    let count = 1
    let number = 1
    while (count <= num ) {
      number *= count
      count += 1
    }
    return number;
  }
  
  console.log(factorialize(1));
  console.log(factorialize(2));
  console.log(factorialize(3));
  console.log(factorialize(4));
  console.log(factorialize(5));
  console.log(factorialize(6));
  console.log(factorialize(7));
  console.log(factorialize(8));
  console.log(factorialize(9));
  console.log(factorialize(10));
  console.log(factorialize(15));
  console.log(factorialize(20));
