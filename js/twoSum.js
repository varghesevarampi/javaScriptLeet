


// var twoSum = function(nums, target) {
//     for (const index of nums) {   
//         let complement = target-nums[index];
//         let otherElement = nums.indexOf(complement,index);
//         if(otherElement===index){
//             otherElement = nums.indexOf(complement,otherElement+1);
//         }
//         if(otherElement!==-1){
//             return [index,otherElement];
//         }
//     };
// }

console.log(twoSum([2,7,11,15],9));
let nums = [3,2,4];
let target = 6;
let myMap = new Map();
nums.forEach((item,index)=>{
    myMap.set(target-item,index);
});
for(let i=0;i<nums.length;i++){
    if(myMap.has(nums[i])){
        return [i,myMap.get(nums[i])]
    }
}
