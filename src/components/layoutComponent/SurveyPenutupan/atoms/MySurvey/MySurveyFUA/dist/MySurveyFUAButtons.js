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
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var ConfirmationModal_1 = require("../../../../../reusableComponent/Modal/ConfirmationModal");
var MySurveyFUAButtons = function (_a) {
    var item = _a.item, onSaveFua = _a.onSaveFua, onTriggerSubmitFua = _a.onTriggerSubmitFua;
    var _b = react_1.useState(false), confirmedGoSurvey = _b[0], setConfirmedGoSurvey = _b[1];
    var navigationToHistory = native_1.useNavigation();
    var navigationToGoSurvey = native_1.useNavigation();
    var handleSaveFuaPressed = function () {
        react_native_1.Alert.alert('Follow Up Activity', 'Your FUA has been saved!', [
            { text: 'OK' },
        ]);
        onSaveFua();
    };
    var handleOpenHistoryFua = function () {
        navigationToHistory.navigate('surveyPenutupanHistoryFUA', { item: item });
    };
    var handleCallContactPerson = function () {
        var phoneNumber = "tel:" + item.noTelp;
        react_native_1.Linking.openURL(phoneNumber);
    };
    var handleOpenGoSurveyPressed = function () {
        setConfirmedGoSurvey(true);
    };
    var handleConfirmedGoSurvey = function (confirmed) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setConfirmedGoSurvey(false);
            if (confirmed)
                navigationToGoSurvey.navigate('surveyPenutupanGoSurvey', { item: item });
            else
                console.log('no');
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { className: "w-full h-[70px] mt-2 mb-3" },
            react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex-row justify-center items-center px-3" },
                react_1["default"].createElement(react_native_1.View, { className: "h-full flex-[1/3]" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleOpenHistoryFua, className: "h-full w-full flex justify-center items-center px-2 py-1 bg-gray-200 rounded-md shadow-xl border border-black" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "History FUA"))),
                react_1["default"].createElement(react_native_1.View, { className: "h-full flex-[1/3] flex flex-col justify-between items-center mx-5" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleCallContactPerson, className: "h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-gray-200 border border-black" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "Call Contact Person")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleSaveFuaPressed, className: "h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-gray-200 border border-black" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "Save FUA"))),
                react_1["default"].createElement(react_native_1.View, { className: "h-full flex-[1/3] flex flex-col justify-between items-center" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleOpenGoSurveyPressed, className: "h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-orange-400" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "Go Survey")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onTriggerSubmitFua, className: "h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-orange-400" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "Submit FUA"))))),
        confirmedGoSurvey && (react_1["default"].createElement(ConfirmationModal_1["default"], { title: "Do you want to go survey?", visible: confirmedGoSurvey, onConfirm: handleConfirmedGoSurvey }))));
};
exports["default"] = MySurveyFUAButtons;
