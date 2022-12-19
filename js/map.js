let myMap = new Map();
myMap.set(2,3);
myMap.get(2);
myMap.has(2);//returns true
myMap.forEach((v,k)=>{
    console.log(`key is ${k} and value is ${v}`);
})