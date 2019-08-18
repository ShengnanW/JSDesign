var rightSideView = function(root) {
    let n = 0;
    let res = [];
    if (!root[0]) return [null];
    let num = 0;
    while(n<root.length){
        const range = Math.pow(2, num);
        let temp = root.concat().splice(n, range);
        res.push(temp.filter(item => !!item).reverse()[0]);
        num++;
        n += range;
    }
    return res;
};

var countArrangement = function(N) {
    if (N<0) return 0;
    let arr = new Array(N+1);
    arr.fill(0);
    let res = 0;
    
    const dfs = pos => {
        if (pos > N) {
            res += 1;
            return;
        }
        for(let i=1; i<N+1; i++) {
            if(!arr[i] && (i%pos === 0 || pos%i === 0)){
                arr[i] = 1;
                dfs(pos+1);
                arr[i] = 0;
            }
        }
    };
    dfs(1);
    return res;
};

var maxProduct = function(nums) {
    const len = nums.length;
    if(len === 0) return 0;
    let res = nums[0];
    let neg = nums.filter(item => item<0);
    
    for(let i=1; i<len;i++){
        const num = nums[i];
        if(num === 0) {
            if(res < 0) {
                res = num;
            }else{
                return res;
            }
        }else if(num <0 && neg.length%2 === 1 && neg[neg.length-1] === num){
           return res; 
        }else{
            res = res !== 0 ? res*num : num;
        }
    } 
    return res;
};

// console.log(rightSideView([1,2,3,null,5,null,4]));
// console.log(countArrangement(2));
console.log(maxProduct([2,0,-1]));