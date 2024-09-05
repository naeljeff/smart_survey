"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyGeneralInfoBody = function (_a) {
    var _b;
    var surveyFunction = _a.surveyFunction;
    var data = (_b = surveyFunction === null || surveyFunction === void 0 ? void 0 : surveyFunction.data) === null || _b === void 0 ? void 0 : _b.data;
    if (surveyFunction === null || surveyFunction === void 0 ? void 0 : surveyFunction.isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { className: "h-screen w-screen flex flex-col justify-center items-center bg-gray-400/50" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#00bffe" })));
    }
    if (surveyFunction === null || surveyFunction === void 0 ? void 0 : surveyFunction.isError) {
        return (react_1["default"].createElement(react_native_1.Text, { className: "h-screen w-screen text-center text-lg text-red-500" }, "Error loading data"));
    }
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Text, null, "General Info Body"),
        react_1["default"].createElement(react_native_1.Text, null, data === null || data === void 0 ? void 0 : data.noPengajuanSurvey)));
};
exports["default"] = GoSurveyGeneralInfoBody;
