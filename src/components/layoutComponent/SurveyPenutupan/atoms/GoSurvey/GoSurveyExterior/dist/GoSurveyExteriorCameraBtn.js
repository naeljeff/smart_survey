"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_paper_1 = require("react-native-paper");
var EvilIcons_1 = require("react-native-vector-icons/EvilIcons");
var GoSurveyExteriorCameraBtn = function (_a) {
    var onPress = _a.onPress;
    return (react_1["default"].createElement(react_native_paper_1.Surface, { elevation: 1, className: "rounded-lg" },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress },
            react_1["default"].createElement(react_native_1.View, { className: "rounded-lg bg-[#faa72c] px-1.5 py-0.5" },
                react_1["default"].createElement(EvilIcons_1["default"], { name: 'camera', size: 26, color: 'white' })))));
};
exports["default"] = GoSurveyExteriorCameraBtn;
