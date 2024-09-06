"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var NavigationHeader_1 = require("../components/reusableComponent/Header/NavigationHeader");
var NotificationBody_1 = require("../components/layoutComponent/Notification/organism/NotificationBody");
var FilterModal_1 = require("../components/reusableComponent/Modal/FilterModal");
var notificationFilterList_1 = require("../services/data/notificationFilterList");
var NotificationPage = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(false), filterModal = _a[0], setFilterModal = _a[1];
    var _b = react_1.useState(''), searchFilter = _b[0], setSearchFilter = _b[1];
    var _c = react_1.useState(''), selectedFilter = _c[0], setSelectedFilter = _c[1];
    var setModalVisibility = function () {
        setFilterModal(!filterModal);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 bg-white" },
        react_1["default"].createElement(NavigationHeader_1["default"], { title: 'Notifications', onPress: function () { return navigation.goBack(); }, onRefresh: function () { } }),
        react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex flex-col bg-white z-20" },
            react_1["default"].createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: false, contentContainerStyle: {
                    flexGrow: 1
                } },
                react_1["default"].createElement(NotificationBody_1["default"], { onOpenModal: setModalVisibility, selectedFilter: selectedFilter }))),
        filterModal && (react_1["default"].createElement(FilterModal_1["default"], { data: notificationFilterList_1.notificationFilterList, onClose: setModalVisibility, title: 'category', searchFilter: searchFilter, setSearchFilter: setSearchFilter, onSelectedFilter: setSelectedFilter, selectedFilter: selectedFilter }))));
};
exports["default"] = NotificationPage;
