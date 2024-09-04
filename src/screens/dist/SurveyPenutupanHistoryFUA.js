"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var getHistoryFua_1 = require("../services/api/surveyPenutupan/getHistoryFua");
var MySurveyFuaHistoryBody_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryBody");
var MySurveyFuaHistoryAppointment_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryAppointment");
var MySurveyFuaHistoryCooporateContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryCooporateContact");
var MySurveyFuaHistoryPersonalContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUAHistory/MySurveyFuaHistoryPersonalContact");
var SurveyPenutupanHistoryFUA = function (_a) {
    var route = _a.route;
    var item = route.params.item;
    var navigation = native_1.useNavigation();
    var _b = getHistoryFua_1.UseGetHistoryFuaList(item.noPengajuanSurvey, item.unitNo), data = _b.data, isLoading = _b.isLoading, isError = _b.isError, refetch = _b.refetch, error = _b.error;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { className: "h-screen w-screen flex flex-col justify-center items-center bg-gray-400/50" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#00bffe" })));
    }
    if (isError) {
        return (react_1["default"].createElement(react_native_1.Text, { className: "h-screen w-screen text-center text-lg text-red-500" }, "Error loading data"));
    }
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-white" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'History FUA', onPress: function () { return navigation.goBack(); }, onRefresh: refetch }),
        react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: isLoading, onRefresh: refetch }) },
            react_1["default"].createElement(MySurveyFuaHistoryAppointment_1["default"], null),
            react_1["default"].createElement(MySurveyFuaHistoryPersonalContact_1["default"], null),
            react_1["default"].createElement(MySurveyFuaHistoryCooporateContact_1["default"], null),
            react_1["default"].createElement(MySurveyFuaHistoryBody_1["default"], { data: data }))));
};
exports["default"] = SurveyPenutupanHistoryFUA;
