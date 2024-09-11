"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyExteriorDetail_1 = require("../../../molecules/GoSurvey/GoSurveyExterior/GoSurveyExteriorDetail");
var GoSurveyExteriorBody = function () {
    return (react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, className: "flex-1" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-semibold text-black text-[16px] px-5 py-1" }, "Exterior / Interior")),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "bemper - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "bemper - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu stop kiri - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu besar kiri - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu stop kanan - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu besar kanan - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu sein kiri - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu sein kiri - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu sein kanan - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu sein kanan - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "spakboard kiri - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "spakboard kiri - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "spakboard kanan - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "spakboard kanan - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "pintu kiri - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "cover spion kiri - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "pintu kanan - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "cover spion kanan - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "kap bagasi - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "pintu kiri - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "kaca belakang - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "pintu kanan - depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "trisplank kiri - belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "kap mesin - depan" })));
};
exports["default"] = GoSurveyExteriorBody;
