"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyMenuOptions_1 = require("../../molecules/GoSurvey/GoSurveyMenuOptions");
var GoSurveyGeneralInfoBody_1 = require("./GeneralInfo/GoSurveyGeneralInfoBody");
var GoSurveySurveyBody_1 = require("./Survey/GoSurveySurveyBody");
var GoSurveySurveyInfoBody_1 = require("./SurveyInfo/GoSurveySurveyInfoBody");
var GoSurveySignatureBody_1 = require("./Signature/GoSurveySignatureBody");
var GoSurveyBody = function () {
    var _a = react_1.useState('General Info'), menuGoSurvey = _a[0], setMenuGoSurvey = _a[1];
    var renderComponent = function () {
        switch (menuGoSurvey) {
            case 'General Info':
                return react_1["default"].createElement(GoSurveyGeneralInfoBody_1["default"], null);
            case 'Survey':
                return react_1["default"].createElement(GoSurveySurveyBody_1["default"], null);
            case 'Survey Info':
                return react_1["default"].createElement(GoSurveySurveyInfoBody_1["default"], null);
            case 'Signature':
                return react_1["default"].createElement(GoSurveySignatureBody_1["default"], null);
            default:
                return null;
        }
    };
    var handleGoSurveyMenuChangeNavigation = function (menu) {
        setMenuGoSurvey(menu);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-white" },
        react_1["default"].createElement(GoSurveyMenuOptions_1["default"], { onMenuChange: handleGoSurveyMenuChangeNavigation }),
        renderComponent()));
};
exports["default"] = GoSurveyBody;
