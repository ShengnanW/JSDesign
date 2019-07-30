/**
 * 实现Promise
 */

class OwnPromise{
    constructor(executer) {
        // console.log('executer');
        // 成功的值
        this.value = undefined;
        // 失败的值
        this.reason = undefined;
        // 状态
        this.status = 'pending';
        // 存放resolve回调函数
        this.resolveCallbacks = [];
        // 存放reject回调函数
        this.rejectCallbacks = [];

        // 设置resolve状态回调函数
        let resolve = value => {
            if (this.status === 'pending') {
                this.value = value;
                this.status = 'resolved';
                // 执行回调函数
                this.resolveCallbacks.forEach(fn => fn());
            } 
        };
        // 设置resject状态回调函数
        let reject = reason => {
            if (this.status === 'pending') {
                this.reason = reason;
                this.status = 'rejected';
                // 执行回调函数
                this.rejectCallbacks.forEach(fn => fn());
            } 
        };

        try {
            executer(resolve, reject);
        } catch (error) {
            this.reject(error);
        }
    }

    // 定义then方法
    then(onResolve, onReject) {
        // 执行resolve回调函数
        if (this.status === 'resolved') {
            onResolve(this.value);
        }

        if (this.status === 'rejected') {
            onReject(this.reason);
        }

        if (this.status === 'pending') {
            this.resolveCallbacks.push(() => onResolve(this.value));
            this.rejectCallbacks.push(() => onReject(this.reason));
        }
    }
}

// 简易版Promise
function P(fn) {
    var events = [];
    this.then = function(f) {
      events.push(f); 
      return this;
    }
    function resolve(newValue) {
      var f = events.shift();
      f(newValue, resolve);
    }
    fn(resolve);
}

const all  = function (promiseArr) {
    if (!Array.isArray(promiseArr)) {
        throw new TypeError ('you must pass an array');
    }

    return new Promise ((resolve, reject) => {
        let result = [];
        let index = 0;
        for (const i in promiseArr) {
            const ele = promiseArr [i];
            if (typeof ele === 'object' && typeof ele.then === 'function') {
                ele.then(res => {
                    result[i] = res;
                    if (--index === 0) resolve(result);
                }, reject);
                index ++;
            } else {
                result[i] = ele;
            }
             
        }
    });
};

const race = function (iterable) {
    return new Promise ((resolve, reject) => {
        for (const i in iterable) {
            const item = iterable[i];
            if (typeof item === 'object' && typeof item.then === 'function') {
                item.then(resolve, reject);
            } else {
                resolve(item);
            }
        }
    });
};

function test() {
    // let myPromise = new OwnPromise((resolvefn, rejectFn) => {
    //     setTimeout(() => resolvefn(111), 2000);
    // });
    // myPromise.then((res) => console.log(res));
    const p1 = new Promise(resolve => setTimeout(resolve, 200, 1));
    const p2 = new Promise(resolve =>setTimeout(resolve, 100, 2));
    all([p1, p2]).then(res => console.log(res));
}

test();
