/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */
export const game = (input: number) => {
  let resultado = "";
  if(input%3===0){
    resultado +="Fizz";
  }if(input%5===0){
    resultado +="Buzz";
  }if (resultado !== "") {
    if (input === 3 || input === 5) {
      resultado += "Whizz";
    }
    return resultado;
  }if (input < 2 || input >= 100) {
    return input;
  }if (input === 2 || input === 7) {
    return "Whizz";
  }if (input % 2 === 0) {
    return input;
  }if (input % 7 === 0) {
    return input;
  }
  return "Whizz";
};