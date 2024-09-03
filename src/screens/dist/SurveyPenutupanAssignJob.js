"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var getGoogleMapsData_1 = require("../services/api/surveyPenutupan/getGoogleMapsData");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var GoogleMaps_1 = require("../components/reusableComponent/Map/GoogleMaps");
var IncomingJobViewMapDetail_1 = require("../components/layoutComponent/SurveyPenutupan/organism/IncomingJob/IncomingJobViewMapDetail/IncomingJobViewMapDetail");
var SurveyJobAssignJobItem_1 = require("../components/layoutComponent/SurveyPenutupan/atoms/IncomingJob/SurveyJobAssignJobItem");
var SurveyPenutupanAssignJob = function (_a) {
    var route = _a.route;
    var item = route.params.item;
    var navigation = native_1.useNavigation();
    // Run React Query for maps data -> Nanti ganti pake yg tempat" surveyor
    var _b = getGoogleMapsData_1.UseGetGoogleMapsData(item.alamatSurvey), dataGmaps = _b.data, refetchGmaps = _b.refetch, isErrorGmaps = _b.isError, isLoadingGmaps = _b.isLoading, errorGmaps = _b.error;
    react_1.useEffect(function () {
        refetchGmaps();
    }, [item.alamatSurvey, refetchGmaps]);
    var tempData = [
        {
            id: 1,
            nama: 'Isti marlisah',
            jumlahTask: 3
        },
        {
            id: 2,
            nama: 'John Doe',
            jumlahTask: 13
        },
        {
            id: 3,
            nama: 'John Smith',
            jumlahTask: 23
        },
        {
            id: 4,
            nama: 'Aaron Smith',
            jumlahTask: 33
        },
        {
            id: 5,
            nama: 'Bob Curtney',
            jumlahTask: 43
        },
        {
            id: 6,
            nama: 'Isti marlisah',
            jumlahTask: 3
        },
        {
            id: 7,
            nama: 'John Doe',
            jumlahTask: 13
        },
    ];
    var renderItem = react_1.useCallback(function (_a) {
        var item = _a.item, index = _a.index;
        return (react_1["default"].createElement(SurveyJobAssignJobItem_1["default"], { item: item, index: index, surveyItem: route.params.item }));
    }, [route.params.item]);
    var getKey = react_1.useCallback(function (item) { return item.id.toString(); }, []);
    if (isLoadingGmaps) {
        return (react_1["default"].createElement(react_native_1.View, { className: "h-screen w-screen flex flex-col justify-center items-center bg-gray-400/20" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#00bffe" })));
    }
    if (isErrorGmaps) {
        return (react_1["default"].createElement(react_native_1.Text, { className: "h-screen w-screen text-center text-lg text-red-500" }, errorGmaps === null || errorGmaps === void 0 ? void 0 : errorGmaps.message));
    }
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-[#FFF]" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'Assign Job', onPress: function () { return navigation.goBack(); } }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full h-[300px]" },
            react_1["default"].createElement(GoogleMaps_1["default"], { item: item })),
        react_1["default"].createElement(react_native_1.View, { className: "flex-1" },
            react_1["default"].createElement(IncomingJobViewMapDetail_1["default"], { item: item })),
        react_1["default"].createElement(react_native_1.View, { className: "flex-1 w-full bg-white -mt-[78px]" }, tempData.length === 0 ? (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col justify-center items-center" },
            react_1["default"].createElement(MaterialIcons_1["default"], { name: "do-not-disturb-alt", size: 80, color: "black" }),
            react_1["default"].createElement(react_native_1.Text, { className: "italic text-gray-600 capitalize text-xl" }, "No Data Found"))) : (react_1["default"].createElement(react_native_1.FlatList, { data: tempData, keyExtractor: getKey, renderItem: renderItem })))));
};
exports["default"] = SurveyPenutupanAssignJob;
