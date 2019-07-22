/**
 * 页面上存在id为jsBlink的下划线闪动节点，请按照如下需求实现 output 函数
1、函数 output 接收一个字符串参数，每隔200毫秒在闪动节点之前逐个显示字符
2、请新建span节点放置每个字符，其中span必须存在class "word"，并随机加上 color0 ~ color23 中的任一个class（请使用系统随机函数）
3、每次输出指定字符串前，请将闪动节点之前的所有其他节点移除
4、不要销毁或者重新创建闪动节点
5、如果输出字符为空格、<、>，请分别对其进行HTML转义，如果是\n请直接输出<br />，其他字符不需要做处理
6、请不要手动调用output函数
7、当前界面为系统执行 output('hello world\n你好世界') 之后，最终的界面，过程请参考以下图片
8、请不要手动修改html和css
9、不要使用第三方插件
10、请使用ES5语法
 */

function transStr(str) {
    const charArr = str.split('');
    const transStrArr = charArr.map(item => {
        switch(item) {
            case ' ':
                return '&nbsp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '\n':
                return '<br />';
            default:
                return item; 
        }

    });
    return transStrArr;
}

function createSpanEle(char) {
    var ele = document.createElement('span');
    const randomNum = Math.floor(Math.random() * 24);
    ele.innerHTML = char;
    ele.className = 'word color' + randomNum;
    return ele;
}

function output(str) {
    const charArr = transStr(str);
    // console.log(charArr);
    const divEle = document.querySelector('.content');
    const blinkEle = document.querySelector('#jsBlink');
    for(let i=0,len=charArr.length; i<len; i++) {
        setTimeout(() => {
            const item = charArr[i];
            const ele = createSpanEle(item);
            divEle.insertBefore(ele, blinkEle);
        }, 200)
    }
}
output('qwer <>\n');
