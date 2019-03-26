function reverse(arrayOfChars) {
  let leftIdx = 0,
    rightIdx = arrayOfChars.length - 1;

  while (leftIdx < rightIdx) {
    const temp = arrayOfChars[leftIdx];
    arrayOfChars[leftIdx] = arrayOfChars[rightIdx];
    arrayOfChars[rightIdx] = temp;

    leftIdx++;
    rightIdx--;
  }
}

// Tests

let desc = "empty string";
let input = "".split("");
reverse(input);
let actual = input.join("");
let expected = "";
assertEqual(actual, expected, desc);

desc = "single character string";
input = "A".split("");
reverse(input);
actual = input.join("");
expected = "A";
assertEqual(actual, expected, desc);

desc = "longer string";
input = "ABCDE".split("");
reverse(input);
actual = input.join("");
expected = "EDCBA";
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
