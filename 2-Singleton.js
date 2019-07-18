/**
 * 单例模式
 */

class Singleton {
    constructor() {
        this.instance; //用来标记是否已经存在实例
        this.init();  //初始化类
    }

    init() {
        console.log('我是一个Singleton类'); //执行某些操作，只会执行一次，；如登录框显示等。
    }

    static getInstance() {  // 获取单例的对外接口
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }
}


function test() {
    const obj1 = Singleton.getInstance();
    const obj2 = Singleton.getInstance();
    console.log(obj1 === obj2);
}
