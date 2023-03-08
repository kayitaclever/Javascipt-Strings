var b = "extravaganza"
var lastfour = b.slice(-4);
console.log(lastfour);

// Insert the following string at the fourth index of the below variable:
// "eat"
// const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
var hot = food.slice(0,4)+"eat"+ food.slice(4);
console.log(hot);

// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."brown"
// const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog";
const count = (story.match(/the/g) || []).length;
console.log(count);
const count1 = (story.match(/brown/g) || []).length;

// Using JavaScript, find the following words from the following strings:
// 1. "are"
// const string1 = "The pupils are reading in the library";
// 2. "sitting"
// const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
let find= string1.search("are");
console.log(find);
const string2 = "The child was sitting on the table before it fell";
let look = string2.search("sitting");
console.log(look);

// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "UndERneath"
// 3. Title case "A wonderful world"

const word1 = "wonderful";
let result = word1.toUpperCase("wonderful");
console.log(result);

const word2 = "amazing";
const word3 = "UndERneath"
let convert = word2.toLowerCase("amazing");
let convert1 = word3.toLowerCase("UndERneath");
console.log(convert);
console.log(convert1);

let word4 = "A wonderful world";
word4=word4.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(word4);


