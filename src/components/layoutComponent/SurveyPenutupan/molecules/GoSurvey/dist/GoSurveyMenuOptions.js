"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var GoSurveyMenuOptions = function (_a) {
    var onMenuChange = _a.onMenuChange, activeTab = _a.activeTab;
    var menu = ['General Info', 'Survey', 'Survey Info', 'Signature'];
    var handleMenuChangeOnPress = function (menu, index) {
        onMenuChange(menu, index);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-[50px] flex justify-center bg-[#555555]" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row justify-between px-4" }, menu.map(function (item, idx) { return (react_1["default"].createElement(react_native_1.View, { key: idx, className: "flex flex-row items-center justify-center" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return handleMenuChangeOnPress(item, idx); }, className: "w-[80px] flex flex-col justify-center items-center rounded-md py-0.5 px-0.5 " + (activeTab === idx ? 'bg-[#484848]' : '') },
                item === 'General Info' ? (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "notebook", size: 24, color: 'white' })) : item === 'Survey' ? (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "note-check", size: 24, color: 'white' })) : item === 'Survey Info' ? (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "note-search", size: 24, color: 'white' })) : (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "note-edit", size: 24, color: 'white' })),
                react_1["default"].createElement(react_native_1.Text, { className: "text-white text-xs" }, item)))); }))));
};
exports["default"] = GoSurveyMenuOptions;
