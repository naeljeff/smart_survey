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
exports.patchGeneralInfoGoSurvey = void 0;
var apiClient_1 = require("../../../utilities/apiClient");
var KEY_ID = process.env.KEY_ID_PATCH_SURVEY || '';
exports.patchGeneralInfoGoSurvey = function (data, noPengajuan) { return __awaiter(void 0, void 0, void 0, function () {
    var BASE_ACCEPT_SURVEY_URL, surveyApiClient, requestData, res, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                BASE_ACCEPT_SURVEY_URL = process.env.BASE_PATCH_SURVEY_URL || '';
                surveyApiClient = apiClient_1["default"](BASE_ACCEPT_SURVEY_URL);
                requestData = {
                    key_id: KEY_ID,
                    no_pengajuan: noPengajuan,
                    unit_no: data === null || data === void 0 ? void 0 : data.unitNo,
                    alamat_survey: data === null || data === void 0 ? void 0 : data.alamatSurvey,
                    body_type: data === null || data === void 0 ? void 0 : data.bodyType,
                    chassis_no: data === null || data === void 0 ? void 0 : data.chassisNo,
                    email: data === null || data === void 0 ? void 0 : data.email,
                    engine_no: data === null || data === void 0 ? void 0 : data.engineNo,
                    fuel: data === null || data === void 0 ? void 0 : data.fuel,
                    jenis_asuransi: data === null || data === void 0 ? void 0 : data.jenisAsuransi.toUpperCase(),
                    merek: data === null || data === void 0 ? void 0 : data.merek.toUpperCase(),
                    model: data === null || data === void 0 ? void 0 : data.model.toUpperCase(),
                    nama: data === null || data === void 0 ? void 0 : data.nama,
                    no_telp: data === null || data === void 0 ? void 0 : data.noTelp,
                    plat_nomor: data === null || data === void 0 ? void 0 : data.platNomor,
                    tipe: data === null || data === void 0 ? void 0 : data.tipe.toUpperCase(),
                    transmission: (_a = data === null || data === void 0 ? void 0 : data.transmission) === null || _a === void 0 ? void 0 : _a.toUpperCase(),
                    warna: data === null || data === void 0 ? void 0 : data.warna.toUpperCase(),
                    year: data === null || data === void 0 ? void 0 : data.year
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, surveyApiClient.post('', requestData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            case 2:
                res = _b.sent();
                return [2 /*return*/, res.data];
            case 3:
                error_1 = _b.sent();
                console.log("Error getting new survey: " + error_1);
                throw error_1;
            case 4: return [2 /*return*/];
        }
    });
}); };
