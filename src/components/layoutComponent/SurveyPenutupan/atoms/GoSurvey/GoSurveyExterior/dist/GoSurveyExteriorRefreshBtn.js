"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var GoSurveyExteriorRefreshBtn = function (_a) {
    var onPress = _a.onPress;
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress, className: 'shadow-2xl drop-shadow-xl' },
        react_1["default"].createElement(react_native_1.View, { className: "rounded-lg bg-[#faa72c] px-2 py-1" },
            react_1["default"].createElement(Ionicons_1["default"], { name: 'refresh', size: 18, color: 'white' }))));
};
exports["default"] = GoSurveyExteriorRefreshBtn;
