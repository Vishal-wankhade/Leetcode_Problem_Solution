/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let i; // 'i' for index position
    for(i=0;i<nums.length;i++) // scans the entire array for 'target'
    {
        if(nums[i]==target) // if 'target' found equal to 'nums[i]'
        {
            return(i); // then return 'i', the current index value
        }
    }
    if(nums[nums.length-1]<target) // if last value smaller than 'target'
    {
        return(nums.length); // then return 'nums' length. 
        // As 'target' is bigger than the last value 
        // it should be placed after the last value
    }
    else if(nums[0]>target) // else if first value greater than 'target'
    {
        return(0); // then return 0. 
        // As 'target' is smaller than the first value 
        // it should be placed before first value at 0 index
    }
    else // look for appropriate index to place the 'target' value
    {
        for(i=0;i<nums.length;i++) // scanning through array once again
        {
            if(nums[i]<target) 
            // condition 1: 'nums[i]' value is smaller than 'target' 
            {
                if(nums[i+1]>target) 
                // condition 2: 'nums[i+1]' value is greater than 'target' 
                {
                    return(i+1); // then return 'i+1'
                    // As the 'target' value should be placed between 
                    // the current 'i' and 'i+1' value
                    // So the target's index will 'i+1' 
                }
            }
        }    
    }  
};