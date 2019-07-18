/**
 * 每隔200ms向页面中添加一个字符
 * @param {字符串} str 
 */

// 延时函数
// function sleep(time, str) {
//     setTimeout(() => console.log(str), time);
// }


// function clearNode(parent, blink) {
//     let preNode = blink.previousSibling;
//     while(preNode) {
//         parent.removeChild(preNode);
//         preNode = blink.previousSibling;
//     }
// }

// 生成dom节点函数
function domInsert(div, blink,char) {
    let span = document.createElement('span');
    span.innerHTML = char;
    span.className = 'word color' + Math.floor(Math.random() * 24);
    div.insertBefore(span, blink);
}

function output(str) {
    const strArr = str.split('');
    let newArr = strArr.map(item => {
        switch(item) {
            case ' ':
                return '&nbsp;';
            case '<':
                return '&gt;';
            case ">":
                return '&lt;';
            case '\n':
                return '</br>';
            default: 
             return item;
        }
    });
    let div = document.querySelector('.content');
    let blink = document.querySelector('#jsBlink');
    let preNode = blink.previousSibling;
    while(preNode) {
        div.removeChild(preNode);
        preNode = blink.previousSibling;
    }
    for(let i=1, len = newArr.length; i<=len; i++) {
        let item = newArr[i-1];
        setTimeout(() => domInsert(div, blink, item), 200*i);
    }
}

output('hello world \n你好，世界');