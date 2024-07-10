let nums = [3, 2, 1, 5, 6, 4];
let value = [];
function largeValueNumber() {
  for (let index = 0; index < nums.length; index++) {
    let element = nums[index];
    for (let outer = 1; outer < nums.length; outer++) {
      let element1 = nums[outer];
      if (element < element1) {
        value.push((element = element1));
      }
      console.log(value);
    }
    let spliced = value.splice(nums.indexOf(nums), 1);
    let shifted = value.unshift(element);
    console.log(spliced);
    console.log(shifted);
  }
}
largeValueNumber();
