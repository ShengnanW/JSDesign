- 单向数据流是指数据的流向只能由父组件通过props将数据传递给子组件，不能由子组件向父组件传递数据，要想实现数据的双向绑定，只能由子组件接收父组件props传过来的方法去改变父组件的数据，而不是直接将子组件的数据传递给父组件。
- 单向数据量组件props是父级往下传递，你不能向上去修改父组件的数据，并且也不能在自身组件中修改props的值。
React不算mvvm，虽然可以实现双向绑定，在React中实现双向绑定通过state属性，但如果将state绑定到视图中时，直接修改state属性是不可的，需要通过调用setState去触发更新视图，反过来视图如果要更新也需要监听视图变化 然后调用setState去同步state状态。标准MVVM应该属于给视图绑定数据后，操作数据即是更新视图
- 