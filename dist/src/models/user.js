var User = (function () {
    function User(data) {
        if (data === void 0) { data = {}; }
        this.connected = false;
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.avatarUrl = data.avatarUrl || '';
        this.creationDate = data.creation_date || Date.now();
        this.preferredLang = data.preferredLang || null;
        this.connected = data.connected || false;
    }
    User.prototype.getName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return User;
})();
exports.User = User;
//# sourceMappingURL=user.js.map