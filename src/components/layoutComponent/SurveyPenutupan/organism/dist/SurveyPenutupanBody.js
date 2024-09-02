"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var IncomingJobBody_1 = require("./IncomingJob/IncomingJobBody");
var JobMonitoringBody_1 = require("./JobMonitoring/JobMonitoringBody");
var MySurveyBody_1 = require("./MySurvey/MySurveyBody");
var HistoryBody_1 = require("./History/HistoryBody");
var SurveyPenutupanStatusBar_1 = require("../molecules/SurveyPenutupanStatusBar");
var SurveyPenutupanNavbar_1 = require("../molecules/SurveyPenutupanNavbar");
var SurveyPenutupanBody = function () {
    var _a = react_1.useState('Incoming Job'), menuOptions = _a[0], setMenuOptions = _a[1];
    var renderComponent = function () {
        switch (menuOptions) {
            case 'Incoming Job':
                return react_1["default"].createElement(IncomingJobBody_1["default"], null);
            case 'Job Monitoring':
                return react_1["default"].createElement(JobMonitoringBody_1["default"], null);
            case 'My Survey':
                return react_1["default"].createElement(MySurveyBody_1["default"], null);
            case 'History':
                return react_1["default"].createElement(HistoryBody_1["default"], null);
            default:
                return null;
        }
    };
    var handleMenuChangeNavigation = function (option) {
        setMenuOptions(option);
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex flex-col bg-[#fff]" },
        react_1["default"].createElement(SurveyPenutupanStatusBar_1["default"], null),
        react_1["default"].createElement(SurveyPenutupanNavbar_1["default"], { onMenuChange: handleMenuChangeNavigation }),
        renderComponent()));
};
exports["default"] = SurveyPenutupanBody;
