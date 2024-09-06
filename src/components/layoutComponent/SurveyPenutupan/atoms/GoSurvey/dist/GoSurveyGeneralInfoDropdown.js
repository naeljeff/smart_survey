"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var FontAwesome6_1 = require("react-native-vector-icons/FontAwesome6");
var notificationFilterList_1 = require("../../../../../services/data/notificationFilterList");
var GoSurveyOptionModal_1 = require("../../../../reusableComponent/Modal/GoSurveyOptionModal");
var GoSurveyGeneralInfoDropdown = function (_a) {
    var data = _a.data, fieldName = _a.fieldName, onChange = _a.onChange, placeholder = _a.placeholder, properties = _a.properties;
    var _b = react_1.useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var setModalVisibility = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    var _c = react_1.useState(''), searchFilter = _c[0], setSearchFilter = _c[1];
    var _d = react_1.useState(''), selectedFilter = _d[0], setSelectedFilter = _d[1];
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2 mt-2" },
        react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, fieldName),
            react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsDropdownOpen(true); }, className: "relative flex-1 flex-row items-center border border-gray-300 bg-gray-100 rounded pr-3" },
            react_1["default"].createElement(react_native_1.TextInput, { value: data, placeholder: placeholder, editable: false, className: "flex-1 text-black text-xs uppercase py-1 px-2" }),
            react_1["default"].createElement(FontAwesome6_1["default"], { name: isDropdownOpen ? 'chevron-up' : 'chevron-down', size: 16, color: "black" })),
        isDropdownOpen && (react_1["default"].createElement(GoSurveyOptionModal_1["default"], { visible: isDropdownOpen, data: notificationFilterList_1.notificationFilterList, onClose: setModalVisibility, title: fieldName, searchFilter: searchFilter, setSearchFilter: setSearchFilter, onSelectedFilter: setSelectedFilter, selectedFilter: selectedFilter }))));
};
exports["default"] = GoSurveyGeneralInfoDropdown;
