/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

//Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res = [];
    var HashMap = new Map();
    for (var i=0; i<nums.length; i++) {
        if (HashMap.has(nums[i])) {
            res.push(HashMap.get(nums[i]));
            res.push(i);
        } else {
            HashMap.set(target-nums[i], i);
        }
    }
    return res;
};