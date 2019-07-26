/**
 * 实现一个类
 */
// 构造函数的方法
function MyClass(a, b) {
    this.a = a;
    this.b = b;
}

MyClass.prototype.print = function () {
    console.log(this, print.name); //MyClassa: 1b: 2__proto__: Object "print"
}

// const my = new MyClass(1,2);
// my.print();

// Object.create()方法
const object = {
    a: 1,
    b: 2,
    print: () => console.log(this.name, this),
    print2: function () {console.log(this.name, this)},
};

const obj1 = {
    obj: object
};

// https://www.cnblogs.com/var-chu/p/8476464.html
let obj2 = Object.create(object); // Object.create()的本质就是将obj2的proptype设置为object
obj2.name = 'obj2';
obj2.print(); // window
object.print(); // window
obj1.obj.print(); // window
obj2.print2(); // obj2 {name: "obj2"}
object.print2(); // undefined {a: 1, b: 2, print: ƒ, print2: ƒ}
obj1.obj.print2(); // undefined {a: 1, b: 2, print: ƒ, print2: ƒ}

// this指向问题
/**
 * 箭头函数中的this，指向与一般function定义的函数不同，箭头函数this的定义：箭头函数中的this是在定义函数的时候绑定，而不是在执行函数的时候绑定;
 * 所谓的定义时候绑定, 继承的是父执行上下文里面的this;
 * 注意：简单对象（非函数）是没有执行上下文的!
 */
var a = 11;
function test1(){
    this.a = 22;
    let b = function(){
      console.log(this.a);
    };
    b();
}

function test2(){
    this.a = 22;
    let b = () => {console.log(this.a)}
    b();
}

function test3(){
    this.a = 22;
    console.log(this);  
    function c(){
        console.log(this); 
        console.log(this.a);
    };
    c();
}

let x = new test2(); // 输出22 简单对象（非函数）是没有执行上下文的!
test2();  // 输出22
let x = new test1(); // 输出11
test1(); // 输出22
let x = new test3(); // 输出test3 {a: 22} window 11 简单对象（非函数）是没有执行上下文的!
test3();  //输出 window window 22 不是对象！！


// ES5模拟箭头函数
// ES6
function Fn6() {
    setTimeout(() => console.log('this', this), 1000); // this Window
}

// ES5
function Fn5() {
    const _this = this;
    setTimeout(function () {
        console.log('this', _this);  // this Window
    }, 1000);
}

// 利用极简式
let createObj3 = {
    initNew: function() {
        let createObj3 = {};
        createObj3.name = 'obj3';
        createObj3.print = function (a) {
            console.log('Hi ' + a + ', I am ' + createObj3.name);
        };
        return createObj3;
    }
};

let obj3 = createObj3.initNew();
obj3.print('World');


/**
 * 实现继承
 */
// 利用原型
// 原型+构造函数
// 寄生组合式
// es6