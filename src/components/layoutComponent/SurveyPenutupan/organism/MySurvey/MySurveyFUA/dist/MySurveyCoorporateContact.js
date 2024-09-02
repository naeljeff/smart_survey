"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var MySurveyCoorporateContact = react_1["default"].memo(function (_a) {
    var item = _a.item;
    var _b = react_1.useState((item === null || item === void 0 ? void 0 : item.noPengajuanSurvey) || ''), noPengajuan = _b[0], setNoPengajuan = _b[1];
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col items-start justify-center mb-2" },
        react_1["default"].createElement(react_native_1.Text, { className: "text-lg text-black font-bold px-3 py-1.5" }, "Coorporate Contact Person"),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mb-2" }),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-col justify-center items-start space-y-2 px-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Company Code"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Company Name"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "SOB Code"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "SOB Name"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "SOB Type"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "Contact Person"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "SOB Phone"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })),
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex flex-row items-center justify-between space-x-2" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[30%] flex flex-row justify-between items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, "SOB Remarks"),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-black capitalize" }, ":")),
                react_1["default"].createElement(react_native_1.TextInput, { value: noPengajuan, onChangeText: setNoPengajuan, multiline: true, className: "flex-1 text-black text-xs uppercase py-1 px-2 border border-gray-300 bg-gray-100 rounded" })))));
});
exports["default"] = MySurveyCoorporateContact;
