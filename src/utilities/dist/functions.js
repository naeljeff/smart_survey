"use strict";
exports.__esModule = true;
exports.formatInputDateFUA = exports.calcAgingDate = exports.formatDateSurveyPenutupanJob = exports.formatDateStatusBarSurveyPenutupan = exports.getTimeOfDay = void 0;
var getCurrentHour = function () {
    var now = new Date();
    return now.getHours();
};
exports.getTimeOfDay = function () {
    var hour = getCurrentHour();
    if (hour >= 5 && hour < 12) {
        return 'morning';
    }
    else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    }
    else {
        return 'night';
    }
};
exports.formatDateStatusBarSurveyPenutupan = function (currentDate) {
    return String(currentDate.getDate()).padStart(2, '0') + "-" + currentDate.toLocaleString('en-US', { month: 'short' }) + "-" + String(currentDate.getFullYear()).slice(-2);
};
exports.formatDateSurveyPenutupanJob = function (date) {
    var itemDate = new Date(date);
    var formattedDate = String(itemDate.getDate()).padStart(2, '0') + "-" + itemDate.toLocaleString('en-US', { month: 'short' }) + "-" + String(itemDate.getFullYear()).slice(-2);
    return formattedDate;
};
exports.calcAgingDate = function (date) {
    var itemDate = new Date(date);
    var currDate = new Date();
    var dayDiff = Math.round((currDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24));
    return dayDiff;
};
exports.formatInputDateFUA = function (date) {
    if (!date)
        return '';
    var day = date.getDate().toString().padStart(2, '0');
    var month = date.toLocaleString('en-US', { month: 'short' });
    var year = date.getFullYear().toString().slice(-2);
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    return day + "-" + month + "-" + year + " " + hours + ":" + minutes;
};
