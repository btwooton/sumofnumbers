function sumFor(nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

function sumWhile(nums) {
  let result = 0;
  let index = 0;
  while (index < nums.length) {
    result += nums[index];
    index++;
  }
  return result;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) {
    return memo + num;
  });
}

const nums = [1, 2, 3, 4, 5];

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));
