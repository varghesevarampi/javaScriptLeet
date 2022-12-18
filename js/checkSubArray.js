let input = [1,4,-7,-4,3]
let myHashSet = new Set();
myHashSet.add(0);
let sum=0;
for (const iterator of input) {
    sum+=iterator;
    if(myHashSet.has(sum)){
        console.log(true);
        break;
    }
    myHashSet.add(sum);
}
console.log(myHashSet)