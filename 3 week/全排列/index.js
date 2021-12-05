/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ans = [];
    const list = []
    const used = nums.map(()=> false);
    const sortNums = nums.sort((a,b)=>a-b);

    const len = sortNums.length;

    function recur() {
        // 边界判断
        if(list.length === len) ans.push(list.slice());

        for(let i=0;i<len;i++){
            if(i > 0 && sortNums[i] === sortNums[i - 1] && !used[i - 1]) continue;
            if(!used[i]){
                list.push(sortNums[i]);
                used[i] = true;
                recur();
                list.pop();
                used[i] = false;
            }
        }
    }
    recur();
    return ans;
};