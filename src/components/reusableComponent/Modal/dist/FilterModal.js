"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_1 = require("react");
var ModalListItem_1 = require("./ModalListItem");
var FilterModal = function (_a) {
    var data = _a.data, onClose = _a.onClose, title = _a.title, setSearchFilter = _a.setSearchFilter, onSelectedFilter = _a.onSelectedFilter, searchFilter = _a.searchFilter, selectedFilter = _a.selectedFilter;
    var _b = react_1.useState(false), isLoadingData = _b[0], setIsLoadingData = _b[1];
    var _c = react_1.useState(selectedFilter), selectedItem = _c[0], setSelectedItem = _c[1];
    var animation = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    react_1.useEffect(function () {
        react_native_1.Animated.timing(animation, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }).start();
    }, [animation]);
    react_1.useEffect(function () {
        setSelectedItem(selectedFilter);
    }, [selectedFilter]);
    var handleClose = function () {
        react_native_1.Animated.timing(animation, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
        }).start(function () {
            onClose();
        });
    };
    var handleSelectFilter = function (value) {
        if (selectedItem === value) {
            setSelectedItem(null);
            onSelectedFilter('');
        }
        else {
            setSelectedItem(value);
            onSelectedFilter(value);
        }
        handleClose();
    };
    var filterSelectionList = data.filter(function (item) {
        return item.label.toLowerCase().includes(searchFilter.toLowerCase());
    });
    return (react_1["default"].createElement(react_native_1.Animated.View, { className: "absolute inset-0 bg-gray-500/50 z-50", style: { opacity: animation } },
        react_1["default"].createElement(react_native_1.Animated.View, { className: "flex min-h-full items-center justify-center p-7", style: { opacity: animation } },
            react_1["default"].createElement(react_native_1.Animated.View, { className: "w-full h-full bg-white p-4 rounded-lg shadow-xl", style: { opacity: animation } },
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row justify-between items-center px-1 mb-3" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black/90 font-semibold capitalize" },
                        "Filter ",
                        title),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleClose },
                        react_1["default"].createElement(Ionicons_1["default"], { name: "close", size: 24, color: "black" }))),
                react_1["default"].createElement(react_native_1.View, { className: "relative w-full h-[40px] flex flex-row mb-3" },
                    react_1["default"].createElement(react_native_1.TextInput, { className: "w-full border border-black rounded-lg pl-3 pr-12 pb-2.5 focus:border-[#ff7f50] focus:border-2", placeholder: "Enter your search", value: searchFilter, onChangeText: setSearchFilter }),
                    searchFilter === '' ? null : (react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "absolute right-3 top-2.5 -translate-y-1/2", onPress: function () { return setSearchFilter(''); } },
                        react_1["default"].createElement(Ionicons_1["default"], { name: "close", size: 20, color: "black" })))),
                react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex items-center justify-center" }, isLoadingData ? (react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#00bffe" })) : (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full" },
                    react_1["default"].createElement(react_native_1.FlatList, { showsVerticalScrollIndicator: false, data: filterSelectionList, renderItem: function (_a) {
                            var item = _a.item;
                            return (react_1["default"].createElement(ModalListItem_1["default"], { item: item, onPress: handleSelectFilter, isSelected: selectedItem === item.label }));
                        }, keyExtractor: function (item) { return item.key; } }))))))));
};
exports["default"] = FilterModal;
