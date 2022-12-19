//convert 1=A, 2=B, Z=BB

let columnNumber = 701;
let output = '';
while(columnNumber>0){
    let divisor = Math.trunc(columnNumber/26);
    let remainder = columnNumber % 26;
    if(remainder>0){
        output+=(remainder+9).toString(36);
    }else if(remainder===0){
        output+='z';
        divisor-=1;
    }
    columnNumber=divisor;
}
console.log(output.split('').reverse().join('').toLocaleUpperCase())



