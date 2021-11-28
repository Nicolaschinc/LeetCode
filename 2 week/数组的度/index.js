/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    // 需要记录第一次出现的位置，最后一次出现位置，次数（哈希表）
    const map = new Map();
    let arr = [];
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (map.has(num)) {
        const [firstInd, LastInd, count] = map.get(num);
        map.set(num, [firstInd, i, count + 1]);
      } else {
        map.set(num, [i, i, 1]);
      }
    }
  
    for (const iterator of map) {
      const [key, value] = iterator;
  
      if (!arr.length) {
        arr.push(value);
      } else {
        const lastItem = arr[arr.length - 1];
        if (value[2] > lastItem[2]) {
          arr = [value];
        } else if (value[2] === lastItem[2]) {
          arr.push(value);
        }
      }
    }
  
    arr.forEach((item, ind) => {
      const len = item[1] - item[0] + 1;
      if (ind === 0) {
        result = len;
      } else {
        result = Math.min(result, len);
      }
    });
    return result;
  };