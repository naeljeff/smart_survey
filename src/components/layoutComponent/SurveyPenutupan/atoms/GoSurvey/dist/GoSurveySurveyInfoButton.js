"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var EvilIcons_1 = require("react-native-vector-icons/EvilIcons");
var react_1 = require("react");
var react_native_paper_1 = require("react-native-paper");
var GoSurveySurveyInfoButton = function (_a) {
    var name = _a.name, size = _a.size, color = _a.color, onPress = _a.onPress;
    return (react_1["default"].createElement(react_native_paper_1.Surface, { elevation: 1, className: "rounded-lg" },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress },
            react_1["default"].createElement(react_native_1.View, { className: "rounded-lg bg-[#faa72c] px-1.5 py-0.5" },
                react_1["default"].createElement(EvilIcons_1["default"], { name: name, size: size, color: color })))));
};
exports["default"] = GoSurveySurveyInfoButton;
