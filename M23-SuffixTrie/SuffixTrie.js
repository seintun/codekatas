/**
Suffix Trie Construction

Write a class for a suffix-trie-like data structure. The class should have a "root" property set to be the root node of the trie. The class should support creation from a string and the searching of strings. The creation method (called populateSuffixTrieFrom()) will be called when the class is instantiated and should populate the "root" property of the class. Note that every string added to the trie should end with the special "endSymbol" character: "*".

Sample input (for creation):"babc"
Sample output (for creation):
{
	"c": {"*": True},
	"b": {
	"c": {"*": True},
	"a": {"b": {"c": {"*": True}}},
	},
	"a": {"b": {"c": {"*": True}}},
}
Sample input (for searching in the sufx trie above):"abc"
Sample output (for searching in the sufx trie above): True

 */

class SuffixTrie {
	constructor(string) {
	this.root = {};
	this.endSymbol = "*";
	this.populateSuffixTrieFrom(string);
	}

	populateSuffixTrieFrom(string) {
	  // Write your code here.
	}

	contains(string) {
	  // Write your code here.
	}
}

// Do not edit the line below.
module.exports = SuffixTrie;
