"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_image_picker_1 = require("react-native-image-picker");
var GoSurveySurveyBody = function (_a) {
    var surveyFunction = _a.surveyFunction, navigateToSurveyInfo = _a.navigateToSurveyInfo;
    var handleOpenCamera = function () {
        console.log('Open Camera function called');
        var options = {
            mediaType: 'photo',
            cameraType: 'back'
        };
        react_native_image_picker_1.launchCamera(options, function (response) {
            console.log('Camera response:', response);
            if (response.didCancel) {
                react_native_1.Alert.alert('Camera cancelled');
            }
            else if (response.errorCode) {
                react_native_1.Alert.alert('Camera error', response.errorMessage || 'Unknown error');
                console.error('Camera error:', response.errorCode, response.errorMessage);
            }
            else if (response.assets && response.assets.length > 0) {
                var uri = response.assets[0].uri;
                react_native_1.Alert.alert('Photo captured', "Image URI: " + uri);
            }
        });
    };
    return (react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, className: "flex-grow" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-semibold text-black text-[16px] px-5 py-1" }, "Panel Info")),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex justify-center items-center py-2 px-20 my-3 space-y-5" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: handleOpenCamera },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center uppercase" }, "Camera")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () { return navigateToSurveyInfo(); } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center uppercase" }, "Selfie Photo")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () { return navigateToSurveyInfo(); } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center uppercase" }, "Exterior")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () { return navigateToSurveyInfo(); } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center uppercase" }, "Additional"))),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex justify-center items-center py-3 my-5" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () { return navigateToSurveyInfo(); } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center" }, "Next")))));
};
exports["default"] = GoSurveySurveyBody;
