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
var react_native_simple_toast_1 = require("react-native-simple-toast");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var MySurveyAppointment_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyAppointment");
var MySurveyPersonalContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyPersonalContact");
var MySurveyCoorporateContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyCoorporateContact");
var MySurveyFUA_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUA");
var MySurveyFUAButtons_1 = require("../components/layoutComponent/SurveyPenutupan/atoms/MySurvey/MySurveyFUA/MySurveyFUAButtons");
var storeTempFua_1 = require("../store/storeTempFua");
var ConfirmationModal_1 = require("../components/reusableComponent/Modal/ConfirmationModal");
var storeUser_1 = require("../store/storeUser");
var functions_1 = require("../utilities/functions");
var addHistoryFua_1 = require("../services/api/surveyPenutupan/addHistoryFua");
var SurveyPenutupanMySurveyJobFUA = function (_a) {
    var route = _a.route;
    var _b = react_1.useState({
        contactDate: undefined,
        appointmentDate: undefined,
        address: '',
        status: '',
        remarks: ''
    }), tempFua = _b[0], setTempFua = _b[1];
    var _c = react_1.useState(false), confirmSubmitFua = _c[0], setConfirmSubmitFua = _c[1];
    var item = route.params.item;
    var navigation = native_1.useNavigation();
    var messageResponse = storeUser_1.useUserStore(function (state) { return ({
        messageResponse: state.messageResponse
    }); }).messageResponse;
    var fullName = (messageResponse === null || messageResponse === void 0 ? void 0 : messageResponse.full_name) || '';
    // Access Temporary FUA
    var _d = storeTempFua_1.useFuaStore(), addTemporaryFUA = _d.addTemporaryFUA, getTemporaryFUAData = _d.getTemporaryFUAData;
    native_1.useFocusEffect(react_1.useCallback(function () {
        var currentFuaData = getTemporaryFUAData(item.noPengajuanSurvey, item.unitNo);
        if (currentFuaData) {
            setTempFua({
                contactDate: currentFuaData.contactDate || new Date(),
                appointmentDate: currentFuaData.appointmentDate || new Date(),
                address: currentFuaData.address || '',
                status: currentFuaData.status || '',
                remarks: currentFuaData.remarks || ''
            });
        }
    }, [item.noPengajuanSurvey, item.unitNo, getTemporaryFUAData]));
    var handleSaveTemporaryFUA = function () {
        var _a, _b;
        var newFuaData = {
            noPengajuan: item.noPengajuanSurvey,
            unitNo: item.unitNo,
            contactDate: (_a = tempFua.contactDate) !== null && _a !== void 0 ? _a : new Date(),
            appointmentDate: (_b = tempFua.appointmentDate) !== null && _b !== void 0 ? _b : new Date(),
            address: tempFua.address,
            status: tempFua.status,
            remarks: tempFua.remarks
        };
        addTemporaryFUA(newFuaData);
    };
    var handleSubmitFUA = function (confirmed) { return __awaiter(void 0, void 0, void 0, function () {
        var contactDate, appointmentDate, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setConfirmSubmitFua(false);
                    if (!(confirmed &&
                        tempFua.contactDate &&
                        tempFua.appointmentDate &&
                        tempFua.address &&
                        tempFua.status &&
                        tempFua.remarks)) return [3 /*break*/, 2];
                    contactDate = functions_1.formatDateToDateTime(tempFua.contactDate);
                    appointmentDate = functions_1.formatDateToDateTime(tempFua.appointmentDate);
                    return [4 /*yield*/, addHistoryFua_1.addNewHistoryFua(item.noPengajuanSurvey, item.unitNo, fullName, contactDate, appointmentDate, tempFua.address, tempFua.status, tempFua.remarks)];
                case 1:
                    res = _a.sent();
                    switch (res.status) {
                        case '01':
                            react_native_1.Alert.alert('Follow Up Activity', 'Your FUA has been submitted!', [
                                { text: 'OK' },
                            ]);
                            setTempFua({
                                contactDate: undefined,
                                appointmentDate: undefined,
                                address: '',
                                status: '',
                                remarks: ''
                            });
                            break;
                        case '02':
                            react_native_simple_toast_1["default"].show('Some FUA fields are missing!', react_native_simple_toast_1["default"].SHORT);
                            break;
                        case '03':
                            react_native_1.Alert.alert('Follow Up Activity', 'Failed submitting FUA, please try again!', [{ text: 'OK' }]);
                        default:
                            console.log('weird errors');
                            break;
                    }
                    return [3 /*break*/, 3];
                case 2:
                    react_native_simple_toast_1["default"].show('Please fill all FUA fields!', react_native_simple_toast_1["default"].SHORT);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleTriggerSubmitFua = function () {
        setConfirmSubmitFua(true);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-[#FFF]" },
            react_1["default"].createElement(NavigationHeader_1["default"], { title: 'FUA', onPress: function () { return navigation.goBack(); } }),
            react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true },
                react_1["default"].createElement(MySurveyAppointment_1["default"], { item: item }),
                react_1["default"].createElement(MySurveyPersonalContact_1["default"], { item: item }),
                react_1["default"].createElement(MySurveyCoorporateContact_1["default"], null),
                react_1["default"].createElement(MySurveyFUA_1["default"], { tempFua: tempFua, setTempFua: setTempFua }),
                react_1["default"].createElement(MySurveyFUAButtons_1["default"], { item: item, onSaveFua: handleSaveTemporaryFUA, onTriggerSubmitFua: handleTriggerSubmitFua }))),
        confirmSubmitFua && (react_1["default"].createElement(ConfirmationModal_1["default"], { title: "Are you sure you want to submit this FUA?", visible: confirmSubmitFua, onConfirm: handleSubmitFUA }))));
};
exports["default"] = SurveyPenutupanMySurveyJobFUA;
