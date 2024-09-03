"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SurveyJobDetailForMap = function (_a) {
    var item = _a.item;
    return (react_1["default"].createElement(react_native_1.View, { className: "flex flex-col border-b border-black p-5 space-y-3" },
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
        react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" }, item.alamatSurvey)));
};
exports["default"] = SurveyJobDetailForMap;
