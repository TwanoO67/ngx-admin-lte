var Notification = (function () {
    function Notification(data) {
        if (data === void 0) { data = {}; }
        this.content = data.content || '';
        this.class = data.class || '';
        this.link = data.link || '';
    }
    return Notification;
})();
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map