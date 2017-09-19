class UserRepository {
    constructor(model) {
        this.model = model;
    }

    async addUser(username, email, first_name, last_name) {
        const _model = new this.model({
            username: username,
            email: email,
            first_name: first_name,
            last_name: last_name
        });
        await _model.save();
        return _model;
    }

    getUserByUsername(username) {
        return this.model.findOne({
            username: username
        });
    }

    getUserById(id) {
        return this.model.findOne({
            _id: id
        });
    }

    getUsers(page, size) {
        return this.model.find({})
            .skip((page - 1) * size)
            .limit(size)
            .exec();
    }

}

module.exports = UserRepository;