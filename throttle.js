/**
 * 节流函数
 * @param {function:传入函数} fn 
 * @param {int：延迟执行时间} delay 
 */

function throttle(fn, delay) {
    let timer = null;
    let start = new Date();

    return function () {
        const now = new Date();
        const context = this;
        const args = arguments;
        if ((now - start) > delay) {
            if (timer) {
                clearTimeout(timer);
                fn.apply(context, args);
            }else {
                timer = setTimeout(() => fn.apply(context, args), delay);
            }
            start = new Date();
        } 
    };
}

document.querySelector('body')
.addEventListener('click', throttle(() => console.log('click'), 2000));