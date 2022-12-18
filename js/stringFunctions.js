let a= "var"
let b = "shirutti"
let sentence = "quick a brown fox jumps over something a"
console.log(typeof a)
console.log(a[1])
for(let item in a){
    console.log(a[item]);
    // so string is like a hashmap with each item representing a key i.e. 0,1,2
}
console.log(a.charAt(0)); // prints the character at 0
console.log(a.split(''));// splits into character array 

//characters can be compared with '<' or '>' like strcmp function
if(a<b){
    console.log("a less than b")
}

console.log(a.charAt(2)); // return character at index
console.log(a.concat(' ','is',' ',b)); //conctaenates words
console.log(a.endsWith('r'))
// includes checks for character or word in a sentence
console.log(a.includes(a)) //true
console.log(sentence.includes('fox')) // true

let indexOfFirtst = sentence.indexOf('a')
console.log(sentence.indexOf('a',indexOfFirtst+1))
console.log(sentence.lastIndexOf('a'))

"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10


const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}

const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...


const re = /(\w+)\s(\w+)/;
const names = "Maria Cruz";
const newname = names.replace(re, "$2, $1");
console.log(newname); // Cruz, Maria

const newline = "hey JudE";
const reg = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(reg)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation



const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""

const newStr = 'The quick brown fox jumps over the lazy dog.';
const words = newStr.split(' ');
console.log(words[3]);

//The search() method executes a search for a match between a regular expression and this String object.

//The substring() method returns the part of the string from the start index up to and excluding the end index,
// or to the end of the string if no end index is supplied.

//The trim() method removes whitespace from both ends of a string and returns a new string,
// without modifying the original string.

//The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

let something = "4"
console.log(typeof +something) //convert string to integer ; output number