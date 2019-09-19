const twosum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }

}

// T: Test Case 1 
console.log(twosum([2, 7, 11, 19], 9));
// Expected  : [0,1]
// Delivered : [0,1]

// T: Test Case 2
console.log(twosum([3, 2, 4], 6));
    // Expected  : [1,2]
    // Delivered : [1,2]
