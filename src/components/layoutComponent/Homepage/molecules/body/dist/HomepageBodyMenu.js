"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var HomepageNavigationButton_1 = require("../../atoms/HomepageNavigationButton");
var storeUser_1 = require("../../../../../store/storeUser");
var HomepageBodyMenu = function () {
    var navigation = native_1.useNavigation();
    var source_login = storeUser_1.useUserStore(function (state) { return ({
        source_login: state.source_login || []
    }); }).source_login;
    // Display menu based on role (grant)
    var canAccessPenutupan = source_login.includes('RM_SUR_MENU_PENUTUPAN');
    var canAccessKerusakan = source_login.includes('RM_SUR_MENU_KERUSAKAN');
    var isRoleLike = source_login.includes('RM_SUR_LOGIN');
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex-row items-start p-10 " + (isRoleLike && canAccessKerusakan && canAccessPenutupan
            ? 'justify-between'
            : isRoleLike && canAccessKerusakan
                ? 'justify-evenly'
                : isRoleLike && canAccessPenutupan
                    ? 'justify-center'
                    : '') }, isRoleLike && canAccessPenutupan && canAccessKerusakan ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(HomepageNavigationButton_1["default"], { title: "Survey Penutupan", icon: "event-note", onPress: function () { return navigation.navigate('surveyPenutupan'); } }),
        react_1["default"].createElement(HomepageNavigationButton_1["default"], { title: "Supervisor", icon: "supervisor", onPress: function () { return navigation.navigate('supervisor'); } }),
        react_1["default"].createElement(HomepageNavigationButton_1["default"], { title: "Surveyor", icon: "surveyor", onPress: function () { return navigation.navigate('surveyor'); } }))) : isRoleLike && canAccessKerusakan ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(HomepageNavigationButton_1["default"], { title: "Supervisor", icon: "supervisor", onPress: function () { return navigation.navigate('supervisor'); } }),
        react_1["default"].createElement(HomepageNavigationButton_1["default"], { title: "Surveyor", icon: "surveyor", onPress: function () { return navigation.navigate('surveyor'); } }))) : isRoleLike && canAccessPenutupan ? (react_1["default"].createElement(HomepageNavigationButton_1["default"], { title: "Survey Penutupan", icon: "event-note", onPress: function () { return navigation.navigate('surveyPenutupan'); } })) : ('')));
};
exports["default"] = HomepageBodyMenu;
