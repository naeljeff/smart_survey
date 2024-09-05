"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Information_1 = require("../../../../../reusableComponent/StaticDisplay/Information");
var SurveyJobDetailForMap_1 = require("../../../atoms/IncomingJob/SurveyJobDetailForMap");
var IncomingJobAssignJob = function (_a) {
    var item = _a.item;
    return (react_1["default"].createElement(react_native_1.View, { className: "flex-1 bg-white" },
        react_1["default"].createElement(Information_1["default"], null),
        react_1["default"].createElement(SurveyJobDetailForMap_1["default"], { item: item })));
};
exports["default"] = IncomingJobAssignJob;
