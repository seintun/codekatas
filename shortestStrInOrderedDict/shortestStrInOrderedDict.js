const str = "ababeecedasbacd";
const dict = ["a", "b", "c", "d"];

function shortestStrInOrderedDict(str, dict) {
  let result = "";
  let dictIdx = 0;
  let hash = {};
  for (let letter of str) {
    if (letter === dict[dictIdx]) {
      dictIdx += 1;
      result += letter;
      hash[letter] = true;
    } else
  }
  console.log(result);
}

shortestStrInOrderedDict(str, dict); // "asbacd"
