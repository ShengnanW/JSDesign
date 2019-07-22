/**
 * 实现ajax请求
 */
 function Ajax(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', './mock.js');
    xhr.send(); //可以传递参数
    // 设置请求头
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 

    // 监听状态
    xhr.onreadystatechange(
        () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        }
    );
 }