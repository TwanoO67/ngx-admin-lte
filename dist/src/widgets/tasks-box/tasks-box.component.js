var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TasksBoxComponent = (function () {
    function TasksBoxComponent() {
        this.tasksLength = { 0: 0 };
    }
    TasksBoxComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TasksBoxComponent.prototype, "user");
    TasksBoxComponent = __decorate([
        core_1.Component({
            /* tslint:disable */
            selector: '.tasksBox',
            /* tslint:enable */
            styleUrls: ['./tasks-box.component.css'],
            templateUrl: './tasks-box.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TasksBoxComponent);
    return TasksBoxComponent;
})();
exports.TasksBoxComponent = TasksBoxComponent;
//# sourceMappingURL=tasks-box.component.js.map