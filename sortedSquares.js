var sortedSquares = function(nums) {
    return nums.map(num => {return Math.pow(num, 2)}).sort((a,b) => {
        return a-b;
    });
};

let result = sortedSquares([-4,-1,0,3,10]);
console.log('result: ' + result);
