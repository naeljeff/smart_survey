"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SurveyPenutupanSearchInput_1 = require("../../molecules/SurveyPenutupanSearchInput");
var Information_1 = require("../../../../reusableComponent/StaticDisplay/Information");
var getProcessedSurveyData_1 = require("../../../../../services/api/surveyPenutupan/getProcessedSurveyData");
var native_1 = require("@react-navigation/native");
var MySurveyList_1 = require("../../molecules/MySurvey/MySurveyList");
var navigationHelper_1 = require("../../../../../utilities/navigationHelper");
var storeUser_1 = require("../../../../../store/storeUser");
var MySurveyBody = function () {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState(''), searchByTerm = _b[0], setSearchByTerm = _b[1];
    var _c = react_1.useState(''), sortBy = _c[0], setSortBy = _c[1];
    var _d = react_1.useState(''), orderBy = _d[0], setOrderBy = _d[1];
    var messageResponse = storeUser_1.useUserStore(function (state) { return ({
        messageResponse: state.messageResponse
    }); }).messageResponse;
    var fullName = (messageResponse === null || messageResponse === void 0 ? void 0 : messageResponse.full_name) || '';
    var _e = getProcessedSurveyData_1.UseGetProcessedSurveyData(fullName), data = _e.data, isLoading = _e.isLoading, isError = _e.isError, refetch = _e.refetch, error = _e.error;
    var navigation = native_1.useNavigation();
    react_1.useEffect(function () {
        if (error) {
            if ('isSessionError' in error && error.isSessionError) {
                navigationHelper_1.navigateToLogin(navigation);
            }
        }
    }, [error, navigation, refetch]);
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { className: "h-screen w-screen flex flex-col justify-center items-center bg-gray-400/50" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#00bffe" })));
    }
    if (isError) {
        return (react_1["default"].createElement(react_native_1.Text, { className: "h-screen w-screen text-center text-lg text-red-500" }, "Error loading data"));
    }
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex flex-col" },
        react_1["default"].createElement(SurveyPenutupanSearchInput_1["default"], { setSearchTerm: setSearchTerm, searchTab: "MySurvey", setSearchByTerm: setSearchByTerm, setSortBy: setSortBy, setOrderBy: setOrderBy }),
        react_1["default"].createElement(Information_1["default"], null),
        isLoading ? (react_1["default"].createElement(react_native_1.View, { className: "w-full flex-1 bg-[#f7ebd7] inset-0 justify-center items-center" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#f5af46" }))) : (react_1["default"].createElement(MySurveyList_1["default"], { data: data, search: searchTerm, searchByTerm: searchByTerm, sortBy: sortBy, orderBy: orderBy, refreshing: isLoading, onRefresh: refetch, navigation: navigation }))));
};
exports["default"] = MySurveyBody;
