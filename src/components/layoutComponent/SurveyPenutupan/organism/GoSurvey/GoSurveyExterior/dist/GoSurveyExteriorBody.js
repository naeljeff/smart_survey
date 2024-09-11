"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyExteriorDetail_1 = require("../../../molecules/GoSurvey/GoSurveyExterior/GoSurveyExteriorDetail");
var storeGoSurveyExterior_1 = require("../../../../../../store/storeGoSurveyExterior");
var GoSurveyExteriorBody = function () {
    var exteriorData = storeGoSurveyExterior_1.useGoSurveyExterior().exteriorData;
    console.log(exteriorData);
    return (react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, className: "flex-1" },
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-semibold text-black text-[16px] px-5 py-1" }, "Exterior / Interior")),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "bemper - belakang", type: "bemper_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "bemper - depan", type: "bemper_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu stop kiri - belakang", type: "lampu_stop_kiri_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu besar kiri - depan", type: "lampu_besar_kiri_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu stop kanan - belakang", type: "lampu_stop_kanan_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu besar kanan - depan", type: "lampu_besar_kanan_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu sein kiri - belakang", type: "lampu_sein_kiri_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu sein kiri - depan", type: "lampu_sein_kiri_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu sein kanan - belakang", type: "lampu_sein_kanan_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "lampu sein kanan - depan", type: "lampu_sein_kanan_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "spakboard kiri - belakang", type: "spakboard_kiri_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "spakboard kiri - depan", type: "spakboard_kiri_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "spakboard kanan - belakang", type: "spakboard_kanan_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "spakboard kanan - depan", type: "spakboard_kanan_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "pintu kiri - belakang", type: "pintu_kiri_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "cover spion kiri - depan", type: "cover_spion_kiri_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "pintu kanan - belakang", type: "pintu_kanan_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "cover spion kanan - depan", type: "cover_spion_kanan_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "kap bagasi - belakang", type: "kap_bagasi_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "pintu kiri - depan", type: "pintu_kiri_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "kaca belakang - belakang", type: "kaca_belakang_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "pintu kanan - depan", type: "pintu_kanan_depan" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "trisplank kiri - belakang", type: "trisplank_kiri_belakang" }),
        react_1["default"].createElement(GoSurveyExteriorDetail_1["default"], { title: "kap mesin - depan", type: "kap_mesin_depan" })));
};
exports["default"] = GoSurveyExteriorBody;
