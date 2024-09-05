"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SurveyJobDetailForMap_1 = require("../../layoutComponent/SurveyPenutupan/atoms/IncomingJob/SurveyJobDetailForMap");
var AssignJobModal = function (_a) {
    var item = _a.item, visible = _a.visible, setUserNotes = _a.setUserNotes, onConfirm = _a.onConfirm;
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
            react_1["default"].createElement(react_native_1.View, { className: "w-4/5 h-3/5 bg-white px-5 py-1 rounded-xl shadow-2xl" },
                react_1["default"].createElement(react_native_1.View, { className: "w-full h-[6%] flex flex-row justify-center items-center px-1 mb-2" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-[16px] text-black/90 font-semibold capitalize" }, "Supervisor Note")),
                react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" }),
                react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex-col justify-start items-start py-1 bg-white" },
                    react_1["default"].createElement(react_native_1.View, { className: "w-full h-2/5" },
                        react_1["default"].createElement(SurveyJobDetailForMap_1["default"], { item: item })),
                    react_1["default"].createElement(react_native_1.View, { className: "w-full h-[57%] border border-black rounded-lg px-2 mt-1" },
                        react_1["default"].createElement(react_native_1.TextInput, { multiline: true, placeholder: "Notes", onChangeText: function (text) { return setUserNotes(text); } }))),
                react_1["default"].createElement(react_native_1.View, { className: "h-[10%] w-full flex flex-row justify-center items-center gap-x-5 my-2" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "p-0.5 bg-green-500 rounded-md", onPress: function () { return onConfirm(true); } },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-white font-semibold border border-white rounded-md px-3.5 py-1.5" }, "Submit")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "p-0.5 bg-red-500 rounded-md", onPress: function () { return onConfirm(false); } },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-white font-semibold border border-white rounded-md px-3.5 py-1.5" }, "Back")))))));
};
exports["default"] = AssignJobModal;
