"use strict";
exports.__esModule = true;
exports.useUserStore = void 0;
var zustand_1 = require("zustand");
exports.useUserStore = zustand_1.create(function (set) { return ({
    token: null,
    messageResponse: null,
    source_login: null,
    setUserData: function (data) {
        return set({
            token: data.token,
            messageResponse: data.messageResponse,
            source_login: data.source_login
        });
    },
    clearUserData: function () {
        return set({
            token: null,
            messageResponse: null,
            source_login: null
        });
    }
}); });
