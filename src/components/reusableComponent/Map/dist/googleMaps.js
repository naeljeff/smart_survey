"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_maps_1 = require("react-native-maps");
var GoogleMaps = function (_a) {
    var item = _a.item;
    // console.log(`Dari gmaps: ${item.alamatSurvey}`);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_maps_1["default"], { provider: react_native_maps_1.PROVIDER_GOOGLE, style: styles.map, region: {
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                } }))));
};
exports["default"] = GoogleMaps;
var styles = react_native_1.StyleSheet.create({
    container: __assign({}, react_native_1.StyleSheet.absoluteFillObject),
    map: __assign({}, react_native_1.StyleSheet.absoluteFillObject)
});
