/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var map = {};
  for(let i=0;i<nums.length;i++){
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]]=true;
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
