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
var react_native_1 = require("react-native");
var react_1 = require("react");
var GoSurveyGeneralInfoFields_1 = require("../../../atoms/GoSurvey/GoSurveyGeneralInfoFields");
var GoSurveyGeneralInfoDropdown_1 = require("../../../atoms/GoSurvey/GoSurveyGeneralInfoDropdown");
var GoSurveyGeneralInfoBody = function (_a) {
    var _b;
    var surveyFunction = _a.surveyFunction;
    var data = (_b = surveyFunction === null || surveyFunction === void 0 ? void 0 : surveyFunction.data) === null || _b === void 0 ? void 0 : _b.data;
    var _c = react_1.useState(data), formData = _c[0], setFormData = _c[1];
    // Make sure data is fetched
    react_1.useEffect(function () {
        if (data) {
            setFormData(data);
        }
    }, [data]);
    var handleFieldChange = function (fieldName, value) {
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[fieldName] = value, _a)));
        });
    };
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
            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[16px] px-5 py-1" }, "General Info Body")),
        react_1["default"].createElement(react_native_1.View, { className: "w-full px-5 py-1 flex flex-col items-center" },
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.nama, onChange: handleFieldChange, fieldName: 'nama', properties: 'nama' }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'Raksa', onChange: handleFieldChange, fieldName: 'type of report', properties: 'report' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.alamatSurvey, onChange: handleFieldChange, fieldName: 'survey address', properties: 'alamatSurvey' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.noTelp, onChange: handleFieldChange, fieldName: 'phone no', properties: 'noTelp' }),
            react_1["default"].createElement(GoSurveyGeneralInfoFields_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.email, onChange: handleFieldChange, fieldName: 'email', properties: 'email' }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: 'Awal Penutupan', onChange: handleFieldChange, fieldName: 'survey data', properties: 'surveyData' }),
            react_1["default"].createElement(GoSurveyGeneralInfoDropdown_1["default"], { data: formData === null || formData === void 0 ? void 0 : formData.jenisAsuransi, onChange: handleFieldChange, fieldName: 'type of cover', properties: 'jenisAsuransi' }))));
};
exports["default"] = GoSurveyGeneralInfoBody;
