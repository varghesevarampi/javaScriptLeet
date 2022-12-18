const inputArr=[1,5,7,8,23,45];
const target = 31;

const myMap = new Map();
inputArr.forEach((item,index)=>{
    myMap.set(item,index);
});


for (const [key,value] of myMap) {
    let complement = target-key;
    if(myMap.has(complement)){
        console.log(`Found result ${value} ${myMap.get(complement)}`);
        break;
    }
}
