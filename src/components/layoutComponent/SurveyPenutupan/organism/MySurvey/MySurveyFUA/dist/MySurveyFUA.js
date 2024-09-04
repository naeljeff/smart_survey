"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_date_picker_1 = require("react-native-date-picker");
var react_1 = require("react");
var FontAwesome6_1 = require("react-native-vector-icons/FontAwesome6");
var JobMonitoringFUAStatus_1 = require("../../../atoms/JobMonitoring/JobMonitoringFUAStatus");
var functions_1 = require("../../../../../../utilities/functions");
var MySurveyFUA = react_1["default"].memo(function (_a) {
    var _b, _c;
    var tempFua = _a.tempFua, setTempFua = _a.setTempFua;
    var _d = react_1.useState(false), isOpenContactDate = _d[0], setIsOpenContactDate = _d[1];
    var _e = react_1.useState(false), isOpenAppointmentDate = _e[0], setIsOpenAppointmentDate = _e[1];
    var _f = react_1.useState(false), isStatusOpen = _f[0], setIsStatusOpen = _f[1];
    var onConfirmContactDate = function (date) {
        setIsOpenContactDate(false);
        if (date)
            setTempFua(function (prev) { return (__assign(__assign({}, prev), { contactDate: date })); });
    };
    var closeContactDate = function () {
        setIsOpenContactDate(false);
    };
    var onConfirmAppointmentDate = function (date) {
        setIsOpenAppointmentDate(false);
        if (date)
            setTempFua(function (prev) { return (__assign(__assign({}, prev), { appointmentDate: date })); });
    };
    var closeAppointmentDate = function () {
        setIsOpenAppointmentDate(false);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-4" },
        react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3" }, "Follow Up Activity"),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2 mt-1" }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-center items-start space-y-2 px-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Contact Date"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_date_picker_1["default"], { modal: true, open: isOpenContactDate, date: (_b = tempFua.contactDate) !== null && _b !== void 0 ? _b : new Date(), locale: "en-GB", onConfirm: onConfirmContactDate, onCancel: closeContactDate }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsOpenContactDate(true); }, className: "flex-1" },
                    react_1["default"].createElement(react_native_1.TextInput, { value: functions_1.formatInputDateFUA(tempFua.contactDate), editable: false, placeholder: "Select Contact Date", className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Appointment Date"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_date_picker_1["default"], { modal: true, open: isOpenAppointmentDate, date: (_c = tempFua.appointmentDate) !== null && _c !== void 0 ? _c : new Date(), locale: "en-GB", onConfirm: onConfirmAppointmentDate, onCancel: closeAppointmentDate }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsOpenAppointmentDate(true); }, className: "flex-1" },
                    react_1["default"].createElement(react_native_1.TextInput, { value: functions_1.formatInputDateFUA(tempFua.appointmentDate), editable: false, placeholder: "Select Appointment Date", className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Address"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: tempFua.address, onChangeText: function (text) {
                        return setTempFua(function (prev) { return (__assign(__assign({}, prev), { address: text })); });
                    }, multiline: true, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Status"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsStatusOpen(true); }, className: "relative flex-1 flex-row items-center border border-gray-300 bg-gray-100 rounded pr-3" },
                    react_1["default"].createElement(react_native_1.TextInput, { value: tempFua.status, editable: false, className: "flex-1 text-black text-xs uppercase py-1 px-2" }),
                    react_1["default"].createElement(FontAwesome6_1["default"], { name: isStatusOpen ? 'chevron-up' : 'chevron-down', size: 16, color: "black" })),
                isStatusOpen && (react_1["default"].createElement(JobMonitoringFUAStatus_1["default"], { openFUAStatus: setIsStatusOpen, statusFUA: function (status) {
                        return setTempFua(function (prev) { return (__assign(__assign({}, prev), { status: status })); });
                    } }))),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Remarks"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: tempFua.remarks, onChangeText: function (text) {
                        return setTempFua(function (prev) { return (__assign(__assign({}, prev), { remarks: text })); });
                    }, multiline: true, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })))));
});
exports["default"] = MySurveyFUA;
