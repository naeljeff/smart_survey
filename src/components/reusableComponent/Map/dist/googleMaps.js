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
    var item = _a.item, lat = _a.lat, long = _a.long, alamat = _a.alamat;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_maps_1["default"], { style: styles.map, initialRegion: {
                latitude: parseFloat(lat),
                longitude: parseFloat(long),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            } },
            react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: { latitude: parseFloat(lat), longitude: parseFloat(long) }, title: alamat })),
        react_1["default"].createElement(react_native_1.View, { style: styles.addressContainer },
            react_1["default"].createElement(react_native_1.Text, null, alamat))));
};
exports["default"] = GoogleMaps;
var styles = react_native_1.StyleSheet.create({
    container: __assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), { justifyContent: 'flex-end', alignItems: 'center' }),
    map: __assign({}, react_native_1.StyleSheet.absoluteFillObject),
    addressContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    }
});
