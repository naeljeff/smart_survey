"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyExteriorDetail_1 = require("../../../molecules/GoSurvey/GoSurveyExterior/GoSurveyExteriorDetail");
var GoSurveyExteriorBody = function () {
    return (react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, className: "flex-grow" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-semibold text-black text-[16px] px-5 py-1" }, "Exterior / Interior")),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: 'bemper - belakang' })));
};
exports["default"] = GoSurveyExteriorBody;
