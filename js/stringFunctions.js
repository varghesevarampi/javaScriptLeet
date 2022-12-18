let a= "var"
console.log(typeof a)
console.log(a[1])
for(let item in a){
    console.log(a[item]);
    // so string is like a hashmap with each item representing a key i.e. 0,1,2
}
console.log(a.charAt(0)); // prints the character at 0
console.log(a.split(''));// splits into character array 

//characters can be compared with '<' or '>' like strcmp function