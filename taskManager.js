var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Task = /** @class */ (function () {
    function Task(id, title, description, completed) {
        if (completed === void 0) { completed = false; }
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    Task.prototype.markAsCompleted = function () {
        this.completed = true;
    };
    Task.prototype.toString = function () {
        return "".concat(this.title, " (ID: ").concat(this.id, ") - ").concat(this.completed ? "Completed" : "Pending");
    };
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager(db) {
        this.tasks = [];
        this.db = db;
    }
    TaskManager.prototype.addTask = function (title, description) {
        return __awaiter(this, void 0, void 0, function () {
            var newTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newTask = new Task(this.tasks.length + 1, title, description);
                        this.tasks.push(newTask);
                        return [4 /*yield*/, this.db.save(newTask)];
                    case 1:
                        _a.sent(); // Simulating saving to a database
                        return [2 /*return*/, newTask];
                }
            });
        });
    };
    TaskManager.prototype.updateTask = function (taskId, title, description) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.fetch(taskId)];
                    case 1:
                        task = _a.sent();
                        if (!task) return [3 /*break*/, 3];
                        task.title = title;
                        task.description = description;
                        return [4 /*yield*/, this.db.update(task)];
                    case 2:
                        _a.sent(); // Simulating updating a database record
                        return [2 /*return*/, task];
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    TaskManager.prototype.getTask = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.fetch(taskId)];
            });
        });
    };
    TaskManager.prototype.listTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.fetchAll()];
                    case 1:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks.map(function (task) { return task.toString(); }).join("\n")];
                }
            });
        });
    };
    return TaskManager;
}());
// Mock Database class implementing the Database interface
var InMemoryDatabase = /** @class */ (function () {
    function InMemoryDatabase() {
        this.storage = new Map();
    }
    InMemoryDatabase.prototype.save = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.storage.set(task.id, task);
                return [2 /*return*/];
            });
        });
    };
    InMemoryDatabase.prototype.update = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.storage.has(task.id)) {
                    this.storage.set(task.id, task);
                }
                return [2 /*return*/];
            });
        });
    };
    InMemoryDatabase.prototype.fetch = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this.storage.get(taskId)) !== null && _a !== void 0 ? _a : null];
            });
        });
    };
    InMemoryDatabase.prototype.fetchAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.storage.values())];
            });
        });
    };
    return InMemoryDatabase;
}());
// Example Usage
(function () { return __awaiter(_this, void 0, void 0, function () {
    var db, manager, task1, task2, _a, _b, _c, _d, fetchedTask;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                db = new InMemoryDatabase();
                manager = new TaskManager(db);
                return [4 /*yield*/, manager.addTask("Finish TypeScript project", "Complete all modules and submit")];
            case 1:
                task1 = _e.sent();
                return [4 /*yield*/, manager.addTask("Grocery Shopping", "Buy vegetables, fruits, and bread")];
            case 2:
                task2 = _e.sent();
                console.log("All Tasks:");
                _b = (_a = console).log;
                return [4 /*yield*/, manager.listTasks()];
            case 3:
                _b.apply(_a, [_e.sent()]);
                // Updating a task
                return [4 /*yield*/, manager.updateTask(task1.id, "Finish TypeScript project", "Complete all modules and tests")];
            case 4:
                // Updating a task
                _e.sent();
                console.log("\nAfter Update:");
                _d = (_c = console).log;
                return [4 /*yield*/, manager.listTasks()];
            case 5:
                _d.apply(_c, [_e.sent()]);
                return [4 /*yield*/, manager.getTask(task1.id)];
            case 6:
                fetchedTask = _e.sent();
                console.log("\nFetched Task:");
                if (fetchedTask) {
                    console.log(fetchedTask.toString());
                }
                return [2 /*return*/];
        }
    });
}); })();
