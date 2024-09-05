"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var functions_1 = require("../../../../../utilities/functions");
var SurveyJobAssignJobItemSubList = function (_a) {
    var item = _a.item, index = _a.index;
    var dayDiff = functions_1.calcAgingDate(item.createdAt);
    var formattedDate = functions_1.formatDateSurveyPenutupanJob(item.createdAt);
    return (react_1["default"].createElement(react_native_1.View, { className: "w-screen flex flex-row justify-start items-center px-5 space-x-3" },
        react_1["default"].createElement(react_native_1.View, { className: "flex-[0.1] flex items-center justify-center " },
            react_1["default"].createElement(Ionicons_1["default"], { name: "mail", size: 24, color: "black" }),
            react_1["default"].createElement(react_native_1.Text, { className: "absolute w-3.5 h-3.5 text-[8px] text-center pt-0.5 bg-red-500 text-white rounded-full top-4 left-1" }, "!")),
        react_1["default"].createElement(react_native_1.View, { className: "flex-[0.65] flex-col gap-y-1" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-bold text-black uppercase" },
                item.noPengajuanSurvey,
                "/",
                item.unitNo),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" },
                item.merek,
                " - ",
                item.tipe,
                " - ",
                item.model,
                " | ",
                item.platNomor),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" }, item.noTelp),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" }, item.jenisAsuransi + " + " + item.perluasan.join('; ')),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" }, item.alamat)),
        react_1["default"].createElement(react_native_1.View, { className: "flex-[0.2] flex-col gap-y-1 -mr-5 ml-1" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black font-semibold uppercase mb-2" }, item.status),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black" },
                dayDiff,
                " Days"),
            react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black" }, formattedDate))));
};
exports["default"] = SurveyJobAssignJobItemSubList;
