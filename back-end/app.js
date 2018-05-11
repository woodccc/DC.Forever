const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const cors = require('koa-cors')

const routes = require('./routes')

// error handler
onerror(app)

// 连接数据库
mongoose.connect('mongodb://localhost/TWood')     //连接本地数据库blog
const db = mongoose.connection
// 连接成功
db.on('open', function(){
	console.log('MongoDB Connection Successed');
});
// 连接失败
db.on('error', function(){
	console.log('MongoDB Connection Error');
});

// middlewares
app.use(cors())
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
routes.forEach((route) => {
	app.use(route.routes(), route.allowedMethods())
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
