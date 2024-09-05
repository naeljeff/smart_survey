"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var IncomingJobAppointment_1 = require("../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobAppointment");
var IncomingJobPersonalContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobPersonalContact");
var IncomingJobCoorporateContact_1 = require("../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobCoorporateContact");
var IncomingJobFUA_1 = require("../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobFUA/IncomingJobFUA");
var getNewSurveyData_1 = require("../services/api/surveyPenutupan/getNewSurveyData");
var storeUser_1 = require("../store/storeUser");
var SurveyPenutupanIncomingJobFUA = function (_a) {
    var route = _a.route;
    var navigation = native_1.useNavigation();
    var item = route.params.item;
    var messageResponse = storeUser_1.useUserStore(function (state) { return ({
        messageResponse: state.messageResponse
    }); }).messageResponse;
    var fullName = (messageResponse === null || messageResponse === void 0 ? void 0 : messageResponse.full_name) || '';
    var refetchSurveyData = getNewSurveyData_1.UseGetNewSurveyData(fullName).refetch;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-[#fff]" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'FUA', onPress: function () { return navigation.goBack(); }, onRefresh: refetchSurveyData }),
        react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true },
            react_1["default"].createElement(IncomingJobAppointment_1["default"], { item: item }),
            react_1["default"].createElement(IncomingJobPersonalContact_1["default"], { item: item }),
            react_1["default"].createElement(IncomingJobCoorporateContact_1["default"], null),
            react_1["default"].createElement(IncomingJobFUA_1["default"], null))));
};
exports["default"] = SurveyPenutupanIncomingJobFUA;
