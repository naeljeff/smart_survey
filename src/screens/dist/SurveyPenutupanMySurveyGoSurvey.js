"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var GoSurveyBody_1 = require("../components/layoutComponent/SurveyPenutupan/organism/GoSurvey/GoSurveyBody");
var getSpecificSurveyById_1 = require("../services/api/surveyPenutupan/getSpecificSurveyById");
var storeSelectedSurvey_1 = require("../store/storeSelectedSurvey");
var SurveyPenutupanMySurveyGoSurvey = function () {
    var item = storeSelectedSurvey_1.useSelectedSurvey(function (state) { return state; }).data;
    var navigation = native_1.useNavigation();
    var specificSurveyFunction = getSpecificSurveyById_1.UseGetSpecificSurveyData(item.noPengajuanSurvey, item.unitNo);
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-white" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'Go Survey', onPress: function () { return navigation.goBack(); }, onRefresh: specificSurveyFunction.refetch }),
        react_1["default"].createElement(GoSurveyBody_1["default"], { surveyFunction: specificSurveyFunction })));
};
exports["default"] = SurveyPenutupanMySurveyGoSurvey;
