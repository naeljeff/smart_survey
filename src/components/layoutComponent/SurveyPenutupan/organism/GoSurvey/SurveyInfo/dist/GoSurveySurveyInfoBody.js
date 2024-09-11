"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyGeneralInfoDropdown_1 = require("../../../atoms/GoSurvey/GoSurveyGeneralInfoDropdown");
var GoSurveySurveyInfoButton_1 = require("../../../atoms/GoSurvey/GoSurveySurveyInfoButton");
var GoSurveySurveyInfoBody = function (_a) {
    var surveyFunction = _a.surveyFunction, navigateToSignature = _a.navigateToSignature, isSurveyInfoValidated = _a.isSurveyInfoValidated;
    var _b = react_1.useState(null), conclusionOfVehicle = _b[0], setConclusionOfVehicle = _b[1];
    return (react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, className: "flex-grow" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-semibold text-black text-[16px] px-5 py-1" }, "Conclusion of Vehicle")),
        react_1["default"].createElement(react_native_1.View, { className: "w-full h-[100px] px-5" },
            react_1["default"].createElement(react_native_1.View, { className: "flex-1 border border-black rounded-lg px-2 mt-1" },
                react_1["default"].createElement(react_native_1.TextInput, { multiline: true, placeholder: "Notes", onChangeText: function (text) { return setConclusionOfVehicle(text); } }))),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mt-3" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[16px] px-5 py-1" }, "Surat Kendaraan")),
        react_1["default"].createElement(react_native_1.View, { className: "w-full px-5 py-2 flex flex-col items-center" },
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Type of Closure', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Extended Coverage', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Condition of Engine No and Chassis No', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Condition of Vehicle Oil', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Condition of Vehicle Engine', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Condition of Closure Flooding', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Overall Condition of the Vehicle', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Vehicle Often Used By', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Vehicle Often Used Areas', properties: 'transmission', placeholder: "Select Transmission" })),
            react_1["default"].createElement(react_native_1.View, { className: "mb-2" },
                react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'dropdown', onChange: function () { }, fieldName: 'Garage of Vehicle', properties: 'transmission', placeholder: "Select Transmission" }))),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mt-3" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[16px] px-5 py-1" }, "Photo Chassis No/Engine No")),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-center items-center mt-3 space-y-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row justify-between items-center px-5" },
                react_1["default"].createElement(react_native_1.View, { className: "w-1/3 flex flex-row justify-start items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black mr-3.5" }, "Chassis No"),
                    react_1["default"].createElement(GoSurveySurveyInfoButton_1["default"], { name: "camera", size: 26, color: "white", onPress: function () { return console.log('chassis no pressed'); } })),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col space-y-2 px-5" })),
            react_1["default"].createElement(react_native_1.View, { className: 'w-[90%] border-b border-gray-300' }),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row justify-between items-center px-5" },
                react_1["default"].createElement(react_native_1.View, { className: "w-1/3 flex flex-row justify-start items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black mr-5" }, "Engine No"),
                    react_1["default"].createElement(GoSurveySurveyInfoButton_1["default"], { name: "camera", size: 26, color: "white", onPress: function () { return console.log('engine no pressed'); } })),
                react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex flex-col space-y-2 px-5" }))),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex justify-center items-center py-3 my-5" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () { return navigateToSignature(); } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center" }, "Save")))));
};
exports["default"] = GoSurveySurveyInfoBody;
