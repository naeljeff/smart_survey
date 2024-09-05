"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyGeneralInfoFields = function (_a) {
    var data = _a.data, fieldName = _a.fieldName, onChange = _a.onChange, properties = _a.properties;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2 mt-2" },
        react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, fieldName),
            react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
        react_1["default"].createElement(react_native_1.TextInput, { value: data, onChangeText: function (text) { return onChange && onChange(properties, text); }, multiline: true, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })));
};
exports["default"] = GoSurveyGeneralInfoFields;
