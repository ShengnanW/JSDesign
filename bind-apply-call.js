/**
 * 实现bind, call, apply函数
 */

Function.prototype.myCall = function (context, ...args) {
    let obj = context || window;
    obj.fn = this;
    // console.log(this); this就是指call作用的函数

    let argStr = args.join(',');
    const res = eval('obj.fn(argStr)');
    delete obj.fn;
    return res;
};

Function.prototype.myApply = function (context, args) {
    let obj = context || window;
    args = args || [];
    obj.fn = this;
    // console.log(this); this就是指call作用的函数

    let argStr = args.join(',');
    const res = eval('obj.fn(argStr)');
    delete obj.fn;
    return res;
};

Function.prototype.myBind = function (context, ...args) {
    let obj = context || window;
    obj.fn = this;
    // console.log(this); this就是指call作用的函数
    return obj.fn(...args);
};

function f1(x) {
    console.log(this.a, arguments, x);
}

function test() {
    let obj = {
        a: 1,
        b: 2,
        arr: [3,2],
    };
    // f1.myApply(obj, [2,3]);
    // f1.myCall(obj, 2);
    f1.bind(obj)(2);
}

test();