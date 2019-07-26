## 单页面路由
### 优点：
1. 减少http请求，从而减轻服务器的压力，在本地可以实现切换HTML文件；
2. 减少页面响应的时间，增强用户体验，增加使用APP的流畅性；

### 路由实现方式
1. 利用location.hash、监听hashchange时间实现路由；
2. history API，使用HTML5的API，popState等。