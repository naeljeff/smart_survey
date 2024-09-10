"use strict";
exports.__esModule = true;
exports.useSelectedSurvey = void 0;
var zustand_1 = require("zustand");
exports.useSelectedSurvey = zustand_1.create(function (set) { return ({
    // initial
    data: null,
    setSelectedSurvey: function (survey) { return set({ data: survey }); },
    clearSelectedSurvey: function () { return set({ data: null }); }
}); });
