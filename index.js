const fizz = "Fizz";
const buzz = "Buzz";
const fizzbuzz = "FizzBuzz";
const isInvalid = "Invalid Item";

const fizzBuzz = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      console.log(isInvalid);
    } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      console.log(fizzbuzz);
    } else if (arr[i] % 3 === 0) {
      console.log(fizz);
    } else if (arr[i] % 5 === 0) {
      console.log(buzz);
    } else {
      console.log(`Divided ${arr[i]} by 3`);
      console.log(`Divided ${arr[i]} by 5`);
    }
  }
};

fizzBuzz([1, 3, 5, , 15, "A", 23, 27, 9, 30]);

module.exports.fizzBuzz = fizzBuzz;