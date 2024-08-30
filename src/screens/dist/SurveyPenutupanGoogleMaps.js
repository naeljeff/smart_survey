"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var SurveyPenutupanGoogleMaps = function (_a) {
    var route = _a.route;
    var _b = route.params, item = _b.item, lat = _b.lat, long = _b.long, alamat = _b.alamat;
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 bg-white" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'Surveyor', onPress: function () { return navigation.goBack(); }, onRefresh: function () { } })));
};
exports["default"] = SurveyPenutupanGoogleMaps;
