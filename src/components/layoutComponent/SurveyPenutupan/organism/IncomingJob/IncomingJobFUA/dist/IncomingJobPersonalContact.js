"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var IncomingJobPersonalContact = react_1["default"].memo(function (_a) {
    var _b, _c, _d, _e, _f;
    var item = _a.item;
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-2" },
        react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3 py-1.5" }, "Personal Contact Person"),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2" }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-center items-start space-y-2 px-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Name"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, (_b = item === null || item === void 0 ? void 0 : item.nama) !== null && _b !== void 0 ? _b : 'Null')),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Address"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, (_c = item === null || item === void 0 ? void 0 : item.alamat) !== null && _c !== void 0 ? _c : 'Null')),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Phone Number"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, (_d = item === null || item === void 0 ? void 0 : item.noTelp) !== null && _d !== void 0 ? _d : 'Null')),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Email"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, (_e = item === null || item === void 0 ? void 0 : item.email) !== null && _e !== void 0 ? _e : 'Null')),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "MKG Remarks"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.Text, { className: "flex-1 text-gray-400 text-xs uppercase py-2.5 px-2 border border-gray-300 bg-gray-100 rounded" }, (_f = item === null || item === void 0 ? void 0 : item.catatan) !== null && _f !== void 0 ? _f : 'Null')))));
});
exports["default"] = IncomingJobPersonalContact;
