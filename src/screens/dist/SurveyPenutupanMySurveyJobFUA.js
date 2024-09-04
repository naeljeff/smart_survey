"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var MySurveyAppointment_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyAppointment");
var MySurveyPersonalContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyPersonalContact");
var MySurveyCoorporateContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyCoorporateContact");
var MySurveyFUA_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUA");
var MySurveyFUAButtons_1 = require("../components/layoutComponent/SurveyPenutupan/atoms/MySurvey/MySurveyFUA/MySurveyFUAButtons");
var SurveyPenutupanMySurveyJobFUA = function (_a) {
    var route = _a.route;
    var navigation = native_1.useNavigation();
    var item = route.params.item;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-[#FFF]" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'FUA', onPress: function () { return navigation.goBack(); } }),
        react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true },
            react_1["default"].createElement(MySurveyAppointment_1["default"], { item: item }),
            react_1["default"].createElement(MySurveyPersonalContact_1["default"], { item: item }),
            react_1["default"].createElement(MySurveyCoorporateContact_1["default"], null),
            react_1["default"].createElement(MySurveyFUA_1["default"], null),
            react_1["default"].createElement(MySurveyFUAButtons_1["default"], { item: item }))));
};
exports["default"] = SurveyPenutupanMySurveyJobFUA;
