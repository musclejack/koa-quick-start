const Koa = require('koa')
const app = new Koa()

const router = require('./router')
// 此处开始堆叠各种中间件
//...
app.use(require('koa-static')(__dirname + '/public'))

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`) // 打印URL
    await next() // 调用下一个middleware
})

app.use(async (ctx, next) => {
    const start = new Date().getTime() // 当前时间
    await next() // 调用下一个middleware
    const ms = new Date().getTime() - start // 耗费时间
    console.log(`Time: ${ms}ms`) // 打印耗费时间
})
class Point {
    constructor (a) {
        this.a = a
    }
    value () {
        console.log(this.a)
    }
} 
const tyty = new Point(1)
tyty.value()
app.use(router.routes())
app.listen(3000);