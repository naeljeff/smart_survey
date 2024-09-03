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
var Feather_1 = require("react-native-vector-icons/Feather");
var react_native_paper_1 = require("react-native-paper");
var native_1 = require("@react-navigation/native");
var react_native_simple_toast_1 = require("react-native-simple-toast");
var ConfirmationModal_1 = require("../../../../reusableComponent/Modal/ConfirmationModal");
var storeUser_1 = require("../../../../../store/storeUser");
var patchAcceptSurvey_1 = require("../../../../../services/api/surveyPenutupan/patchAcceptSurvey");
var getNewSurveyData_1 = require("../../../../../services/api/surveyPenutupan/getNewSurveyData");
var SurveyJobItemMenu = function (_a) {
    var item = _a.item;
    var navigationToGoogleMap = native_1.useNavigation();
    var navigationToAssignJob = native_1.useNavigation();
    var _b = react_1.useState(false), menuState = _b[0], setMenuState = _b[1];
    var _c = react_1.useState(false), confirmationModal = _c[0], setConfirmationModal = _c[1];
    var _d = react_1.useState(''), modalType = _d[0], setModalType = _d[1];
    var openMenu = function () { return setMenuState(true); };
    var closeMenu = function () { return setMenuState(false); };
    var messageResponse = storeUser_1.useUserStore(function (state) { return ({
        messageResponse: state.messageResponse
    }); }).messageResponse;
    var fullName = (messageResponse === null || messageResponse === void 0 ? void 0 : messageResponse.full_name) || '';
    var refetch = getNewSurveyData_1.UseGetNewSurveyData(fullName).refetch;
    var handleOnPressView = function () {
        navigationToGoogleMap.navigate('googleMaps', {
            item: item
        });
    };
    var handleOnAcceptSurvey = function () {
        setModalType('accept');
        setConfirmationModal(true);
        closeMenu();
    };
    var handleOnRejectSurvey = function () {
        setModalType('reject');
        setConfirmationModal(true);
        closeMenu();
    };
    var handleOnAssignSurvey = function () {
        closeMenu();
        navigationToAssignJob.navigate('surveyPenutupanAssignJob', { item: item });
    };
    var handleConfirm = function (confirmed) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, res, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setConfirmationModal(false);
                    if (!confirmed) return [3 /*break*/, 7];
                    _a = modalType;
                    switch (_a) {
                        case 'accept': return [3 /*break*/, 1];
                        case 'reject': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, patchAcceptSurvey_1.patchAcceptNewSurvey(item.noPengajuanSurvey, item.unitNo, fullName)];
                case 2:
                    res = _b.sent();
                    if (res.status === '01') {
                        react_native_simple_toast_1["default"].show('Survey Has Been Updated!', react_native_simple_toast_1["default"].SHORT);
                    }
                    else if (res.status === '02') {
                        react_native_simple_toast_1["default"].show('Update Survey Failed!', react_native_simple_toast_1["default"].SHORT);
                    }
                    refetch();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.log('Failed to accept survey:', error_1);
                    throw Error;
                case 4: return [3 /*break*/, 7];
                case 5:
                    console.log('Rejecting survey');
                    return [3 /*break*/, 7];
                case 6:
                    console.log('Unknown modal type');
                    _b.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_paper_1.Menu, { visible: menuState, onDismiss: closeMenu, contentStyle: { backgroundColor: '#fff' }, elevation: 5, anchor: react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: openMenu },
                react_1["default"].createElement(Feather_1["default"], { name: "more-vertical", size: 22, color: "black" })) },
            react_1["default"].createElement(react_native_paper_1.Menu.Item, { style: {
                    height: 50
                }, titleStyle: { fontSize: 16, color: 'black' }, onPress: function () {
                    closeMenu();
                    handleOnPressView();
                }, title: "View" }),
            react_1["default"].createElement(react_native_paper_1.Divider, null),
            react_1["default"].createElement(react_native_paper_1.Menu.Item, { style: {
                    height: 50
                }, titleStyle: { fontSize: 16, color: 'black' }, onPress: handleOnRejectSurvey, title: "Reject" }),
            react_1["default"].createElement(react_native_paper_1.Divider, null),
            react_1["default"].createElement(react_native_paper_1.Menu.Item, { style: {
                    height: 50
                }, titleStyle: { fontSize: 16, color: 'black' }, onPress: handleOnAcceptSurvey, title: "Accept" }),
            react_1["default"].createElement(react_native_paper_1.Divider, null),
            react_1["default"].createElement(react_native_paper_1.Menu.Item, { style: {
                    height: 50
                }, titleStyle: { fontSize: 16, color: 'black' }, onPress: handleOnAssignSurvey, title: "Assign" })),
        confirmationModal && (react_1["default"].createElement(ConfirmationModal_1["default"], { title: modalType, visible: confirmationModal, onConfirm: handleConfirm }))));
};
exports["default"] = SurveyJobItemMenu;
