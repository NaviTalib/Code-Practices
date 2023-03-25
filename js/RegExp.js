//!JavaScript Regular Expressions
/*A regular expression is a sequence of characters that forms a search pattern.

The search pattern can be used for text search and text replace operations.

*/
//?Syntax:/pattern/modifiers;
/*Example explained:

/w3schools/i  is a regular expression.

w3schools  is a pattern (to be used in a search).

i  is a modifier (modifies the search to be case-insensitive).

*/
/*The search() method uses an expression to search for a match, and returns the position of the match.

The replace() method returns a modified string where the pattern is replaced. */


let text = "Hello ! I am Talib";
//!console.log(text.search("Talib"));

console.log(text.replace("/talib/i","Navi Talib"));
