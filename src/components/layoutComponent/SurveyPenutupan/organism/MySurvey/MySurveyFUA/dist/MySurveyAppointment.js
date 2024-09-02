"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_date_picker_1 = require("react-native-date-picker");
var functions_1 = require("../../../../../../utilities/functions");
var MySurveyAppointment = react_1["default"].memo(function (_a) {
    var item = _a.item;
    var _b = react_1.useState((item === null || item === void 0 ? void 0 : item.noPengajuanSurvey) || ''), noPengajuan = _b[0], setNoPengajuan = _b[1];
    var _c = react_1.useState((item === null || item === void 0 ? void 0 : item.unitNo) || ''), unitNo = _c[0], setUnitNo = _c[1];
    var _d = react_1.useState((item === null || item === void 0 ? void 0 : item.requesterFullName) || ''), requestedBy = _d[0], setRequestedBy = _d[1];
    var initialRequestedDate = (item === null || item === void 0 ? void 0 : item.createdAt) ? new Date(item.createdAt.replace(' ', 'T'))
        : undefined;
    var _e = react_1.useState(initialRequestedDate), requestedDate = _e[0], setRequestedDate = _e[1];
    var _f = react_1.useState(false), isRequestedDateOpen = _f[0], setIsRequestedDateOpen = _f[1];
    var aging = (item === null || item === void 0 ? void 0 : item.createdAt) ? functions_1.calcAgingDate(item.createdAt)
        : null;
    var onConfirmRequestedDate = function (date) {
        setIsRequestedDateOpen(false);
        setRequestedDate(date);
    };
    var closeRequestedDate = function () {
        setIsRequestedDateOpen(false);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-2" },
        react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3 py-1.5" }, "Appointment Schedule"),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2" }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-center items-start space-y-2 px-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Register No"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Unit No"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: unitNo, onChangeText: setUnitNo, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Requested By"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: requestedBy, onChangeText: setRequestedBy, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Requested Date"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_date_picker_1["default"], { modal: true, open: isRequestedDateOpen, date: requestedDate !== null && requestedDate !== void 0 ? requestedDate : new Date(), locale: "en-GB", onConfirm: onConfirmRequestedDate, onCancel: closeRequestedDate }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsRequestedDateOpen(true); }, className: "flex-1" },
                    react_1["default"].createElement(react_native_1.TextInput, { value: functions_1.formatInputDateFUA(requestedDate), editable: false, placeholder: "Select Appointment Date", className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Aging"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, aging)),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Priority"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, (item === null || item === void 0 ? void 0 : item.priority) || null)))));
});
exports["default"] = MySurveyAppointment;
