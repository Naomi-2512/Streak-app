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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var Habits = /** @class */ (function () {
    function Habits() {
        var _this = this;
        this.btn = document.querySelector('.submit');
        this.myInput = document.querySelector('#one');
        this.today = document.querySelector('#two');
        this.myError = document.querySelector('.error');
        this.myDisplay = document.querySelector('.display');
        var fetchData = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var data1, receivedData, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('http://localhost:3000/holder')];
                    case 1:
                        receivedData = _a.sent();
                        return [4 /*yield*/, receivedData.json()];
                    case 2:
                        data1 = _a.sent();
                        resolve(data1);
                        console.log(data1);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        reject('error in fetching');
                        return [3 /*break*/, 4];
                    case 4:
                        data1.forEach(function (element) {
                            var element1 = document.createElement('div');
                            element1.className = 'element1';
                            var icon = document.createElement('img');
                            icon.setAttribute('src', '12789412.png');
                            icon.className = 'icon';
                            var habit1 = document.createElement('h1');
                            habit1.textContent = element.activity;
                            habit1.className = 'habit1';
                            var date1 = document.createElement('h2');
                            date1.textContent = element.startDate;
                            date1.className = 'date1';
                            var day1 = document.createElement('h2');
                            day1.textContent = element.days;
                            day1.className = 'day1';
                            var button1 = document.createElement('button');
                            button1.textContent = 'delete';
                            button1.className = 'button1';
                            element1.appendChild(icon);
                            element1.appendChild(habit1);
                            element1.appendChild(date1);
                            element1.appendChild(day1);
                            element1.appendChild(button1);
                            _this.myDisplay.appendChild(element1);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.btn.addEventListener('click', function (event) {
            event.preventDefault();
            var habitInput = _this.myInput.value;
            var todayDate = _this.today.value;
            if (habitInput === '' || todayDate === '') {
                _this.myError.textContent = 'Enter a value';
            }
            else {
                var submittedDate = new Date(todayDate);
                var currentDate = new Date();
                submittedDate.setHours(0, 0, 0, 0);
                currentDate.setHours(0, 0, 0, 0);
                var daysCount = Math.ceil((Math.abs(currentDate.getTime() - submittedDate.getTime())) / (1000 * 60 * 60 * 24));
                console.log(daysCount);
                var yourObject_1 = {
                    id: Date.now(),
                    activity: habitInput,
                    startDate: todayDate,
                    days: daysCount
                };
                var pushData = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var postedData, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fetch('http://localhost:3000/holder', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(yourObject_1)
                                    })];
                            case 1:
                                postedData = _a.sent();
                                if (!postedData) {
                                    console.log("error ".concat(postedData));
                                }
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _a.sent();
                                reject('there was an error saving data');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                var fetchData_1 = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var data1, receivedData, error_3;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, fetch('http://localhost:3000/holder')];
                            case 1:
                                receivedData = _a.sent();
                                return [4 /*yield*/, receivedData.json()];
                            case 2:
                                data1 = _a.sent();
                                resolve(data1);
                                console.log(data1);
                                return [3 /*break*/, 4];
                            case 3:
                                error_3 = _a.sent();
                                reject('error in fetching');
                                return [3 /*break*/, 4];
                            case 4:
                                data1.forEach(function (element) {
                                    var element1 = document.createElement('div');
                                    element1.className = 'element1';
                                    var icon = document.createElement('img');
                                    icon.setAttribute('src', '12789412.png');
                                    icon.className = 'icon';
                                    var habit1 = document.createElement('h1');
                                    habit1.textContent = element.activity;
                                    habit1.className = 'habit1';
                                    var date1 = document.createElement('h2');
                                    date1.textContent = element.startDate;
                                    date1.className = 'date1';
                                    var day1 = document.createElement('h2');
                                    day1.textContent = element.days;
                                    day1.className = 'day1';
                                    var button1 = document.createElement('button');
                                    button1.textContent = 'delete';
                                    button1.className = 'button1';
                                    element1.appendChild(icon);
                                    element1.appendChild(habit1);
                                    element1.appendChild(date1);
                                    element1.appendChild(day1);
                                    element1.appendChild(button1);
                                    _this.myDisplay.appendChild(element1);
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        });
    }
    return Habits;
}());
var myObject = new Habits();
