let nums = [10,2,5];

nums.sort();
console.log(nums)

// Acde -> [2,5,10] 
nums.sort((a,b)=> a-b);
console.log(nums)

// Desc -> [10,5,2]
nums.sort((a,b)=> b-a);
console.log(nums)


