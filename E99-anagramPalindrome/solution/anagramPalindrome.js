function anagramPalindrome(word) {
  // Write your code here.
  const letterFreq = {};
  let hasOdd = 0;

  for (const letter of word) {
    if (!letterFreq[letter]) letterFreq[letter] = 1;
    else letterFreq[letter]++;
  }

  for (const value in letterFreq) {
    if (letterFreq[value] % 2 === 1) hasOdd++;
    if (hasOdd > 1) return false;
  }
  return true;
}

module.exports = anagramPalindrome;
