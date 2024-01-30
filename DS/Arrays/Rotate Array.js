/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverse(array, start, end) {
  let max = (end - start) / 2;
  for (let i = 0; i < max; i++) {
    const temp = array[start];
    array[start] = array[end - i];
    array[end - i] = temp;
    start++;
  }
  return array;
}
var rotate = function (nums, k) {
  k = k % nums.length;
  nums = reverse(nums, 0, nums.length - 1);
  nums = reverse(nums, 0, k - 1);
  nums = reverse(nums, k, nums.length - 1);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
