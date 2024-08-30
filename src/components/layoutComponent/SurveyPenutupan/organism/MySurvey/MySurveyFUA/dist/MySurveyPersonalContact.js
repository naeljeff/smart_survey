"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var MySurveyPersonalContact = react_1["default"].memo(function (_a) {
    var item = _a.item;
    var _b = react_1.useState((item === null || item === void 0 ? void 0 : item.nama) || ''), name = _b[0], setName = _b[1];
    var _c = react_1.useState((item === null || item === void 0 ? void 0 : item.alamatSurvey) || ''), address = _c[0], setAddress = _c[1];
    var _d = react_1.useState((item === null || item === void 0 ? void 0 : item.noTelp) || ''), phoneNumber = _d[0], setPhoneNumber = _d[1];
    var _e = react_1.useState((item === null || item === void 0 ? void 0 : item.email) || ''), email = _e[0], setEmail = _e[1];
    var _f = react_1.useState((item === null || item === void 0 ? void 0 : item.catatan) || ''), remarks = _f[0], setRemarks = _f[1];
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-2" },
        react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3 py-1.5" }, "Personal Contact Person"),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2" }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-center items-start space-y-2 px-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Name"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: name, onChangeText: setName, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Address"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: address, onChangeText: setAddress, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Phone Number"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: phoneNumber, onChangeText: setPhoneNumber, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Email"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: email, onChangeText: setEmail, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "MKG Remarks"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: remarks, onChangeText: setRemarks, multiline: true, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })))));
});
exports["default"] = MySurveyPersonalContact;
