// Write your code below
function isPalindrome(word) {
    const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
  }

  console.log(isPalindrome("mom"));
  console.log(isPalindrome("mother"));