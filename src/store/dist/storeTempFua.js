"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useFuaStore = void 0;
var zustand_1 = require("zustand");
exports.useFuaStore = zustand_1.create(function (set, get) { return ({
    data: [],
    addTemporaryFUA: function (newFUA) {
        set(function (state) {
            var existingFUA = state.data.findIndex(function (item) {
                return item.noPengajuan === newFUA.noPengajuan &&
                    item.unitNo === newFUA.unitNo;
            });
            // Kalau udh ada jadinya update
            if (existingFUA > -1) {
                var updatedFUAData = __spreadArrays(state.data);
                updatedFUAData[existingFUA] = newFUA;
                return { data: updatedFUAData };
            }
            else {
                return { data: __spreadArrays(state.data, [newFUA]) };
            }
        });
    },
    getTemporaryFUAData: function (noPengajuan, unitNo) {
        return get().data.find(function (item) { return item.noPengajuan === noPengajuan && item.unitNo === unitNo; });
    }
}); });
