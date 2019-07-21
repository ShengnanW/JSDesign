/**
 * 防抖函数
 * @param {function: 传入的函数} fn 
 * @param {int：延迟时间} time 
 */

function debounce(fn, time) {
    let timer = null;

    return function () {
        if (timer) clearTimeout(timer);
        let context = this;

        timer = setTimeout(() => fn.apply(context, arguments), time);
    };
}

document.querySelector('body')
.addEventListener('click', debounce(() => console.log('click'), 2000));