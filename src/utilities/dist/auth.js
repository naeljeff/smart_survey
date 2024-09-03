"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.handleTokenAuth = void 0;
var jwt_decode_1 = require("jwt-decode");
var native_1 = require("@react-navigation/native");
var storeUser_1 = require("../store/storeUser");
exports.handleTokenAuth = function (jwtToken, navigation) { return __awaiter(void 0, void 0, void 0, function () {
    var decodedToken, token, source_login, messageResponse, setUserData;
    return __generator(this, function (_a) {
        try {
            decodedToken = jwt_decode_1.jwtDecode(jwtToken);
            token = decodedToken.token;
            source_login = decodedToken.source_login;
            messageResponse = {
                device_id: decodedToken.device_id,
                full_name: decodedToken.full_name,
                email: decodedToken.email,
                no_hp: decodedToken.no_hp,
                aegis_dept: decodedToken.aegis_dept,
                aegis_dept_full: decodedToken.aegis_dept_full,
                cabang: decodedToken.cabang,
                role: decodedToken.role,
                iat: decodedToken.iat,
                exp: decodedToken.exp
            };
            setUserData = storeUser_1.useUserStore.getState().setUserData;
            setUserData({ token: token, messageResponse: messageResponse, source_login: source_login });
            navigation.dispatch(native_1.CommonActions.reset({
                index: 0,
                routes: [{ name: 'main' }]
            }));
        }
        catch (error) {
            console.error('Error handling token:', error);
        }
        return [2 /*return*/];
    });
}); };
