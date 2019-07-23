/**
Balanced Brackets

Write a function that takes in a string made up of brackets ("(", "[", "{", ")", "]", and "}") and other optional characters. The function should return a boolean representing whether or not the string is balanced in regards to brackets. A string is said to be balanced if it has as many opening brackets of a given type as it has closing brackets of that type and if no bracket is unmatched. Note that a closing bracket cannot match a corresponding opening bracket that comes after it. Similarly, brackets cannot overlap each other as in "[(])".

Sample input: "([])(){}(())()()"
Sample output: True (it is balanced)
 */

function balancedBrackets(string) {
  // Write your code here.
	const openingBrack = "([{";
	const closingBrack = ")]}";
	const matchingPairs = {
		")":"(",
		"]":"[",
		"}":"{"
	};
	const stack = []; // storing opening bracket to be popped when matching found
	for (const char of string){
		if(openingBrack.includes(char)) stack.push(char); // compare & push stack if char matches with openBrack
		else if(closingBrack.includes(char)){
			if(stack.length === 0) return false; // edge cases when a closing brack exist while stack is none
			if(stack[stack.length-1] === matchingPairs[char]) stack.pop(); // pop corresponding brack from stack
			else return false; // if the last stack is not openingBrack of current char; validated with hashMap
		}
	}
	return stack.length === 0; // final validation to ensure stack is empty
}

// Do not edit the line below.
module.exports = balancedBrackets;
