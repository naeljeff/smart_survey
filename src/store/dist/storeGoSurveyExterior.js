"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useGoSurveyExterior = void 0;
var zustand_1 = require("zustand");
exports.useGoSurveyExterior = zustand_1.create(function (set) { return ({
    exteriorData: {},
    addOrUpdateExteriorData: function (part, newData) {
        return set(function (state) {
            var _a;
            return ({
                exteriorData: __assign(__assign({}, state.exteriorData), (_a = {}, _a[part] = __assign(__assign({}, state.exteriorData[part]), newData), _a))
            });
        });
    }
}); });
