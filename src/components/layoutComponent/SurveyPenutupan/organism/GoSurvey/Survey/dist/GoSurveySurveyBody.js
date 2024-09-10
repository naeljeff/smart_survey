"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
// import {CameraOptions, launchCamera} from 'react-native-image-picker';
var native_1 = require("@react-navigation/native");
var storeSelectedSurvey_1 = require("../../../../../../store/storeSelectedSurvey");
var GoSurveySurveyBody = function (_a) {
    var surveyFunction = _a.surveyFunction, navigateToSurveyInfo = _a.navigateToSurveyInfo, isSurveyValidated = _a.isSurveyValidated;
    var selectedSurvey = storeSelectedSurvey_1.useSelectedSurvey(function (state) { return state.setSelectedSurvey; });
    var navigateToExteriorScreen = native_1.useNavigation();
    var navigateToAdditionalScreen = native_1.useNavigation();
    // const handleOpenCamera = () => {
    //   console.log('Open Camera function called');
    //   const options: CameraOptions = {
    //     mediaType: 'photo',
    //     cameraType: 'back',
    //   };
    //   launchCamera(options, response => {
    //     console.log('Camera response:', response);
    //     if (response.didCancel) {
    //       Alert.alert('Camera cancelled');
    //     } else if (response.errorCode) {
    //       Alert.alert('Camera error', response.errorMessage || 'Unknown error');
    //       console.error(
    //         'Camera error:',
    //         response.errorCode,
    //         response.errorMessage,
    //       );
    //     } else if (response.assets && response.assets.length > 0) {
    //       const uri = response.assets[0].uri;
    //       Alert.alert('Photo captured', `Image URI: ${uri}`);
    //     }
    //   });
    // };
    var handleNavigationToExterior = function () {
        var _a;
        // Set item
        if ((_a = surveyFunction.data) === null || _a === void 0 ? void 0 : _a.data) {
            selectedSurvey(surveyFunction.data.data);
            navigateToExteriorScreen.navigate('surveyPenutupanGoSurveyExterior');
        }
        else {
            react_native_1.Alert.alert('Go Survey', 'Error occured with survey data, please try again!', [{ text: 'OK' }]);
        }
    };
    var handleNavigationToAdditional = function () {
        var _a;
        // Set item
        if ((_a = surveyFunction.data) === null || _a === void 0 ? void 0 : _a.data) {
            selectedSurvey(surveyFunction.data.data);
            navigateToAdditionalScreen.navigate('surveyPenutupanGoSurveyAdditional');
        }
        else {
            react_native_1.Alert.alert('Go Survey', 'Error occured with survey data, please try again!', [{ text: 'OK' }]);
        }
    };
    return (react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, className: "flex-grow" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-semibold text-black text-[16px] px-5 py-1" }, "Panel Info")),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex justify-center items-center py-2 px-20 my-3 space-y-5" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () { } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center uppercase" }, "Camera")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () { return navigateToSurveyInfo(); } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center uppercase" }, "Selfie Photo")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: handleNavigationToExterior },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center uppercase" }, "Exterior")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: handleNavigationToAdditional },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center uppercase" }, "Additional"))),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex justify-center items-center py-3 my-5" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () { return navigateToSurveyInfo(); } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center" }, "Next")))));
};
exports["default"] = GoSurveySurveyBody;
