
/**
 * 
 * @param {double 底数} base 
 * @param {int 整数幂} exp 
 */
function Power(base, exp) {
    if (base === 0) return 0;
    if (exp === 0) return 1;

    let index = 0;
    let res = base;
    while(Math.pow(2, index) < Math.abs(exp)) {
        res = res*res;
        index++;
    }
    res = Math.abs(exp)&1 === 1 ? res / base : res;
    return exp>0 ? res : 1/res;
}

function test() {
    console.log(Power(2,-4));
}

test();