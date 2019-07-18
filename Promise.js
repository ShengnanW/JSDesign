var a = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('a'), 1000);
});
function fn(callback) {
    setTimeout(() => callback(), 1000);
}

function b(b) {
    return new Promise(resolve => {
        a().then(a => {
            console.log(a); // 'a'
            fn(() => setTimeout(() => {
                console.log(b, a);  // undefined "a" "a"
                resolve(b+a);
            }, 1000))
        })
    })
}
// console.log(b('1').then())
function c(c) {
    a()
    .then(res => {
        b(res).then(res2 => {
            console.log(res2+c); // 'undefinedaaa'
        });
    })
}
    
c('a');