"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var getNewSurveyData_1 = require("../../../../services/api/surveyPenutupan/getNewSurveyData");
var storeUser_1 = require("../../../../store/storeUser");
var SurveyPenutupanNavbar = function (_a) {
    var _b;
    var onMenuChange = _a.onMenuChange;
    var menu = [
        'Incoming Job',
        'Job Monitoring',
        'My Survey',
        'History',
    ];
    var _c = react_1.useState(0), index = _c[0], setIndex = _c[1];
    var messageResponse = storeUser_1.useUserStore(function (state) { return ({
        messageResponse: state.messageResponse
    }); }).messageResponse;
    var fullName = (messageResponse === null || messageResponse === void 0 ? void 0 : messageResponse.full_name) || '';
    var data = getNewSurveyData_1.UseGetNewSurveyData(fullName).data;
    var handleMenuChangeOnPress = function (option, idx) {
        setIndex(idx);
        onMenuChange(option);
    };
    var dataCount = ((_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.length) || 0;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-[50px] flex justify-center bg-[#FFD875]/60" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row justify-center gap-x-2" }, menu.map(function (item, idx) { return (react_1["default"].createElement(react_native_1.View, { key: idx, className: "flex flex-row items-center justify-center" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return handleMenuChangeOnPress(item, idx); }, className: "mr-2 " + (index === idx ? 'bg-[#A67B5B]/80 py-1.5 px-1 rounded' : '') },
                react_1["default"].createElement(react_native_1.Text, { className: "relative text-sm text-black " + (index === idx ? 'text-white' : 'text-black') }, item),
                idx === 0 && (react_1["default"].createElement(react_native_1.Text, { className: "absolute w-5 h-5 text-[10px] text-center pt-1 bg-red-500 text-white rounded-full " + (index === 0
                        ? 'top-[-8px] right-[-6px]'
                        : 'top-[-12px] right-[-7px]') }, dataCount > 99 ? '99+' : dataCount))),
            idx === menu.length - 1 ? ('') : (react_1["default"].createElement(react_native_1.View, { className: "h-full flex justify-center items-center border-r border-black" })))); }))));
};
exports["default"] = SurveyPenutupanNavbar;
