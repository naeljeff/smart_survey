"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var ConfirmationModal = function (_a) {
    var title = _a.title, visible = _a.visible, onConfirm = _a.onConfirm;
    var animation = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    react_1.useEffect(function () {
        if (visible) {
            react_native_1.Animated.timing(animation, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true
            }).start();
        }
        else {
            react_native_1.Animated.timing(animation, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true
            }).start();
        }
    }, [animation, visible]);
    return (react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: visible, onRequestClose: function () { return onConfirm(false); } },
        react_1["default"].createElement(react_native_1.Animated.View, { className: "flex-1 justify-center items-center bg-black/20", style: {
                opacity: animation
            } },
            react_1["default"].createElement(react_native_1.View, { className: "w-4/5 h-1/3 bg-white p-5 rounded-xl shadow-2xl" },
                react_1["default"].createElement(react_native_1.View, { className: "w-full h-1/6 flex flex-row justify-center items-center px-1 mb-3" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black/90 font-semibold capitalize" }, "Confirmation")),
                react_1["default"].createElement(react_native_1.View, { className: "h-4/6 flex-1 justify-center items-center p-4" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-justify text-black text-xl" },
                        "Are you sure you want to ",
                        title,
                        " this survey?")),
                react_1["default"].createElement(react_native_1.View, { className: "h-1/6 w-full flex flex-row justify-center items-center gap-x-5 mt-4" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "p-0.5 bg-green-500 rounded-md", onPress: function () { return onConfirm(true); } },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-white font-semibold border border-white rounded-md px-3.5 py-1.5" }, "Confirm")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "p-0.5 bg-red-500 rounded-md", onPress: function () { return onConfirm(false); } },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-white font-semibold border border-white rounded-md px-3.5 py-1.5" }, "Close")))))));
};
exports["default"] = ConfirmationModal;
