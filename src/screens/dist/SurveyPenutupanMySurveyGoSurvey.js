"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var GoSurveyBody_1 = require("../components/layoutComponent/SurveyPenutupan/organism/GoSurvey/GoSurveyBody");
var SurveyPenutupanMySurveyGoSurvey = function (_a) {
    var route = _a.route;
    var item = route.params.item;
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-white" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'Go Survey', onPress: function () { return navigation.goBack(); } }),
        react_1["default"].createElement(GoSurveyBody_1["default"], null)));
};
exports["default"] = SurveyPenutupanMySurveyGoSurvey;
