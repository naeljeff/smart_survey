"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var MySurveyFUAButtons = function (_a) {
    var item = _a.item;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-[70px] mt-2 mb-3" },
        react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex-row justify-center items-center px-3" },
            react_1["default"].createElement(react_native_1.View, { className: "h-full flex-[1/3]" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                        return console.log("History FUA : " + item.noPengajuanSurvey);
                    }, className: "h-full w-full flex justify-center items-center px-2 py-1 bg-gray-200 rounded-md shadow-xl border border-black" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "History FUA"))),
            react_1["default"].createElement(react_native_1.View, { className: "h-full flex-[1/3] flex flex-col justify-between items-center mx-5" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log('Call'); }, className: "h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-gray-200 border border-black" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "Call Contact Person")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log('Save FUA'); }, className: "h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-gray-200 border border-black" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "Save FUA"))),
            react_1["default"].createElement(react_native_1.View, { className: "h-full flex-[1/3] flex flex-col justify-between items-center" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log('Go Survey'); }, className: "h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-orange-400" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "Go Survey")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log('Submit FUA'); }, className: "h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-orange-400" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, "Submit FUA"))))));
};
exports["default"] = MySurveyFUAButtons;
