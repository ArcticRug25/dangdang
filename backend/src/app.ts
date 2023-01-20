import Koa from 'koa'
import body from 'koa-body'
import json from 'koa-json'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()
router.prefix('/dang')

router.get('/test', async (ctx: Koa.Context) => {
  ctx.body = 'hi'
})

router.use(json())
router.use(body())

app.use(router.routes())
app.listen(3002)
