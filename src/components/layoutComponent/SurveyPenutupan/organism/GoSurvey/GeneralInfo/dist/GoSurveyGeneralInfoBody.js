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
var react_native_1 = require("react-native");
var react_native_simple_toast_1 = require("react-native-simple-toast");
var react_1 = require("react");
var GoSurveyGeneralInfoFields_1 = require("../../../atoms/GoSurvey/GoSurveyGeneralInfoFields");
var GoSurveyGeneralInfoDropdown_1 = require("../../../atoms/GoSurvey/GoSurveyGeneralInfoDropdown");
var patchGeneralInfoGoSurvey_1 = require("../../../../../../services/api/surveyPenutupan/patchGeneralInfoGoSurvey");
var GoSurveyGeneralInfoBody = function (_a) {
    var _b;
    var surveyFunction = _a.surveyFunction, navigateToSurvey = _a.navigateToSurvey, isGeneralInfoValidated = _a.isGeneralInfoValidated;
    var _c = react_1.useState(null), formData = _c[0], setFormData = _c[1];
    var data = (_b = surveyFunction === null || surveyFunction === void 0 ? void 0 : surveyFunction.data) === null || _b === void 0 ? void 0 : _b.data;
    react_1.useEffect(function () {
        if (data) {
            setFormData(data);
        }
    }, [data]);
    var handleFieldChange = function (properties, value) {
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[properties] = value, _a)));
        });
    };
    var handleSaveGeneralInfo = function (data, noPengajuan) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) {
                        react_native_simple_toast_1["default"].show('No data to save!', react_native_simple_toast_1["default"].SHORT);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, patchGeneralInfoGoSurvey_1.patchGeneralInfoGoSurvey(data, noPengajuan)];
                case 2:
                    res = _a.sent();
                    if (res.status === '01') {
                        react_native_simple_toast_1["default"].show('Survey Has Been Saved!', react_native_simple_toast_1["default"].SHORT);
                        navigateToSurvey();
                        isGeneralInfoValidated();
                    }
                    else if (res.status === '02') {
                        react_native_simple_toast_1["default"].show('Save Survey Failed!', react_native_simple_toast_1["default"].SHORT);
                    }
                    surveyFunction.refetch();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log('Failed to accept survey:', error_1);
                    throw Error;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    if (surveyFunction === null || surveyFunction === void 0 ? void 0 : surveyFunction.isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { className: "h-screen w-screen flex flex-col justify-center items-center bg-gray-400/50" },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#00bffe" })));
    }
    if (surveyFunction === null || surveyFunction === void 0 ? void 0 : surveyFunction.isError) {
        return (react_1["default"].createElement(react_native_1.Text, { className: "h-screen w-screen text-center text-lg text-red-500" }, "Error loading data"));
    }
    return (react_1["default"].createElement(react_native_1.ScrollView, { automaticallyAdjustKeyboardInsets: true, className: "flex-grow", refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: surveyFunction.isLoading, onRefresh: surveyFunction.refetch, colors: ['#00bfff'] }) },
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" },
            react_1["default"].createElement(react_native_1.Text, { className: "font-semibold text-black text-[16px] px-5 py-1" }, "General Info")),
        react_1["default"].createElement(react_native_1.Text, { className: "text-black text-lg px-5 py-1 mb-6" }, data === null || data === void 0 ? void 0 :
            data.noPengajuanSurvey,
            "/", data === null || data === void 0 ? void 0 :
            data.unitNo),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[16px] px-5 py-1" }, "Data Of Insured")),
        react_1["default"].createElement(react_native_1.View, { className: "w-full px-5 py-1 flex flex-col items-center" },
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.nama, onChange: handleFieldChange, fieldName: 'nama', properties: 'nama' }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'Raksa', onChange: handleFieldChange, fieldName: 'type of report', properties: 'report' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.alamatSurvey, onChange: handleFieldChange, fieldName: 'survey address', properties: 'alamatSurvey' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.noTelp, onChange: handleFieldChange, fieldName: 'phone no', properties: 'noTelp' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.email, onChange: handleFieldChange, fieldName: 'email', properties: 'email' }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'Awal Penutupan', onChange: handleFieldChange, fieldName: 'survey data', properties: 'surveyData' }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.jenisAsuransi, onChange: handleFieldChange, fieldName: 'type of cover', properties: 'jenisAsuransi' })),
        react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-black mt-3" },
            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[16px] px-5 py-1" }, "Data Of Vehicle")),
        react_1["default"].createElement(react_native_1.View, { className: "w-full px-5 py-1 flex flex-col items-center" },
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.platNomor, onChange: handleFieldChange, fieldName: 'license no', properties: 'platNomor' }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.merek, onChange: handleFieldChange, fieldName: 'make', properties: 'merek', placeholder: "Select a Make" }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.tipe, onChange: handleFieldChange, fieldName: 'category', properties: 'tipe', placeholder: "Select a Category", dependencies: { make: formData === null || formData === void 0 ? void 0 : formData.merek } }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.model, onChange: handleFieldChange, fieldName: 'model', properties: 'model', placeholder: "Select a Model", dependencies: { make: formData === null || formData === void 0 ? void 0 : formData.merek, tipe: formData === null || formData === void 0 ? void 0 : formData.tipe } }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.bodyType, onChange: handleFieldChange, fieldName: 'body type', properties: 'bodyType', placeholder: "Select Body Type" }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.chassisNo, onChange: handleFieldChange, fieldName: 'chassis no', properties: 'chassisNo' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.engineNo, onChange: handleFieldChange, fieldName: 'engine no', properties: 'engineNo' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.year, onChange: handleFieldChange, fieldName: 'year', properties: 'year' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.warna, onChange: handleFieldChange, fieldName: 'license no', properties: 'warna' }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.transmission, onChange: handleFieldChange, fieldName: 'transmission', properties: 'transmission', placeholder: "Select Transmission" }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.fuel, onChange: handleFieldChange, fieldName: 'fuel', properties: 'fuel', placeholder: "Select Fuel" })),
        react_1["default"].createElement(react_native_1.View, { className: "w-full flex justify-center items-center py-3 my-5" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "bg-gray-100 rounded-md px-4 py-1.5 border border-black", onPress: function () {
                    return handleSaveGeneralInfo(formData, formData === null || formData === void 0 ? void 0 : formData.noPengajuanSurvey);
                } },
                react_1["default"].createElement(react_native_1.Text, { className: "text-black text-sm text-center" }, "Save")))));
};
exports["default"] = GoSurveyGeneralInfoBody;
