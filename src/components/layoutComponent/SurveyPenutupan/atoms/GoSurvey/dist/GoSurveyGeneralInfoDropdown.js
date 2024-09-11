"use strict";
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
        while (_) try {
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
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var FontAwesome6_1 = require("react-native-vector-icons/FontAwesome6");
var GoSurveyOptionModal_1 = require("../../../../reusableComponent/Modal/GoSurveyOptionModal");
var goSurveyGeneralInfoDataList_1 = require("../../../../../services/data/goSurveyGeneralInfoDataList");
var GoSurveyGeneralInfoDropdown = function (_a) {
    var data = _a.data, fieldName = _a.fieldName, onChange = _a.onChange, placeholder = _a.placeholder, properties = _a.properties, dependencies = _a.dependencies;
    var _b = react_1.useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var setModalVisibility = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    var _c = react_1.useState(''), searchFilter = _c[0], setSearchFilter = _c[1];
    var _d = react_1.useState(''), selectedFilter = _d[0], setSelectedFilter = _d[1];
    var _e = react_1.useState([]), dynamicData = _e[0], setDynamicData = _e[1];
    react_1.useEffect(function () {
        var getDropDownData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var responseData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, 8, 9]);
                        responseData = void 0;
                        if (!(properties === 'tipe')) return [3 /*break*/, 2];
                        return [4 /*yield*/, goSurveyGeneralInfoDataList_1.goSurveyDataByProperties(properties, dependencies === null || dependencies === void 0 ? void 0 : dependencies.make)];
                    case 1:
                        responseData = _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(properties === 'model')) return [3 /*break*/, 4];
                        return [4 /*yield*/, goSurveyGeneralInfoDataList_1.goSurveyDataByProperties(properties, dependencies === null || dependencies === void 0 ? void 0 : dependencies.make, dependencies === null || dependencies === void 0 ? void 0 : dependencies.tipe)];
                    case 3:
                        responseData = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, goSurveyGeneralInfoDataList_1.goSurveyDataByProperties(properties)];
                    case 5:
                        responseData = _a.sent();
                        _a.label = 6;
                    case 6:
                        setDynamicData(responseData || []);
                        return [3 /*break*/, 9];
                    case 7:
                        error_1 = _a.sent();
                        console.error("Error fetching data for " + properties + ": ", error_1);
                        return [3 /*break*/, 9];
                    case 8: return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        if (isDropdownOpen)
            getDropDownData();
    }, [properties, dependencies === null || dependencies === void 0 ? void 0 : dependencies.make, dependencies === null || dependencies === void 0 ? void 0 : dependencies.tipe, isDropdownOpen]);
    var handleSelectedFilter = function (value) {
        if (properties === 'merek') {
            onChange === null || onChange === void 0 ? void 0 : onChange('tipe', '');
            onChange === null || onChange === void 0 ? void 0 : onChange('model', '');
        }
        else if (properties === 'tipe') {
            onChange === null || onChange === void 0 ? void 0 : onChange('model', '');
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(properties, value);
        setSelectedFilter(value);
        setIsDropdownOpen(false);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2 mt-2" },
        fieldName !== '' ? (react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize text-xs" }, fieldName),
            react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize text-xs" }, ":"))) : (''),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsDropdownOpen(true); }, className: "relative flex-1 flex-row items-center border border-gray-300 bg-gray-100 rounded pr-3" },
            react_1["default"].createElement(react_native_1.TextInput, { value: data, placeholder: placeholder, editable: false, className: "flex-1 text-black text-xs uppercase py-1 px-2" }),
            react_1["default"].createElement(FontAwesome6_1["default"], { name: isDropdownOpen ? 'chevron-up' : 'chevron-down', size: 16, color: "black" })),
        isDropdownOpen && (react_1["default"].createElement(GoSurveyOptionModal_1["default"], { visible: isDropdownOpen, data: dynamicData, onClose: setModalVisibility, title: fieldName, searchFilter: searchFilter, setSearchFilter: setSearchFilter, onSelectedFilter: handleSelectedFilter, selectedFilter: data }))));
};
exports["default"] = GoSurveyGeneralInfoDropdown;
