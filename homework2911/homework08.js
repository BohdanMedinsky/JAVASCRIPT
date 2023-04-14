function findLongestWord (string = " ") {
    const stringSplit = string.split(' ');
    let longestWord = "";
    
      for (const word of stringSplit) {
        if (word.length > longestWord.length) {
        longestWord = word;
    }
    }
      return longestWord; }

      /* виклики  функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a  gooooogle roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with! you")
); // вернет 'force'*/