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

// class Mypromise{
//     constructor(executor){
//       this.state = 'pending';
//       this.value = undefined;
//       this.reason = undefined;
//       // 成功存放的数组
//       this.onResolvedCallbacks = [];
//       // 失败存放法数组
//       this.onRejectedCallbacks = [];
//       let resolve = value => {
//         if (this.state === 'pending') {
//           this.state = 'fulfilled';
//           this.value = value;
//           // 一旦resolve执行，调用成功数组的函数
//           this.onResolvedCallbacks.forEach(fn=>fn());
//         }
//       };
//       let reject = reason => {
//         if (this.state === 'pending') {
//           this.state = 'rejected';
//           this.reason = reason;
//           // 一旦reject执行，调用失败数组的函数
//           this.onRejectedCallbacks.forEach(fn=>fn());
//         }
//       };
//       try{
//         executor(resolve, reject);
//       } catch (err) {
//         reject(err);
//       }
//     }
//     then(onFulfilled,onRejected) {
//       if (this.state === 'fulfilled') {
//         onFulfilled(this.value);
//       };
//       if (this.state === 'rejected') {
//         onRejected(this.reason);
//       };
//       // 当状态state为pending时
//       if (this.state === 'pending') {
//         // onFulfilled传入到成功数组
//         this.onResolvedCallbacks.push(()=>{
//           onFulfilled(this.value);
//         })
//         // onRejected传入到失败数组
//         this.onRejectedCallbacks.push(()=>{
//           onRejected(this.reason);
//         })
//       }
//     }
// }

// 测试
function test() {
    let myPromise = new OwnPromise((resolvefn, rejectFn) => {
        setTimeout(() => resolvefn(111), 2000);
    });
    myPromise.then((res) => console.log(res));
}

test();
