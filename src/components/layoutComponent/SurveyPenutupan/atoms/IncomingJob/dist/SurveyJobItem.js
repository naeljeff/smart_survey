"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var functions_1 = require("../../../../../utilities/functions");
var SurveyJobItemMenu_1 = require("./SurveyJobItemMenu");
var storeSelectedSurvey_1 = require("../../../../../store/storeSelectedSurvey");
var SurveyJobItem = react_1["default"].memo(function (_a) {
    var item = _a.item, index = _a.index, navigation = _a.navigation;
    var dayDiff = functions_1.calcAgingDate(item.createdAt);
    var formattedDate = functions_1.formatDateSurveyPenutupanJob(item.createdAt);
    var clearSelectedSurvey = storeSelectedSurvey_1.useSelectedSurvey(function (state) { return state.clearSelectedSurvey; });
    var selectedSurvey = storeSelectedSurvey_1.useSelectedSurvey(function (state) { return state.setSelectedSurvey; });
    var handleListPress = function () {
        console.log("Index: " + index + " | Item: " + item.noPengajuanSurvey);
        if (item) {
            clearSelectedSurvey();
            selectedSurvey(item);
        }
        else
            selectedSurvey(item);
        navigation.navigate('surveyPenutupanFormIncomingJobFUA');
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-screen py-0.5 px-1 border-b border-black" },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleListPress, className: "w-screen flex flex-row justify-start items-center" },
            react_1["default"].createElement(react_native_1.View, { className: "relative flex-[0.1] flex items-center justify-center " },
                react_1["default"].createElement(Ionicons_1["default"], { name: "mail", size: 24, color: "black" }),
                react_1["default"].createElement(react_native_1.Text, { className: "absolute w-3.5 h-3.5 text-[8px] text-center pt-0.5 bg-red-500 text-white rounded-full top-4 left-1" }, "!")),
            react_1["default"].createElement(react_native_1.View, { className: "flex-[0.6] flex-col gap-y-1" },
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
                react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase" }, item.alamatSurvey)),
            react_1["default"].createElement(react_native_1.View, { className: "flex-[0.2] flex-col gap-y-1" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black" },
                    dayDiff,
                    " Days"),
                react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black" }, formattedDate)),
            react_1["default"].createElement(react_native_1.View, { className: "flex-[0.1] flex-col justify-center items-center pr-1.5" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-xs text-black uppercase mb-2" }, item.status),
                react_1["default"].createElement(SurveyJobItemMenu_1["default"], { item: item })))));
});
exports["default"] = SurveyJobItem;
