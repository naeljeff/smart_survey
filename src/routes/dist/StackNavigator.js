"use strict";
exports.__esModule = true;
var native_stack_1 = require("@react-navigation/native-stack");
var react_1 = require("react");
// Screens
var LoginPage_1 = require("../screens/LoginPage");
var BottomTabNavigator_1 = require("./BottomTabNavigator");
var HomeCarouselDetailPage_1 = require("../screens/HomeCarouselDetailPage");
var MenuAwalSurveyPenutupan_1 = require("../screens/MenuAwalSurveyPenutupan");
var MenuAwalSupervisor_1 = require("../screens/MenuAwalSupervisor");
var MenuAwalSurveyor_1 = require("../screens/MenuAwalSurveyor");
var NotificationPage_1 = require("../screens/NotificationPage");
var SurveyPenutupanIncomingJobFUA_1 = require("../screens/SurveyPenutupanIncomingJobFUA");
var SurveyPenutupanMySurveyJobFUA_1 = require("../screens/SurveyPenutupanMySurveyJobFUA");
var SurveyPenutupanGoogleMaps_1 = require("../screens/SurveyPenutupanGoogleMaps");
var SurveyPenutupanAssignJob_1 = require("../screens/SurveyPenutupanAssignJob");
var SurveyPenutupanHistoryFUA_1 = require("../screens/SurveyPenutupanHistoryFUA");
var Stack = native_stack_1.createNativeStackNavigator();
var StackNavigator = function () {
    return (react_1["default"].createElement(Stack.Navigator, { initialRouteName: "login", screenOptions: {
            headerShown: false
        } },
        react_1["default"].createElement(Stack.Screen, { name: "login", component: LoginPage_1["default"], options: {
                gestureEnabled: false
            } }),
        react_1["default"].createElement(Stack.Screen, { name: "main", component: BottomTabNavigator_1["default"], options: {
                gestureEnabled: false
            } }),
        react_1["default"].createElement(Stack.Screen, { name: "homeCarousel", component: HomeCarouselDetailPage_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "notification", component: NotificationPage_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "surveyPenutupan", component: MenuAwalSurveyPenutupan_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "surveyPenutupanFormIncomingJobFUA", component: SurveyPenutupanIncomingJobFUA_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "surveyPenutupanFormMySurveyJobFUA", component: SurveyPenutupanMySurveyJobFUA_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "surveyPenutupanAssignJob", component: SurveyPenutupanAssignJob_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "surveyPenutupanHistoryFUA", component: SurveyPenutupanHistoryFUA_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "supervisor", component: MenuAwalSupervisor_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "surveyor", component: MenuAwalSurveyor_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "googleMaps", component: SurveyPenutupanGoogleMaps_1["default"] })));
};
exports["default"] = StackNavigator;
