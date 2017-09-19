const Koa = require('koa');
const app = new Koa();
// const db = require('./db');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const service = require('./service')

app.use(bodyParser());

// response
router.get('/', ctx => {
    ctx.body = 'Hello Koa';
});

router.get('/api/account/users', async ctx => {
    const users = await service.user.getUsers();
    ctx.body = {
        data: users
    };
});

app
    .use(router.routes())
    .use(router.allowedMethods());

const server = app.listen(3000, () => {
    console.log(`server is started...`)
});

module.exports = server;