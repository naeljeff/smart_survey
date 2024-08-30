"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Feather_1 = require("react-native-vector-icons/Feather");
var react_native_paper_1 = require("react-native-paper");
var native_1 = require("@react-navigation/native");
var SurveyJobItemMenu = function (_a) {
    var item = _a.item;
    var navigationToGoogleMap = native_1.useNavigation();
    var _b = react_1.useState(false), menuState = _b[0], setMenuState = _b[1];
    var openMenu = function () { return setMenuState(true); };
    var closeMenu = function () { return setMenuState(false); };
    var handleOnPressView = function () {
        console.log("Item: " + item.noPengajuanSurvey);
        navigationToGoogleMap.navigate('googleMaps', {
            item: item
        });
    };
    return (react_1["default"].createElement(react_native_paper_1.Menu, { visible: menuState, onDismiss: closeMenu, contentStyle: { backgroundColor: '#fff' }, elevation: 5, anchor: react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: openMenu },
            react_1["default"].createElement(Feather_1["default"], { name: "more-vertical", size: 22, color: "black" })) },
        react_1["default"].createElement(react_native_paper_1.Menu.Item, { style: {
                height: 50
            }, titleStyle: { fontSize: 16, color: 'black' }, onPress: function () {
                closeMenu();
                handleOnPressView();
            }, title: "View" }),
        react_1["default"].createElement(react_native_paper_1.Divider, null),
        react_1["default"].createElement(react_native_paper_1.Menu.Item, { style: {
                height: 50
            }, titleStyle: { fontSize: 16, color: 'black' }, onPress: function () {
                closeMenu();
                console.log("Reject Clicked: " + item.noPengajuanSurvey);
            }, title: "Reject" }),
        react_1["default"].createElement(react_native_paper_1.Divider, null),
        react_1["default"].createElement(react_native_paper_1.Menu.Item, { style: {
                height: 50
            }, titleStyle: { fontSize: 16, color: 'black' }, onPress: function () {
                closeMenu();
                console.log("Accept Clicked: " + item.noPengajuanSurvey);
            }, title: "Accept" }),
        react_1["default"].createElement(react_native_paper_1.Divider, null),
        react_1["default"].createElement(react_native_paper_1.Menu.Item, { style: {
                height: 50
            }, titleStyle: { fontSize: 16, color: 'black' }, onPress: function () {
                closeMenu();
                console.log("Assign Clicked: " + item.noPengajuanSurvey);
            }, title: "Assign" })));
};
exports["default"] = SurveyJobItemMenu;
