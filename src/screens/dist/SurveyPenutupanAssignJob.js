"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var getGoogleMapsData_1 = require("../services/api/surveyPenutupan/getGoogleMapsData");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var GoogleMaps_1 = require("../components/reusableComponent/Map/GoogleMaps");
var IncomingJobAssignJob_1 = require("../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobViewMapDetail/IncomingJobAssignJob");
var SurveyPenutupanAssignJob = function (_a) {
    var route = _a.route;
    var item = route.params.item;
    var navigation = native_1.useNavigation();
    // Run React Query for maps data -> Nanti ganti pake yg tempat" surveyor
    var _b = getGoogleMapsData_1.UseGetGoogleMapsData(item.alamatSurvey), dataGmaps = _b.data, refetchGmaps = _b.refetch, isErrorGmaps = _b.isError, isLoadingGmaps = _b.isLoading, errorGmaps = _b.error;
    react_1.useEffect(function () {
        refetchGmaps();
    }, [item.alamatSurvey, refetchGmaps]);
    if (isLoadingGmaps) {
        return (react_1["default"].createElement(react_native_1.View, { className: "h-screen w-screen flex flex-col justify-center items-center bg-gray-400/20" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#00bffe" })));
    }
    if (isErrorGmaps) {
        return (react_1["default"].createElement(react_native_1.Text, { className: "h-screen w-screen text-center text-lg text-red-500" }, errorGmaps === null || errorGmaps === void 0 ? void 0 : errorGmaps.message));
    }
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-[#FFF]" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'Assign Job', onPress: function () { return navigation.goBack(); } }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full h-[350px]" },
            react_1["default"].createElement(GoogleMaps_1["default"], { item: item })),
        react_1["default"].createElement(react_native_1.View, { className: 'flex-1' },
            react_1["default"].createElement(IncomingJobAssignJob_1["default"], { item: item })),
        react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, className: "flex-grow" })));
};
exports["default"] = SurveyPenutupanAssignJob;
