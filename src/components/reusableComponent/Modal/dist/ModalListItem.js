"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var ModalListItem = function (_a) {
    var item = _a.item, onPress = _a.onPress, isSelected = _a.isSelected;
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return onPress(item.label); } },
        react_1["default"].createElement(react_native_1.View, { className: "w-full p-3 border-b border-gray-200 " + (isSelected ? 'bg-[#ffa382] rounded-xl' : '') },
            react_1["default"].createElement(react_native_1.Text, { className: "font-semibold text-lg capitalize " + (isSelected ? 'text-white' : 'text-black') }, item.label))));
};
exports["default"] = ModalListItem;
