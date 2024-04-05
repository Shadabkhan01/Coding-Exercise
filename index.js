const fizz = "Fizz";
const buzz = "Buzz";
const fizzbuzz = "FizzBuzz";
const isInvalid = "Invalid Item";

const fizzBuzz = (arr) => {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || !arr[i] || typeof arr[i] === typeof "") {
      res[arr[i]] = isInvalid;
    } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      res[arr[i]] = fizzbuzz;
    } else if (arr[i] % 3 === 0) {
      res[arr[i]] = fizz;
    } else if (arr[i] % 5 === 0) {
      res[arr[i]] = buzz;
    } else {
      res[arr[i]] = [`Divided ${arr[i]} by 3`, `Divided ${arr[i]} by 5`];
    }
  }
  return res;
};

module.exports.fizzBuzz = fizzBuzz;
