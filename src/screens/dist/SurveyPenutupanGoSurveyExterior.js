"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var storeSelectedSurvey_1 = require("../store/storeSelectedSurvey");
var GoSurveyExteriorBody_1 = require("../components/layoutComponent/SurveyPenutupan/organism/GoSurvey/GoSurveyExterior/GoSurveyExteriorBody");
var SurveyPenutupanGoSurveyExterior = function () {
    var navigation = native_1.useNavigation();
    var item = storeSelectedSurvey_1.useSelectedSurvey(function (state) { return state; }).data;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-white" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'Exterior', onPress: function () { return navigation.goBack(); } }),
        react_1["default"].createElement(GoSurveyExteriorBody_1["default"], null)));
};
exports["default"] = SurveyPenutupanGoSurveyExterior;
