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
exports.goSurveyDataByProperties = void 0;
var surveyPenutupanGoSurveyGeneralInfoList_1 = require("../../constants/surveyPenutupanGoSurveyGeneralInfoList");
var apiClient_1 = require("../../utilities/apiClient");
var BASE_GET_VEHICLE = process.env.BASE_GET_VEHICLE_LIST_URL || '';
var surveyApiClient = apiClient_1["default"](BASE_GET_VEHICLE);
var getVehicleMakes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, responseData, formattedResponse, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, surveyApiClient.post('', {
                        action: 'getMakes'
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            case 1:
                res = _a.sent();
                responseData = res.data.code;
                formattedResponse = responseData.map(function (item) {
                    var keyWords = item.VEHICLE_MAKE.toLowerCase().split(' ');
                    var key = keyWords
                        .map(function (word, index) {
                        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
                    })
                        .join('');
                    var label = keyWords
                        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
                        .join(' ');
                    return { key: key, label: label };
                });
                return [2 /*return*/, formattedResponse];
            case 2:
                error_1 = _a.sent();
                console.log("Error getting vehicle makes: " + error_1);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
var getVehicleTypes = function (make) { return __awaiter(void 0, void 0, void 0, function () {
    var res, responseData, formattedResponse, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, surveyApiClient.post('', {
                        action: 'getTypes',
                        make: make
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            case 1:
                res = _a.sent();
                responseData = res.data.Data;
                formattedResponse = responseData.map(function (item) {
                    var keyWords = item.toLowerCase().split(' ');
                    var key = keyWords
                        .map(function (word, index) {
                        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
                    })
                        .join('');
                    var label = keyWords
                        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
                        .join(' ');
                    return { key: key, label: label };
                });
                return [2 /*return*/, formattedResponse];
            case 2:
                error_2 = _a.sent();
                console.log("Error getting vehicle types: " + error_2);
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
var getVehicleModels = function (make, type) { return __awaiter(void 0, void 0, void 0, function () {
    var res, responseData, formattedResponse, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, surveyApiClient.post('', {
                        action: 'getModels',
                        make: make,
                        type: type
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            case 1:
                res = _a.sent();
                responseData = res.data.Data;
                formattedResponse = responseData.map(function (item) {
                    var keyWords = item.toLowerCase().split(' ');
                    var key = keyWords
                        .map(function (word, index) {
                        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
                    })
                        .join('');
                    var label = keyWords
                        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
                        .join(' ');
                    return { key: key, label: label };
                });
                return [2 /*return*/, formattedResponse];
            case 2:
                error_3 = _a.sent();
                console.log("Error getting vehicle models: " + error_3);
                throw error_3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.goSurveyDataByProperties = function (properties, make, type) {
    switch (properties) {
        case 'surveyData':
            return surveyPenutupanGoSurveyGeneralInfoList_1.surveyDataList;
        case 'jenisAsuransi':
            return surveyPenutupanGoSurveyGeneralInfoList_1.coverDataList;
        case 'transmission':
            return surveyPenutupanGoSurveyGeneralInfoList_1.transmissionDataList;
        case 'fuel':
            return surveyPenutupanGoSurveyGeneralInfoList_1.fuelDataList;
        case 'merek':
            return getVehicleMakes();
        case 'tipe':
            return getVehicleTypes(make);
        case 'model':
            return getVehicleModels(make, type);
        default:
            return null;
    }
};
