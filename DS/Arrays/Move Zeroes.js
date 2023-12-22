/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let currentIndex = 0;
  if (nums.length) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[currentIndex++] = nums[i];
      }
    }
    while (currentIndex < nums.length) {
      nums[currentIndex++] = 0;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
