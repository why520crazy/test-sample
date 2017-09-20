const Router = require('koa-router');
const service = require('../service');
class UserAPI {

    constructor(app) {
        this.router = new Router();
        this.router.post('/api/account/user', this.addUser());
        this.router.get('/api/account/users', this.getUsers());

        app
            .use(this.router.routes())
            .use(this.router.allowedMethods());
    }

    static initialize(app) {
        return new UserAPI(app);
    }

    addUser() {
        return async (ctx) => {
            const user = ctx.request.body;
            const responseUser = await service.user.addUser(user.username, user.email, user.first_name, user.last_name);
            ctx.body = {
                data: responseUser
            };
        };
    }

    getUsers() {
        return async (ctx) => {
            const users = await service.user.getUsers();
            ctx.body = {
                data: users
            };
        };
    }

    // getUser() {
    //     return async (ctx) => {
    //         const user = await service.user.getUser(ctx.request.params.id);
    //         ctx.body = {
    //             data: user
    //         };
    //     }
    // }
}

module.exports = UserAPI;