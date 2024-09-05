"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var functions_1 = require("../../../../../../../utilities/functions");
var MySurveyFuaHistoryBody = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var data = _a.data;
    var _l = react_1.useState(0), currentPage = _l[0], setCurrentPage = _l[1];
    var totalPages = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.length;
    if (totalPages === 0) {
        return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-4 mt-2" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row justify-between items-center" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3" }, "Follow Up Activity"),
                react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3" },
                    currentPage + 0,
                    " of ",
                    totalPages)),
            react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2 mt-1" }),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-center justify-center" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-lg font-semibold text-center" }, "No history FUA for this survey"))));
    }
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-4 mt-2" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row justify-between items-center" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3" }, "Follow Up Activity"),
            react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3" },
                currentPage + 1,
                " of ",
                totalPages)),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2 mt-1" }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex-1 flex flex-row items-center space-x-1" },
            react_1["default"].createElement(react_native_1.View, { className: "pl-1" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { disabled: currentPage === 0 ? true : false, onPress: function () { return setCurrentPage(currentPage - 1); } },
                    react_1["default"].createElement(Ionicons_1["default"], { name: 'chevron-back', size: 26, color: currentPage !== 0 ? 'black' : 'lightgray' }))),
            react_1["default"].createElement(react_native_1.View, { className: "flex-1 flex flex-col justify-center items-start space-y-2 px-1" },
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                    react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Contact Date"),
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                    react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, ((_c = data === null || data === void 0 ? void 0 : data.data[currentPage]) === null || _c === void 0 ? void 0 : _c.contactDate) ? functions_1.formatInputDateFUA(new Date(data.data[currentPage].contactDate))
                        : '')),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                    react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Appointment Date"),
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                    react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, ((_d = data === null || data === void 0 ? void 0 : data.data[currentPage]) === null || _d === void 0 ? void 0 : _d.appointmentDate) ? functions_1.formatInputDateFUA(new Date(data.data[currentPage].appointmentDate))
                        : '')),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                    react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Address"),
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                    react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, ((_e = data === null || data === void 0 ? void 0 : data.data[currentPage]) === null || _e === void 0 ? void 0 : _e.address) ? (_f = data === null || data === void 0 ? void 0 : data.data[currentPage]) === null || _f === void 0 ? void 0 : _f.address : '')),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                    react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Status"),
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                    react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, ((_g = data === null || data === void 0 ? void 0 : data.data[currentPage]) === null || _g === void 0 ? void 0 : _g.status) ? (_h = data === null || data === void 0 ? void 0 : data.data[currentPage]) === null || _h === void 0 ? void 0 : _h.status : '')),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                    react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Remarks"),
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                    react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, ((_j = data === null || data === void 0 ? void 0 : data.data[currentPage]) === null || _j === void 0 ? void 0 : _j.remarks) ? (_k = data === null || data === void 0 ? void 0 : data.data[currentPage]) === null || _k === void 0 ? void 0 : _k.remarks : ''))),
            react_1["default"].createElement(react_native_1.View, { className: "pr-1" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { disabled: currentPage + 1 === totalPages ? true : false, onPress: function () { return setCurrentPage(currentPage + 1); } },
                    react_1["default"].createElement(Ionicons_1["default"], { name: 'chevron-forward', size: 26, color: currentPage + 1 !== totalPages ? 'black' : 'lightgray' }))))));
};
exports["default"] = MySurveyFuaHistoryBody;
