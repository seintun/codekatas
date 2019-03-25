/**
Longest Palindromic Substring
Write a function that, given a string, returns its longest palindromic substring. A palindrome is dened as a string that is written the same forward and backward. Assume that there will only be one longest palindromic substring.

Sample input:"abaxyzzyxf"
Sample output:"xyzzyx"
 */

//  O(n^3) Time and O(1) space
function longestPalindromicSubstring(string) {
  // Write your code here.
  let longest = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring))
        longest = substring;
    }
  }
  console.log(longest);
  return longest;
}

function isPalindrome(string){
  let leftIdx = 0,
    rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

longestPalindromicSubstring("abaxyzzyxf") // "xyzzyx"
longestPalindromicSubstring("a") // "a"
longestPalindromicSubstring("noon high it is") // "noon"