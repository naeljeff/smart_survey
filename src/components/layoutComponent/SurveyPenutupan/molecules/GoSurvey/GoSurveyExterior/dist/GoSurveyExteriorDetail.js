"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyExteriorEditBtn_1 = require("../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorEditBtn");
var GoSurveyExteriorRefreshBtn_1 = require("../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorRefreshBtn");
var GoSurveyExteriorGalleryBtn_1 = require("../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorGalleryBtn");
var GoSurveyExteriorCameraBtn_1 = require("../../../atoms/GoSurvey/GoSurveyExterior/GoSurveyExteriorCameraBtn");
var GoSurveyGeneralInfoDropdown_1 = require("../../../atoms/GoSurvey/GoSurveyGeneralInfoDropdown");
var GoSurveyExteriorDetail = function (_a) {
    var title = _a.title;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-start border-b border-gray-300 px-3 py-2" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex justify-center items-start" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[16px] uppercase" }, title)),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex-1 flex flex-row justify-center items-center mb-20" },
            react_1["default"].createElement(react_native_1.View, { className: "w-1/3 flex flex-col space-y-2" },
                react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                    react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: '', onChange: function () { }, fieldName: '', properties: 'statusOfCondition', placeholder: "Select Status of Condition" })),
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: '', onChange: function () { }, fieldName: '', properties: 'status', placeholder: "Select Status" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-1/2 flex-1 flex flex-col space-y-2 mx-1" },
                react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                    react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: '', onChange: function () { }, fieldName: 'Condition', properties: 'condition', placeholder: "Select Condition" })),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                    react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize text-xs" }, "Brand"),
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize text-xs" }, ":")),
                    react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Brand", className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-1/6 flex flex-col space-y-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex-1 flex flex-row justify-center items-center mt-1 ml-1" },
                    react_1["default"].createElement(react_native_1.View, { className: "mx-0.5" },
                        react_1["default"].createElement(GoSurveyExteriorEditBtn_1["default"], { onPress: function () { } })),
                    react_1["default"].createElement(GoSurveyExteriorRefreshBtn_1["default"], { onPress: function () { } })),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex-1 flex flex-row justify-center items-center mt-1 ml-1" },
                    react_1["default"].createElement(react_native_1.View, { className: "mx-0.5" },
                        react_1["default"].createElement(GoSurveyExteriorGalleryBtn_1["default"], { onPress: function () { } })),
                    react_1["default"].createElement(GoSurveyExteriorCameraBtn_1["default"], { onPress: function () { } }))))));
};
exports["default"] = GoSurveyExteriorDetail;
