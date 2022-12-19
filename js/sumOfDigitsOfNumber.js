let number = 256;
let myNumberArr= number.toString().split('');
let sum=0
myNumberArr.forEach((item)=>{
    sum+=+item;
})
console.log(sum)

// long way

let num = 256;
let result=0;
while(num>0){
    let divisor=Math.trunc(num/10)
    let remainder=num%10;
    result+=remainder;
    num=divisor;
}
console.log(result)