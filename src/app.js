const Koa = require('koa');
const app = new Koa();
// const db = require('./db');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const service = require('./service');
const api = require('./api');

app.use(bodyParser());

// response
router.get('/', ctx => {
    ctx.body = 'Hello Koa';
});

api.initialize(app);

app
    .use(router.routes())
    .use(router.allowedMethods());

// if (process.env.NODE_ENV !== 'test') {
//     app.listen(3000, () => {
//         console.log(`server is started...`)
//     });
// }

const server = app.listen(3000, () => {
    console.log(`server is started...`)
});

module.exports = server;