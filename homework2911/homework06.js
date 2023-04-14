
//Напишіть функцію, яка перевіряє, чи є переданий рядок паліндромом.
function palindrome(str) {
    let check = '';
    for (let i = str.length - 1; i >= 0; --i) {
      check += str[i];
    }
    return str == check;
  }

  console.log(`${myFunctions.palindrome(str)}`);


















