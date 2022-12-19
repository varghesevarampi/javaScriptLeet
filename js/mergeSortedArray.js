var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length);
    nums2.splice(n,nums2.length)
    nums1 = [...nums1,...nums2].sort()
    return nums1;
};
nums1=[1,2,3,0,0,0];
nums2=[2,5,6]
m=3;
n=3
console.log(merge(nums1,m,nums2,n))